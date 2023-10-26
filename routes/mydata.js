var express = require('express');
var router = express.Router();

/* Mydata page */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Vinay Reddy Gujjula' });
});

module.exports = router;
