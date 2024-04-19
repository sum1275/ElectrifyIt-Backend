const Vehicle = require("../models/vehicle");
const date = require("date-and-time");
var mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const csv = require("csv-parser");
const axios = require("axios");
const fs = require("fs");

exports.bulkUpload = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("errors.array()");
    console.log(errors.array());
    return res.status(400).send({
      status: "01",
      success: "false",
      msg: "invalid input",
      errors: errors.array(),
    });
  }

  try {
    if (req.files.file == undefined || req.files.file == null) {
      return res.status(400).send({
        status: "01",
        success: "False",
        message: "please upload file to csv file ",
      });
    }

    if (req.files.file[0].size > 1048576) {
      console.log("removing---");
      fs.rm(req.files.file[0].path, (err) => {
        if (err) {
          logger.debug(err);
          console.log(err);
        }
      });
      return res.status(400).send({
        status: "01",
        success: "False",
        message: "upload file size should be less than 1 MB",
      });
    }

    let data = [];

    function processData() {
      return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(`${req.files.file[0].path}`)
          .pipe(csv({}))
          .on("data", (data) => results.push(data))
          .on("end", () => {
            resolve(results);
          })
          .on("error", (error) => {
            reject(error);
          });
      });
    }

    await processData()
      .then((results) => {
        data = results;
      })
      .catch((error) => {
        console.error(error);
      });

    let data_length = 0;
    data_length = data.length;
    console.log("line 81---data_length");
    console.log(data_length);

    for (let row of data) {
      // let parsedDate = date.parse(row["Date"], "DD/MM/YYYY");
      let dateString = row["Date"]; // Assuming row is an object representing a row in the CSV file
      console.log("dateString", dateString);
      let parsedDate = new Date(dateString); // This will parse the date string in the CSV file format "YYYY/MM/DD"
      console.log("parsedDate", parsedDate);

      let formattedDate = date.format(parsedDate, "YYYY-MM-DDTHH:mm:ss.SSSZ");
      console.log("formattedDate", formattedDate);

      let licensePlate = row["License Plate"].trim();
      let make = row["Make"].trim();
      let vin = row["VIN"].trim().toUpperCase();
      let model = row["Model"].trim();
      let type = row["Type"];
      let milesDriven = row["Miles Driven"];
      const missingFields = [];
      if (!licensePlate) missingFields.push("licensePlate");
      if (!make) missingFields.push("make");
      if (!vin) missingFields.push("VIN");
      if (!model) missingFields.push("model");
      if (!type) missingFields.push("type");
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields ${missingFields.join(", ")}`);
      }

      let vehicleDataRow = {
        _id: licensePlate,
        date: formattedDate,
        licensePlate: licensePlate,
        make: make,
        VIN: vin,
        model: model,
        type: type,
        milesDriven: milesDriven,
      };

      console.log("vehicleDataRow");
      console.log(vehicleDataRow);
      // throw new Error('stop stop');

      try {
        const data = await new Vehicle(vehicleDataRow).save();
      } catch (err) {
        console.error("An error occurred while saving the data");
        console.error(err);
        if (err.code === 11000) {
          console.log("Duplicate key error");
          return res.status(200).send({
            status: "01",
            success: false,
            message: "Duplicate key error: A vehicle with the same license plate already exists.",
          });
        }
      }
    }
    fs.rm(req.files.file[0].path, (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({
      status: "00",
      success: true,
      message: "Bulk Uploaded successfully",
      data: [],
    });
  } catch (err) {
    console.log(err);

    return res
      .status(500)
      .send({ status: "01", success: "false", msg: err?.message });
  }
};
exports.vehicleListing = async (req, res, next) => {
  try {
    // Parse query parameters
    let { frequency, startDate, endDate, page } = req.query;


    // Validate page number
    const pageNumber = parseInt(page) || 1;
    if (pageNumber < 1) {
      return res.status(400).json({ error: "Invalid page number" });
    }
    if (startDate === undefined || startDate ==='' || startDate===null ) {
      startDate = "1979-01-01";
    }
    if (endDate === undefined || endDate ===''|| endDate ===null) {
      endDate = new Date().toISOString();
    }
    if (frequency === undefined || frequency === "") {
      frequency = "Daily";
    }
    // Define query options based on time frame
    let queryOptions = {
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    };
    console.log("line 166 queryOptions", queryOptions);
    // Calculate skip based on page number and page size
    const pageSize = process.env.PAGE_SIZE
      ? parseInt(process.env.PAGE_SIZE)
      : 10;
    const skip = (pageNumber - 1) * pageSize;

    // Fetch data based on frequency and pagination
    let results;
    if (frequency === "Daily" || frequency === "") {
      results = await Vehicle.find(queryOptions)
        .sort({ date: 1 })
        .skip(skip)
        .limit(pageSize);
    } else if (frequency === "Weekly") {
      startDateWeekly = new Date(
        new Date().setDate(new Date().getDate() - 7)
      ).toISOString();
      endDateWeekly = new Date().toISOString();
      queryOptions = {
        date: {
          $gte: new Date(startDateWeekly),
          $lte: new Date(endDateWeekly),
        },
      };
      console.log("queryOptions lin 187", queryOptions);
      // Aggregate data for weekly, monthly, or yearly frequency
      results = await Vehicle.aggregate([
        {
          $match: queryOptions,
        },
        {
          $group: {
            _id: { [frequency.toLowerCase()]: `$date` },
            data: { $push: "$$ROOT" },
          },
        },
        { $sort: { _id: 1 } },
        { $skip: skip },
        { $limit: pageSize },
      ]);
    } else if (frequency === "Monthly") {
      startDateMonthly = new Date(
        new Date().setDate(new Date().getDate() - 30)
      ).toISOString();
      endDateMonthly = new Date().toISOString();
      queryOptions = {
        date: {
          $gte: new Date(startDateMonthly),
          $lte: new Date(endDateMonthly),
        },
      };
      console.log("queryOptions lin 216", queryOptions);
      results = await Vehicle.aggregate([
        {
          $match: queryOptions,
        },
        {
          $group: {
            _id: { [frequency.toLowerCase()]: `$date` },
            data: { $push: "$$ROOT" },
          },
        },
        { $sort: { _id: 1 } },
        { $skip: skip },
        { $limit: pageSize },
      ]);
    } else if (frequency === "Yearly") {
      startDateYearly = new Date(
        new Date().setDate(new Date().getDate() - 365)
      ).toISOString();
      endDateYearly = new Date().toISOString();
      queryOptions = {
        date: {
          $gte: new Date(startDateYearly),
          $lte: new Date(endDateYearly),
        },
      };
      console.log("queryOptions line 239 ", queryOptions);
      results = await Vehicle.aggregate([
        {
          $match: queryOptions,
        },
        {
          $group: {
            _id: { [frequency.toLowerCase()]: `$date` },
            data: { $push: "$$ROOT" },
          },
        },
        { $sort: { _id: 1 } },
        { $skip: skip },
        { $limit: pageSize },
      ]);
    } else {
      return res.status(400).json({ error: "Invalid frequency" });
    }

    // Format response
    res.status(200).json({
      status: "00",
      message: "success",
      frequency: frequency,
      page: pageNumber,
      data: results,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
