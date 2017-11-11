var express = require('express');
var bodyParser = require('body-parser');
var $ = require('jquery');


var items = require('../Database');

var app = express();

app.use(express.static(__dirname + '/../Client/dist'));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.post('/items', urlencodedParser, function (req, res) {
  console.log('Req body', req.body);
  // res.sendStatus(200);
  res.end();
});


app.listen(8080, function() {
  console.log('listening on port 8080!');
});