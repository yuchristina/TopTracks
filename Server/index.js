var express = require('express');
var bodyParser = require('body-parser');
var $ = require('jquery');
var database = require('../Database/index.js')

var items = require('../Database');

var app = express();

app.use(express.static(__dirname + '/../Client/dist'));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/items', function (req, res) {
    console.log('received!');
    res.end();
});

app.post('/items', urlencodedParser, function (req, res) {
  // console.log('Req body', req.body);
  database.selectAll(req.body.name, req.body.url, req.body.cover, req.body.album, req.body.artist, req.body.query, (err, value) => {
      res.end();
    });
  // res.sendStatus(200);
});


app.listen(8080, function() {
  console.log('listening on port 8080!');
});