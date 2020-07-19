const router = require('express').Router();

const apiRoutes = require('../routes/api');

router.use('/api', apiRoutes);
//router.use('/reaction', reactionRoutes);

module.exports = router;