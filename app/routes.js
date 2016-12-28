// require express
var express = require('express');
var path = require('path');
// create our router object
var router = express.Router();

//route our
router.get('/', function(req, res){
  res.render("pages/index");
});

router.get('/about', function(req, res){

  var users = [
    {name: "Holly", email: "holly@mail.com", avatar: "http://placekitten.com/700/700"},
    {name: "Patrick", email: "patrick@mail.com", avatar: "http://placekitten.com/700/700"},
    {name: "Bob", email: "bob@mail.com", avatar: "http://placekitten.com/700/700"},
    {name: "Jesus", email: "jesus@mail.com", avatar: "http://placekitten.com/700/700"}
  ];
  res.render("pages/about", {users : users});
});

router.get('/contact', function(req, res){
  res.render("pages/contact");
});

router.post("/contact", function(req, res){

});

// export our router
module.exports = router;
