// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const http = require('http');

 app.use(express.static('public'));
 
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  
  let ip = req.headers['x-forwarded-for'].split(',')[0];
  
  let software = req.headers['user-agent']
                    .split(')')[0]
                    .split('(')[1];

  let lan = req.headers['accept-language'].split(',')[0];
  let obj = {
     ip:ip,
     software:software,
     language:lan
   };
   
   res.sendFile(__dirname + '/views/index.html');
   res.send(obj);
   res.end();
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
