var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
    res.send('Home');
});

app.get('/contact', (req,res) =>{
    res.render('contact');
});

app.post('/contact', urlencodedParser, function (req, res) {
    res.render('contact-success', {data: req.body});
})

app.get('/profile/:id',(req,res) =>{
    var data = {age: 20, job : 'abc', hobbies: ['learning', 'playing']};
    res.render('profile', {id: req.params.id, data: data});
});


app.listen(3000);