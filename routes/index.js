var express = require('express');
var router = express.Router();

router.post('/notifyReferee', function(req,res){
	var socket = req.app.get('socketIo');
	socket.emit('notify', 'Offside has occured.');
	res.send("Notification Sent");
});

module.exports = router;