const request = require('request');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

/*
request({ url: process.env.Weatherstack_API_STRING, json: true}, (err, res) => {
   console.log(res.body.current.temperature+'-'+res.body.current.feelslike);
});
*/
/*
request({url: process.env.MapBox_API_STRING, json: true},(err,res) => {
    const latitude = res.body.features[0].center[1];
    const longtitude = res.body.features[0].center[0];
    console.log(latitude,longtitude);
})
*/

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+ '.json?types=place&access_token=pk.eyJ1IjoiYmFyaXM0OCIsImEiOiJja3UwenlvZ3UweTJpMm9wY2c1YjdrbDVxIn0.d-gU8_8dGcc-nIs-cwj0FA'
    request({url: url, json: true}, (err, res) => {
        if( err ){
           callback('unable services!',undefined)
        }else if(res.body.features.length === 0){
           callback('we cant find address try another',undefined)
        } else {
            callback(undefined,{
                 latitude : res.body.features[0].center[1],
                 longtitude : res.body.features[0].center[0],
                 location: res.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode