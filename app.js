'use strict';

var express = require('express');
var path = require('path');
var hbs = require('hbs');
var Sequelize = require("sequelize");

var app = express();
var models = require('./models');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static('static'));

app.get('/', function (req, res) {
	res.send('Hello World!');
});

models.sequelize.sync().then(function () {
    var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
    });
});
