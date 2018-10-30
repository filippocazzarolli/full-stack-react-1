var router = require('express').Router();

router.use('/todo', require('./todo/todoRouter'));

module.exports = router;