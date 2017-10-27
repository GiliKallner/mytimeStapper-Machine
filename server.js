
const express = require('express');
const app = express();
const http = require('http');

 app.use(express.static('public'));
 
app.get("/", function (req, res) {
  
   
   res.sendFile(__dirname + '/views/index.html');
  
});

app.post("/",(req,res) => {
  
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
  return res.json(obj);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
