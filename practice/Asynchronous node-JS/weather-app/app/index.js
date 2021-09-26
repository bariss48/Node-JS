const request = require('request');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

request({ url: process.env.Weatherstack_API_STRING, json: true}, (err, res) => {
   console.log(res.body.current.temperature+'-'+res.body.current.feelslike);
});

request({url: process.env.MapBox_API_STRING, json: true},(err,res) => {
    const latitude = res.body.features[0].center[1];
    const longtitude = res.body.features[0].center[0];
    console.log(latitude,longtitude);
})

