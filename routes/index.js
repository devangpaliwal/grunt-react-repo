var express = require('express');
router = express.Router();

router.get('/', require('./capsule.js'));

module.exports = router;