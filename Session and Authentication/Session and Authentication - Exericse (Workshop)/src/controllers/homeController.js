const router = require('express').Router();

const movieService = require('../services/movieServices');

router.get('/', async (req, res) => {
    const movies = await movieService.getAll().lean();

    console.log(movies);

    res.render('home', { layout: false,  movies });
});

router.get('/about', (req, res) => {
    res.render('about', { layout: false });
});

module.exports = router;