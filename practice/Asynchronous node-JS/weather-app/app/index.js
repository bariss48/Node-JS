const request = require('request');
const dotenv = require('dotenv');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
dotenv.config({ path: './config/config.env' });

/*
geocode('denizli',(err,data) => {
    console.log(err)
    console.log(data)
})
*/


forecast(37.77306,29.08778,(err,data) => {
    console.log(err)
    console.log(data)
})
