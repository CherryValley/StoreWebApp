var express = require('express');
var commonService = require('../../service/commonService');
var commonUtils = require('../../common/commonUtils');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('account/forgetPassword', { title: '忘记密码', layout: null });
});
module.exports = router;