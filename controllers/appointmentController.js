const appointmentServices = require('../services/appointmentService');
const mongoose = require('mongoose');

const addAppointments = async(req, res)=>{
    try{
        const result = await appointmentServices.addAppointments(req.body);
        res.status(result.status).send(result.task || {message: result.message});
    }catch(error){
        res.status(500).send({message:'server error'});
    }
};

const getAllAppointment = async (req, res)=>{
try{
    const result = await appointmentServices.getAllAppointment();
    res.status(200).send(result);
    } catch(error){
    res.status(500).send({message:'server error'});
    }

};

const getAllAppointmentByPatientId = async (req, res)=>{
    try{
        const {patientId} = req.query;
        // console.log(patientId);
        const result = await appointmentServices.getAllAppointmentByPatientId(patientId);
        res.status(200).send( result);
    } catch(error){
        res.status(500).send({message:'server error'});
    }
};

const getAppointmentByDoctor = async (req, res)=>{
    try{
        const {doctorId} = req.query;
        console.log(doctorId);
        const result = await appointmentServices.getAppointmentByDoctor(doctorId);
        res.status(200).send( result);
    } catch(error){
        res.status(500).send({message:'server error'});
    }
};


// const getAppointmentByQuery = async (req, res) => {
//     try{
//         const result = await appointmentServices.getAppointmentByQuery(req.query);
//         res.status(200).send(result);
//     } catch(error){
//         res.status(500).send({message:'server error'});
//     }
// };

const updateAppointmentStatusByDoctorId = async (req, res) => {
    try{
        console.log(req.body);
        const {id} = req.params;
        console.log(id);
        const {status} = req.body;

        if (!['Pending','Cancelled', 'Confirmed'].includes(status)){
            return res.status(400).send({message: 'Invalid status'});
        }
        const updatedAppointment = await appointmentServices.updateAppointmentStatusByDoctor(id, status);
        if(!updatedAppointment){
            return res.status(404).json({message: 'Appointment not found'});
        }
        res.status(200).send(updatedAppointment);
    } catch(error){
        console.error('Error updating appointment:', error);
        if(error instanceof mongoose.Error.ValidationError){
            res.status(404).json({message: 'Validation error', details: error.errors});
        } else if(error instanceof mongoose.Error.CastError){
            res.status(404).json({message: 'Invalid appointment id', details: error.message});
        } else{
            res.status(500).send({message:'server error'});
        }
    }
};
 
const deleteAppointmentByPatient = async (req, res) => {
    try{
        const appointmentId = req.params.id;
        const deleteAppointment = await appointmentServices.deleteAppointmentByPatient(appointmentId);
        if(!deleteAppointment){
            return res.status(404).json({message: 'Appointment not found'});
        }
        res.status(200).json({message: 'Appointment successfully deleted'});
    } catch(error){
        console.error('Error deleting appointment:', error);
        res.status(500).send({message:'server error. Failed to delete appointment'});
    }
};

module.exports ={
    addAppointments,
    getAllAppointment,
    getAllAppointmentByPatientId,
    getAppointmentByDoctor,
    // getAppointmentByQuery,
    updateAppointmentStatusByDoctorId,
    deleteAppointmentByPatient
};