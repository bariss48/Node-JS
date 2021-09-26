const request = require('request');

const forecast = (latitude, longtidude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=09bcffdc274fba2220ee62396cbfbd15&query=' + latitude + ',' + longtidude //+ '&units=f'
    request({url: url, json: true }, (err, res) => {
    if( err ){
        callback('unable services!',undefined)
     }else if(res.body.err){
        callback('we cant find address try another',undefined)
     } else {
        callback(undefined,res.body.current.temperature+"-"+res.body.current.feelslike,
       )
     }
})

}

module.exports = forecast