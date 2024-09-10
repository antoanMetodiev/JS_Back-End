let path = require('path');

let express = require('express');
let mongoose = require('mongoose');
let handlebars = require('express-handlebars');
let app = express();
const { router } = require('./routes');

// 2 много важни неща:
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

// Указание къде да търси:
app.set('views', path.join(__dirname, 'views'));

//--------------------------------

// Декларираме middleware, който да търси статичните файлове които са пойсквани в html/handlebars файловете:
app.use(express.static('./src/views/public'));

// Отново декларирам middleware, който енкодира url-a 
app.use(express.urlencoded({ extended: false }));

app.use(router);
const port = 5000;

mongoose.connect(`mongodb://localhost:27017/magic-movies`)
    .then(() => {
        console.log('DB Connected!');
        app.listen(port, () => console.log('Server is listening on port: 5000'));
    })
    .catch((error) => console.error(error));
