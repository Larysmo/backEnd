var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 2 r) Abra o arquivo app.js e importe a instância de Router do arquivo ./routes/apidocs.js.
const apiRouter = require('./routes/apidocs')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-docs', apiRouter);

module.exports = app;
