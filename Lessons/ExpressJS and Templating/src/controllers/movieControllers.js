
const router = require('express').Router();
const movieService = require('../services/movieServices');

router.get('/create', (req, res) => {
    res.render('create', { layout: false });
});

router.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const movie = movieService.allMovies.filter(el => el._id == id);

    res.render('details', { layout: false, movie });
});

// => "/img/jungle-cruise.jpeg":

router.post('/create', (req, res) => {
    const newMovie = req.body;
    movieService.create(newMovie);
    res.redirect('/');
});

module.exports = router;


