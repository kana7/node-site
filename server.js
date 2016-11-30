// require our dependencies
var express = require('express');
var app = express();
var port = 8080;

//route our app
var router = require('./app/routes');
app.use('/', router);

//set static files (css and images, ect) location
app.use(express.static(__dirname+'/public'));

//start server
app.listen(port, function(){
  console.log('app started');
});
