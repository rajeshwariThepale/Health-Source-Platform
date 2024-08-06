const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patientsController');
const doctorsController = require('../controllers/doctorsController');
const appointmentController = require('../controllers/appointmentController');

// Patient routes
router.post('/patient/addPatient', patientsController.addPatient);
router.get('/patients', patientsController.getAllPatients);
router.post('/patient/login/', patientsController.loginPatient);

//Doctors routes
router.post('/doctor/addDoctor', doctorsController.addDoctor);
router.get('/doctors', doctorsController.getAllDoctors);

//Appointment routes
router.post('/appointment', appointmentController.addAppointments);
router.get('/allAppointment', appointmentController.getAllAppointment);
router.get('/appointmentByPatients/', appointmentController.getAllAppointmentByPatientId);
router.get('/appointmentByDoctor/', appointmentController.getAppointmentByDoctor);


router.put('/appointment/:id', appointmentController.updateAppointmentStatusByDoctorId);
router.delete('/deleteAppointments/:id', appointmentController.deleteAppointmentByPatient); 

module.exports = router;