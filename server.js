// require our dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

// use ejs and express Layouts
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(bodyParser.urlencoded());

//route our app
var router = require('./app/routes');
app.use('/', router);


//set static files (css and images, ect) location
app.use(express.static(__dirname+'/public'));

//start server
app.listen(port, function(){
  console.log(`app started on ${port}`);
});
