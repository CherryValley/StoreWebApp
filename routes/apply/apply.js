var express = require('express');
var sysConfig = require('../../config/sysConfig');
var commonService = require('../../service/commonService');
var commonUtils = require('../../common/commonUtils');
var commonData = require('../../service/commonData');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('apply/apply', { title: '在线支付', layout: null });
});
module.exports = router;