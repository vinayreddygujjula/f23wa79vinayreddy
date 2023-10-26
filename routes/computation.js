var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    const randomValue = Math.floor(Math.random() * (20)) + 1;
    const abs = Math.abs(randomValue);
    const acos = Math.acos(randomValue);
    const sin = Math.sin(randomValue);
    const resultString =
        `Math.abs applied to ${randomValue} is ${abs}       
         Math.acos applied to ${randomValue} is ${acos}     
         Math.acos applied to ${randomValue} is ${sin}`;
    res.send(resultString);
});

module.exports = router;