var express = require('express');
var router = express.Router();

router.post('/notifyReferee', function(req,res){
	var socket = req.app.get('socketIo');
	message = "Team " + req.body.team + " offside!";
	socket.emit('notify', message);
	res.send({ "status": "Notification Sent" });
});

module.exports = router;