const request = require('request');
const dotenv = require('dotenv');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
dotenv.config({ path: './config/config.env' });

const command_line_argument = process.argv[3]

geocode(command_line_argument,(err, {latitude, longitude, location} = {}) => {
   if(err){
       return console.log(err)
   }else{
    forecast(latitude, longitude, (err,forecast) => {
        if(err){
            return console.log(err)
        }                
        console.log(location)
        console.log(forecast)
    })
   }
    
})



