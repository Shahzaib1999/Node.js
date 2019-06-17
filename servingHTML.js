var http = require('http');
var fs = require('fs');

// reading data from html file
// var server = http.createServer((req,res) =>{
//     console.log('Request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
    
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);

// });

var server = http.createServer((req,res) =>{
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    var obj = {
        name: 'abc',
        job: 'xyz',
        age: 10
    };

    res.end(JSON.stringify(obj));

});

server.listen(3000, '127.0.0.1');

console.log('listening on 3000');