const request = require('request');

const forecast = (latitude, longtidude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=09bcffdc274fba2220ee62396cbfbd15&query=' + latitude + ',' + longtidude //+ '&units=f'
    request({url, json: true }, (err, {body}) => {
    if( err ){
        callback('unable services!',undefined)
     }else if(body.err){
        callback('we cant find address try another',undefined)
     } else {
        callback(undefined,body.location.localtime+"-Temperature:"+body.current.temperature+" "+"-Feelslike:"+body.current.feelslike+" "+"-Forecast:"+body.current.weather_descriptions+" "+"-humidity:"+body.current.humidity+" "+"-wind_speed:"+body.current.wind_speed,
       )
     }
})
}

module.exports = forecast