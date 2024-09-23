

const router = require('express').Router();
const homeController = require('./controllers/HomeController');
const authController = require('./controllers/AuthController');

router.use(homeController);
router.use('/auth', authController);


module.exports = router;

