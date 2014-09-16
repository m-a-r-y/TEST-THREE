var express = require('express');
var router = express.Router();

var grabAvatar = process.env.GRAVATAR_LOOKUP;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', grabAvatar : grabAvatar });
});

module.exports = router;
