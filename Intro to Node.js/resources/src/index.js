// cd resources/src

const { readFile } = require('./utils');
let http = require('http');


let server = http.createServer((req, res) => {
    if (req.url == '/home') {
        res.writeHead(200, [
            'Content-Type', 'text/html'
        ]);
        res.write(homePageString);
        res.end();
    } else {
        res.write('LMAOOO')
        res.end();
    }
});

server.listen(3000);
