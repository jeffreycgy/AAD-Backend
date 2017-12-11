var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.send('Index');
});

module.exports = router; //makes it accessible to other files