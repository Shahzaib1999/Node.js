var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
    res.send('Home');
});

app.get('/contact', (req,res) =>{
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id',(req,res) =>{
    var data = {age: 20, job : 'abc', hobbies: ['learning', 'playing']};
    res.render('profile', {id: req.params.id, data: data});
});


app.listen(3000);