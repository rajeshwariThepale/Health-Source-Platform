const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({

    doctorName: {type: String, required: false},
    doctorAge: {type: Number, required: false},
    doctorGender: {type: String, required: false},
    doctorSpecialization: {type: String, required: false},
    doctorAddress: {type: String, required: false},
    doctorCity: {type: String, required: false},
    doctorPhone: {type: String, required: false},
    doctorEmail: {type: String, required: false},
    doctorPassword: {type: String, required: false}
   
});

const Doctor = mongoose.model('doctorsregisterations', doctorSchema);

module.exports = Doctor;