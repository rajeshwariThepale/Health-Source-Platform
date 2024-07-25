const mongoose = require('mongoose');
const Patient = require('../models/patients');


async function addPatient(patient){
  // console.log("req.body.patientsController",patient);
    try{
        const patientDetails ={
            patientName: patient.patientName,
            patientAge: patient.patientAge,
            patientGender: patient.patientGender,
            patientAddress: patient.patientAddress,
            patientPhone: patient.patientPhone, 
            patientEmail: patient.patientEmail,
            patientPassword: patient.patientPassword,
            patientDOB: patient.patientDOB,
            patientBloodGr: patient.patientBloodGr  
        };

        console.log(patientDetails);
        const newPatient = new Patient(patientDetails);
        const result = await newPatient.save();
    
        // return {status:200, task: result};
        return (result);

    } catch(error){
        throw{status:500, message:'server error'}

    }
}

async function getAllPatients() {
    try {
      const Patients = await Patient.find({}, {__v: 0 });
      return Patients;
    } catch (error) {
      throw { status: 500, message: "Internal server error" };
    }
  }

module.exports = { addPatient, getAllPatients};
