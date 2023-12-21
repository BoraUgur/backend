var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

require('./api/models/db');
require('./api/models/venue');

var apiRouter = require('./api/routes/index')

var app = express();

app
    .use('/api', apiRouter)

    .use(express.static(path.join(__dirname, 'public')))
    .use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())

    .use('/', indexRouter)
    .use('/users', usersRouter)

module.exports = app;
