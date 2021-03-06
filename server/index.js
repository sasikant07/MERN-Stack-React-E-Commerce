const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});
connectDB();

const app = express()
app.use(cors())
app.use(express.json())

// if (process.env.NODE_ENV === "development") {
//     app.use(morgan("dev"));
// }

// app.use('/', 'Hello World!');

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);