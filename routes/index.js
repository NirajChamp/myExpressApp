var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name1 = 'Niraj3';
  var datajson = { title: 'Express3', loginname: name1 };
  



  res.render('index', datajson);
});

module.exports = router;
