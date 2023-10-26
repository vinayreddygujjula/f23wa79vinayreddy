var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var queryargCheck = req.query.queryargCheck;
    var randomValue;
    if(queryargCheck == undefined){
        randomValue = Math.random();
    }
    else{
        randomValue = queryargCheck;
    }
    const abs = Math.abs(randomValue);
    const acos = Math.acos(randomValue);
    const sin = Math.sin(randomValue);
    const resultString =
        `Math.abs applied to ${randomValue} is ${abs}   <br>    
         Math.acos applied to ${randomValue} is ${acos}     <br>
         Math.acos applied to ${randomValue} is ${sin}`;
    res.send(resultString);
});

module.exports = router;