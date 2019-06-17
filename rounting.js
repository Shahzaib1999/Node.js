var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res) =>{
    console.log('Request was made: ' + req.url);
    
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
    }
    else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            name: 'abc',
            job: 'xyz',
            age: 10
        };
    
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 page not found');
    }

});

server.listen(3000, '127.0.0.1');

console.log('listening on 3000');