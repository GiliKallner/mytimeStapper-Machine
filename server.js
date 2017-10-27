// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const url = require('url');
const strtime = require('strftime');

app.use(express.static('public'));

let getJsonTime = t =>{

    let date,time;
    if (!isNaN(parseInt(t))) date = new Date(parseInt(t));
    else date = new Date(t);
  

    time = date.getTime();    
    return isNaN(time)?{unix:null,natural:null}:{unix: time , natural: strtime('%B %F',date)};
}

app.get('/:timestamp',(req,res)=>{
 
  let t =req.params.timestamp;
  res.json(getJsonTime(t));
});
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
