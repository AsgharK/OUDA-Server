/**
 * Module dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    http = require('http'),
    path = require('path'),
	socketIO = require('socket.io');

var routes = require('./routes');

var app = module.exports = express(),
    server = http.createServer(app),
    io = socketIO(server);
/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 9001);
app.set('socketIo', io);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */

app.use('/', routes);
/**
 * Start Server
 */
server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

/**
 * Socket.io section
 */
io.sockets.on('connection', function(newSocket) {
    console.log("Client connected...");
    newSocket.on('disconnect', function() {
        console.log("Client disconnect");
    });
});