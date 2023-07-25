const router = require("express").Router();

router.use('/festivals', require('./festivals.routes'))
router.use('/auth', require('./auth.routes'))

module.exports = router;

