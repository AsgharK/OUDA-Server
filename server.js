/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  http = require('http'),
  path = require('path');

var routes = require('./routes');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 9001);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */

app.use('/', routes);
/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});