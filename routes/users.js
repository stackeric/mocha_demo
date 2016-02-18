var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.status(200).json({ name: 'tobi' ,age : 18});
});
router.get('/age', function(req, res, next) {
   res.status(200).json({age : 18});
});

module.exports = router;
