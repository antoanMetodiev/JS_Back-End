
let express = require('express');

let app = express();
let cookieParser = require('cookie-parser');


app.get('/', (req, res) => {
    let cookie = req.header('Cookie');

    if (cookie) {
        res.send(`Hello ${cookie}`);
    } else {
        res.send(`Please Login on link: <a href="http://localhost:5000/login">Login</a>`);
    }
});

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// TODO: Set cookie:
app.get('/login', (req, res) => {
    res.send(
    `<form method="post">
        <label for="">Username</label>
        <input name="username" type="text" placeholder="...">
        <label for="">Passoword</label>
        <input name="password" type="password" placeholder="...">
        <button>Submit</button>
    </form>`
);
});

app.post('/login', async (req, res) => {

    // HASH PASSWORD:
    let salt = await bcrypt();



    console.log(req.body.username);
    res.header('Set-Cookie', req.body.username);
    res.redirect('/');
    res.end();
});

app.listen(5000, () => console.log('Server is listenin on port 5000!'));