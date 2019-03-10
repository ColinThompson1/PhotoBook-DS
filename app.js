var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// Setup WebSocket

const fs = require('fs');
const http = require('http');
const https = require('https');

let server;
if (process.env.USE_SSL) {
    server = https.createServer({
        key: fs.readFileSync('./sslcert/key.pem'),
        cert: fs.readFileSync('./sslcert/cert.pem')
    }, app)
} else {
    server = http.createServer(app);
}

const expressWs = require('express-ws')(app, server);

app.use(bodyParser.json());

// Setup routes

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var saveRouter = require('./routes/save');
var createRouter = require('./routes/create');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/save', saveRouter);
app.use('/create', createRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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


module.exports = {app, server};
