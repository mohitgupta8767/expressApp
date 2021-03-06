const express = require('express');   // running on express
const dotenv = require('dotenv');     // insert/use variable into current environment

// Route files
const bootcamps = require('./routes/bootcamps');


// load env vars

dotenv.config({ path: './config/config.env' });

const app = express();    //initialling express

//mount Routers

app.use('/api/v1/bootcamps', bootcamps)


const PORT = process.env.port || 5000;   //calling environment variable
//const PORT =process.env.NODE_ENV == 'development'? process.env.port || 5000:3000;

app.listen(                          // method to defining port for the current express app
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));