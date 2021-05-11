const router = require('express').Router();

const userRoutes = require('./user-routes');
const shoesRoutes = require('./shoes-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/shoes', shoesRoutes);

module.exports = router;