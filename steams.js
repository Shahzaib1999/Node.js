var http = require('http');
var fs = require('fs');

// reading file data
var myReadStream = fs.createReadStream(__dirname + '/loremIpsum.txt', 'utf8');

// creating file 
var myWriteStream = fs.createWriteStream(__dirname + '/loremIpsum2.txt', 'utf8');

// creating file
// myReadStream.pipe(myWriteStream);

myReadStream.on('data',(chunk) =>{
    console.log('new chunk');
    // console.log(chunk);

    // myWriteStream.write(chunk)
})