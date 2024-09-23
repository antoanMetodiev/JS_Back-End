const express = require('express');

const router = express.Router();

const homeConroller = require('./controllers/homeController');
const movieController = require('./controllers/movieControllers');
const invalidPathController = require('./controllers/invalidPathConroller');

router.use(homeConroller);
router.use(movieController);

router.get('/search', (req, res) => {
    res.render('search', { layout: false });
});

// Wild Card == 'Path който покрива всички!!!'
// на 404 Wild Card - трябва да бъде дефиниран последен:с
router.use(invalidPathController);



module.exports = { router };