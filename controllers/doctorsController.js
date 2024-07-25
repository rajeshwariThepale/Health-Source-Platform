const doctorService = require('../services/doctorService');

const addDoctor = async(req, res)=>{
    console.log("req.body.patientsController",req.body);
    
    try{
        const result = await doctorService.addDoctor(req.body);
        res.status(result.status).send(result.task || { message: result.message });
        
    } catch(error){
        res.status(500).send({message:'server error'});
    }
}

const getAllDoctors = async(req, res)=>{
    try{
        const result = await doctorService.getAllDoctors();
        res.status(200).send(result);

    } catch(error){
        res.status(500).send({message:'server error'});
    }
}

module.exports = { addDoctor, getAllDoctors};
