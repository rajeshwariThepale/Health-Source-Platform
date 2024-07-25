const mongoose = require('mongoose');
const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://rajeshwarithepale:dbRajeshwari20@cluster0.cee0juj.mongodb.net/Appointments');
        console.log('MongoDB connected');
    }
    catch(error){
        console.log('error',error.message);
        process.exit(1);
    }
};

module.exports = connectDB;