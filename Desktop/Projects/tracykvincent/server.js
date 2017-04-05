var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Post = require('./models/post');

var app = express();

var MongoURI = 'mongodb://localhost:27017/tracykvincent'
var MongoDB = mongoose.connect(MongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB Connection Error: ', err);
})

MongoDB.once('open', function() {
  console.log('MongoDB Connection Open!');
})

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function() {
  console.log('Server start, listening on port ' + port);
});
