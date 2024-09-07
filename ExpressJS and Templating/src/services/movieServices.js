
let allMovies = [
    {
        _id: 1,
        title: 'Social Network',
        genre: 'Mystery, Documentary',
        director: 'Mark Z.',
        date: '2004',
        poster_image: 'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
        rating: '10.00',
        description: 'Harvard sophomore Mark Zuckerberg pursues an idea that propels him to internet success, bringing in legal trouble and costing him friendships. Watch all you want. From director David Fincher and writer Aaron Sorkin, this thrilling Facebook drama won three Oscars and four Golden Globes.',
    }
];

function create(movieData) {
    movieData._id = allMovies.length + 1;
    allMovies.push(movieData);
}

module.exports = { create, allMovies };