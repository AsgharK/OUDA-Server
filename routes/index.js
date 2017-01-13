var express = require('express');
var router = express.Router();

router.post('/notifyReferee', function(req,res){
	res.send("Testing");
});

module.exports = router;