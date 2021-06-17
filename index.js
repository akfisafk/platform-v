// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import apisRouter from "./routes/apis.js";
// import dotenv from 'dotenv';
// dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apisRouter = require('./routes/apis');
const dotenv = require('dotenv');
dotenv.config();

// INITIALIZE APP AND IMPORTANT VARIABLES
const app = express();
app.use(cors({ origin: '*', credentials: true }));
app.options('*', cors())
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use("/apis", apisRouter);

// ERROR HANDLER
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh no, something went wrong!'
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});