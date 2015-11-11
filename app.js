'use strict';

var express = require('express');
var path = require('path');
var hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static('static'));

app.get('/', function (req, res) {
    res.render('index', { title: 'Home', message: 'Hello there!'});
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
