
const mongoose = require('mongoose');

// • id – number
// • title – string
// • genre – string
// • director – string
// • year – number
// • imageURL – string
// • rating – number
// • description – string

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2030,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    description: {
        type: String,
        required: true,
        maxLength: 1000,
    },
    imageURL: {
        type: String,
        required: true,
        match: /^https?/
    },
});

let MovieModel = mongoose.model('Movies', movieSchema);

module.exports = MovieModel;

