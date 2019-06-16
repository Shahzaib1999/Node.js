var fs = require('fs');

// to read file
var readMe = fs.readFileSync('text.txt', 'utf8');

// to create file
fs.writeFileSync('writeMe.txt', 'Hey');

// console.log(readMe);


