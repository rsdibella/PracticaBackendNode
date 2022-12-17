
const users = require('../models/user');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = new users(24,"char", "char@m.com");
  res.send(user.getUserInfo());
});

module.exports = router;
