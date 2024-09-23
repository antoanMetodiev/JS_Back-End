
const router = require('express').Router();
const movieService = require('../services/movieServices');

router.get('/create', (req, res) => {
    res.render('create', { layout: false });
});

router.get('/details/:id', async (req, res) => {
    const movieId = req.params.id;
    let movie = await movieService.getOne(movieId).lean();

    console.log('-----------------------------------');
    console.log(movie);

    res.render('details', { layout: false, movie });
});

// => "/img/jungle-cruise.jpeg":

router.post('/create', (req, res) => {
    const newMovie = req.body;
    console.log(newMovie);
    movieService.create(newMovie);
    res.redirect('/');
});

module.exports = router;


