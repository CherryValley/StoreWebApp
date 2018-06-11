var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var index = require('./routes/index');
var login = require('./routes/account/login');
var register = require('./routes/account/register');
var forgetPassword = require('./routes/account/forgetPassword');
var validationEmail = require('./routes/account/validationEmail');
var setPassWord = require('./routes/account/setPassWord');
var itemList = require('./routes/item/itemList');
var shops = require('./routes/shops/shops');
var shoppingCart = require('./routes/shops/shoppingCart');
var order = require('./routes/order/order');
var myorder = require('./routes/order/myorder');
var orderAdress = require('./routes/order/orderAdress');
var addAdress = require('./routes/order/addAdress');
var apply = require('./routes/apply/apply');
var applysucess = require('./routes/apply/applysucess');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);
app.use('/index', index);
app.use('/login', login);
app.use('/register', register);
app.use('/forgetPassword', forgetPassword);
app.use('/validationEmail', validationEmail);
app.use('/setPassWord', setPassWord);
app.use('/itemList', itemList);
app.use('/shops', shops);
app.use('/shoppingCart', shoppingCart);
app.use('/order', order);
app.use('/myorder', myorder);
app.use('/orderAdress', orderAdress);
app.use('/addAdress', addAdress);
app.use('/apply', apply);
app.use('/applysucess', applysucess);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
