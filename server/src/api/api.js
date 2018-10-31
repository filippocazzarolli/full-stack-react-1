var router = require('express').Router();

router.use('/todo', require('./todo/todoRouter'));
router.use('/user', require('./todo/userRouter'));
router.use('/post', require('./post/postRouter'));

module.exports = router;