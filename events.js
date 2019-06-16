// Events

var events = require('events');
var util = require('util');

var myEvent = new events.EventEmitter();

myEvent.on('someEvent',(msg) =>{
    console.log(msg);
});

myEvent.emit('someEvent',"event emitted");


var person = function(name) {
    this.name = name;
}

util.inherits(person, events.EventEmitter);


var john = new person('john');
var mary = new person('mary');
var people = [john,mary];

people.forEach((person) =>{
    person.on('speak',(msg) =>{
        console.log(person.name + ' said: ' + msg);
    });
});

john.emit('speak','Hi!')