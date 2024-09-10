
const MovieModel = require('../models/Movies');

function getAll() {
    return MovieModel.find();
}

function getOne(movieId) {
    return MovieModel.findById(movieId);
}

function create(movieData) {
    // POST REQUEST:
    MovieModel.create(movieData)
        .then(() => {
            console.log('Record is created!');
        })
        .catch(err => console.log(err.message));
}

module.exports = { getAll, create, getOne };