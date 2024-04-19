
#  ElectrifyIt-Backend
ElectrifyIt-Backend is a backend service for a ElectrifyIt Dashboard. 
## Installation
To install UnstopBackend, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/sum1275/ElectrifyIt-Backend.git

## Database and Server Configuration for Development Environment

To set up the project in your local environment, configure the `.env` file as follows:

1. Create a file named `.env` in the root directory of the project.
2. Add the following content to the `.env` file:

   ```plaintext
   # Environment variables for development
  
   DEV_PORT=8084
   NODE_ENV=development
   PAGE_SIZE=10
   DB_DEV_URL=mongodb://localhost:27017/vehicle

The application provides the following endpoints:
   ## API Endpoints
- **Validate Coupon Code**:
  This feature checks the validity of a coupon code.

  - **Method**: `POST`
  - **Endpoint**: `http://localhost:8084/api/vehicle/bulkupload`
  - **Request Body**:
    ```json form-data
    {
      file: sample_data.csv
    }
    ```
  - **Response Sample**:
    ```json
    {
      "status": 00,
      "success": "true",
	  "message": "Bulk Uploaded successfully",
	  "data": "[]"
    }
    ```
This API endpoint allows you to upload a CSV file of vehicle data all at once. The data will be updated in the database, and if there are duplicates, an error will be thrown, and the data will not be saved.

- **Retrieve Vehicle Details**:
  This feature provides detailed information about a vehicles.

  - **Method**: `GET`
  - **Endpoint**: `http://localhost:8084/api/vehicle/listing?frequency=&startDate=&endDate=&page=2`
  - **Request PARAMS**:
    ```json
    {
      "frequency": "Weekly/Monthly/Daily",
	  "startDate":"2024-04-19";
	  "endDate":"2024-03-04",
	  "page":"1"
    }
    ```
  - **Response Sample**:
    ```json
    {
    "status": "00",
    "message": "success",
    "frequency": "Daily",
    "page": 2,
    "data": [
        {
            "_id": "DKVXAZX",
            "licensePlate": "DKVXAZX",
            "make": "Tesla",
            "VIN": "XT2C6LXFPMZDL5U7E",
            "model": "Semi Delivery Event, 2022",
            "type": "Truck",
            "date": "2023-06-21T00:00:00.000Z",
            "milesDriven": 216,
            "__v": 0
        },
        {
            "_id": "6CNVB44",
            "licensePlate": "6CNVB44",
            "make": "Tesla",
            "VIN": "9RUB6H2FVUJTKLGCY",
            "model": "Semi Delivery Event, 2022",
            "type": "Truck",
            "date": "2023-07-12T00:00:00.000Z",
            "milesDriven": 227,
            "__v": 0
        },
        {
            "_id": "V9VRV6W",
            "licensePlate": "V9VRV6W",
            "make": "Nikola",
            "VIN": "B6ZUK9L6SGT6XSPS5",
            "model": "TRE BEV, 2022",
            "type": "Truck",
            "date": "2023-07-12T00:00:00.000Z",
            "milesDriven": 194,
            "__v": 0
        },
        {
            "_id": "CCXLDHK",
            "licensePlate": "CCXLDHK",
            "make": "Ree",
            "VIN": "NKBLJY7U4FH1JB9A3",
            "model": "P7 chassis cab 2023",
            "type": "Van",
            "date": "2023-07-18T00:00:00.000Z",
            "milesDriven": 131,
            "__v": 0
        },
        {
            "_id": "AP4U9NW",
            "licensePlate": "AP4U9NW",
            "make": "GM Envolv",
            "VIN": "4J9F9YRCW8T4TE2XN",
            "model": "Brightdrop zevo 600, 2022",
            "type": "Van",
            "date": "2023-07-28T00:00:00.000Z",
            "milesDriven": 272,
            "__v": 0
        },
        {
            "_id": "70GRUG7",
            "licensePlate": "70GRUG7",
            "make": "GM Envolv",
            "VIN": "GSG9NBPHH2ME514SM",
            "model": "Brightdrop zevo 600, 2022",
            "type": "Van",
            "date": "2023-07-29T00:00:00.000Z",
            "milesDriven": 106,
            "__v": 0
        },
        {
            "_id": "RTDZGM0",
            "licensePlate": "RTDZGM0",
            "make": "Nikola",
            "VIN": "2378NJU70BE767K6X",
            "model": "TRE BEV, 2022",
            "type": "Truck",
            "date": "2023-08-14T00:00:00.000Z",
            "milesDriven": 109,
            "__v": 0
        },
        {
            "_id": "X0H4BN8",
            "licensePlate": "X0H4BN8",
            "make": "Tesla",
            "VIN": "3Z61XGUCJW9W05152",
            "model": "Semi Delivery Event, 2022",
            "type": "Truck",
            "date": "2023-08-14T00:00:00.000Z",
            "milesDriven": 277,
            "__v": 0
        },
        {
            "_id": "T6RNLJT",
            "licensePlate": "T6RNLJT",
            "make": "Nikola",
            "VIN": "AKKW83X3HCUNF22CE",
            "model": "TRE BEV, 2022",
            "type": "Truck",
            "date": "2023-08-15T00:00:00.000Z",
            "milesDriven": 252,
            "__v": 0
        },
        {
            "_id": "335BG7L",
            "licensePlate": "335BG7L",
            "make": "GM Envolv",
            "VIN": "3JY7YLB7PM3TKL7CP",
            "model": "Brightdrop zevo 600, 2022",
            "type": "Van",
            "date": "2023-08-30T00:00:00.000Z",
            "milesDriven": 204,
            "__v": 0
        }
    ]
}
    ```
Certainly, here's a revised version:

This API endpoint provides details about a vehicle based on the selected parameters such as frequency, which can be Monthly, Weekly, Daily, or Yearly. The date is calculated relative to the current date; for example, 'Weekly' corresponds to data from the past 7 days.

## Future Enhancements



- **Setup a Proper GraphQL Database**: 
  For future improvements, I plan to implement the backend using GraphQL to handle data more efficiently.


## Contributing

Contributions to  ElectrifyIt-Backend are welcome. 





   

