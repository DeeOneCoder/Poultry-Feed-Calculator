var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var pug = require('pug');

var app = express();
var host = '127.0.0.1';
var port = 3000;

app.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.get('/index.html', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end;
});

app.listen(port);
console.log('Server started on port ' + port);

module.exports = app;