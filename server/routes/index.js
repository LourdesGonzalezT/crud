const router = require("express").Router();

router.use('/festivals', require('./festivals.routes'))

module.exports = router;

