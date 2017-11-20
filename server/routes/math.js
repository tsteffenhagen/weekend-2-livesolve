var express = require('express');
var router = express.Router();

var mathResult = 0;
router.post('/', function(req, res) {
    var firstNum = parseInt(req.body.firstNum);
    var secondNum = parseInt(req.body.secondNum);
    
    mathResult = firstNum + secondNum;

    res.sendStatus(200);
})

module.exports = router;