const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    patientName: {type: String, required: false},
    patientAge: {type: Number, required: false},
    patientGender: {type: String, required: false},
    patientDOB: {type:Date, required:false},
    patientBloodGr: {type: String, required: false},
    patientAddress: {type: String, required: false},
    patientPhone: {type: String, required: false},
    patientEmail: {type: String, required: false},
    patientPassword: {type: String, required: false}
});

const Patient = mongoose.model('patientsregisterations', patientSchema);
module.exports = Patient;
