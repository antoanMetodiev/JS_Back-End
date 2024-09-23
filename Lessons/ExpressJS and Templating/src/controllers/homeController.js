const router = require('express').Router();

const { allMovies } = require('../services/movieServices');

router.get('/', (req, res) => {
    res.render('home', { layout: false,  movies: allMovies });
});

router.get('/about', (req, res) => {
    res.render('about', { layout: false });
});

module.exports = router;