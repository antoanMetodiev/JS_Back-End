let fs = require('fs');

function readFile(path) {
    let data = fs.readFileSync(path);
    return data.toString();
}

module.exports(
    readFile
);

