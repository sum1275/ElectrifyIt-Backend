const mongoose = require('mongoose');

// Define the schema
const vehicleSchema = new mongoose.Schema({
    licensePlate: { type: String, required: true },
    make: { type: String },
    VIN: { type: String },
    model: { type: String },
    type: { type: String },
    date: { type: Date },
    milesDriven: { type: Number },
    _id:{type:String}
});


const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
