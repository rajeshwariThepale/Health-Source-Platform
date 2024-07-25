const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const cors = require('cors');

const app = express();
const port = 5002;  


//connect DB
connectDB();

//to connect react-files
const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 
  };
  
  app.use(cors(corsOptions));

//api routes
app.use(bodyParser.json());
app.use('/api', apiRoutes);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

