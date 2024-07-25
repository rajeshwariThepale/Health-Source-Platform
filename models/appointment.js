const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients', required: true
    },
    doctorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctors', required: true
    },
    appointmentDateTime:{
        type: Date,
        required: true
    },
    Status:{ type: String, 
        enum:["Pending", "Cancelled","Confirmed"], 
        default: "Pending"
    }

});
const Appointment = mongoose.model('appointments', appointmentSchema);
module.exports = Appointment;
