const patientService = require('../services/patientService');
const Patients = require('../models/patients');

const addPatient = async(req, res)=>{
    console.log("req.body.patientsController",req.body);

    try{
        const result = await patientService.addPatient(req.body);
        res.status(200).send(result);        

        } catch(error){
            res.status(500).send({message:'server error'});
        }
 };

 const getAllPatients = async (req, res) =>{

    try{
        const result = await patientService.getAllPatients();
        res.status(200).send(result);

    } catch(error){
        res.status(500).send({message: 'server error'});
    }
 };

 //login functionality

    const loginPatient = async (req, res) => {
        
        try {
            const {patientEmail, patientPassword} = req.body;
            const user = await Patients.findOne({ patientEmail });
            console.log(user);
            if (!user) {
               return res.status(404).send({ message: "User not found" });
            }
            else {

                const isPasswordValid = await Patients.findOne({ patientPassword });

            if (!isPasswordValid) {
                return res.status(401).send({ message: "Login failed" });
            } else{
                console.log("Login successful for user:", user.email); 
                res.status(200).send({ message: 'Login successful' });
            }
            }
        } catch (error) {
            console.error(error);
          res.status(500).send({ message: "Invalid Credentials" });
        }
      };
      

 module.exports = { 
    addPatient, 
    getAllPatients,
    loginPatient
};