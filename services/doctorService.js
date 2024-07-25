const mongoose = require('mongoose');
const Doctor = require('../models/Doctors');


async function addDoctor(doctor){
    try{
        const doctorDetails ={
            doctorName: doctor.doctorName,
            doctorAge:doctor.doctorAge,
            doctorGender: doctor.doctorGender,
            doctorSpecialization: doctor.doctorSpecialization,
            doctorCity: doctor.doctorCity,
            doctorAddress: doctor.doctorAddress,
            doctorPhone: doctor.doctorPhone,
            doctorEmail: doctor.doctorEmail,
            doctorPassword: doctor.doctorPassword,
            
        };

        console.log(doctorDetails);
        const newDoctor = new Doctor(doctorDetails);
        const result= await newDoctor.save();

        return { status: 200, task: result };
    }
    catch(error){
        throw{status: 500, message:"server error"};
    }
}
 async function getAllDoctors(){
    try{
        const doctors = await Doctor.find({}, {__v: 0});
        return doctors;
    }
    catch(error){
        throw{status: 500, message:"server error"};
    }
}

module.exports ={
    addDoctor,
    getAllDoctors
};