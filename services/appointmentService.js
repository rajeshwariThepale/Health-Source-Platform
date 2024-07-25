const mongoose = require('mongoose');
const Appointments = require('../models/appointment');


async function addAppointments(appointment) {
    try{
        const appointmentDetails ={
            patientId: appointment.patientId,
            doctorId: appointment.doctorId,
            appointmentDateTime: appointment.appointmentDateTime,
            status: appointment.appointmentStatus,
            
        }
        const newAppointments = new Appointments(appointmentDetails);
        const result = await newAppointments.save();
        return { status: 200, task: result };

    }catch(error){
        throw { status: 500, message: "Internal server Error" };
    }
}

async function getAllAppointment() {

    try{
        const allAppointment = await Appointments.find({}, {__v: 0});
        return allAppointment;
    }
    catch(error){
        throw { status: 500, message: "Internal server Error" };
    }

}

async function getAllAppointmentByPatientId(PatientId){
    try{
        console.log("getAllAppointmentByPatientId", PatientId);
        const allAppointments = await Appointments.find({patientId: PatientId});   //, {__v: 0}
        return allAppointments;
    }catch(error){
        throw { status: 500, message: "Internal server Error" };
    }
    
}

async function getAppointmentByDoctor(DoctorId){
    try{
        console.log("getAppointmentByDoctor", DoctorId);
        const showAppointments = await Appointments.find({doctorId: DoctorId});   //, {__v: 0}
        return showAppointments;
    }catch(error){
        throw { status: 500, message: "Internal server Error" };
    }
}

// async function getAppointmentByQuery(query){
//     try{
//         const allAppointments = await Appointments.find(query, { _id: 0, __v: 0});
//         return allAppointments;
//     }
//     catch(error){
//         throw { status: 500, message: "Internal server Error" };
//     }
// }
async function updateAppointmentStatusByDoctor(appointmentId, status){
    try{
        console.log("appointmentId",appointmentId);
        const updateDoc = await Appointments.findByIdAndUpdate(
            appointmentId,
            {status},
            {new:true}
        );
        return updateDoc;
    } catch(error){
        throw error;
    }
}

async function deleteAppointmentByPatient(appointmentId){
    try{
        const deleteAppointment = await Appointments.findByIdAndDelete(appointmentId);
        return deleteAppointment;
    } catch(error){
        throw new Error("Error deleting Appointment")
    }
};

module.exports = {
    addAppointments,
    getAllAppointment,
    getAllAppointmentByPatientId,
    getAppointmentByDoctor,
    // getAppointmentByQuery,
    updateAppointmentStatusByDoctor,
    deleteAppointmentByPatient
}
