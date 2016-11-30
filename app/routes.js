// require express
var express = require('express');
var path = require('path');
// create our router object
var router = express.Router();

// export our router
module.exports = router;
//route our
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', function(req, res){
  res.send('Coucou About me!');
});

router.get('/contact');
router.post('/contact');
