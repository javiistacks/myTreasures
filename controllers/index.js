const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const inventoryRoutes = require('./inventory-routes');
const shoeRoutes = require('./api/shoes-routes');

router.use('/', homeRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/shoes', shoeRoutes);
router.use('/api', apiRoutes);

module.exports = router;