var express = require('express');
var sysConfig = require('../../config/sysConfig');
var commonService = require('../../service/commonService');
var commonUtils = require('../../common/commonUtils');
var commonData = require('../../service/commonData');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('order/addAdress', { title: '添加地址', layout: null });
});
module.exports = router;