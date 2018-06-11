var express = require('express');
var commonService = require('../../service/commonService');
var commonUtils = require('../../common/commonUtils');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('account/validation', { title: '验证邮箱', layout: null });
});
module.exports = router;