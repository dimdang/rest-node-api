const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');

mongoose.connect(
    'mongodb://bucky:cooldev086@ds115963.mlab.com:15963/node-rest-db', {
        useNewUrlParser: true
    }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Protect some error 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Controll-Allow-Headers",
        "Origin, X-Resquested-with, Content-Type, Acept, Autherization"
    );

    if (res.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATH', 'DELETE')
        return res.status(200).json({});
    }

    next();
});

// Routes which is handle for each requested
app.use('/products', productRoutes);
app.use('/order', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 400;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;