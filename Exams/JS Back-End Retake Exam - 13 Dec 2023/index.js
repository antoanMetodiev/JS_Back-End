const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.engine('hbs', handlebars.engine({
    extname: '.hbs' // Изрично указваме да се използва .hbs разширението
}));

app.set('view engine', 'hbs');

// app.engine('hbs', handlebars.engine());
// app.set('view engine', 'hbs');

mongoose.connect("mongodb://localhost:27017/course-book")
    .then(() => {
        console.log('MongoDB is Connected!');
        app.listen(3000, () => console.log('Server is listening on port 3000!!!'));
    })
    .catch((err) => {
        console.log(err);
    });

