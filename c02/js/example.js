var greeting;
var name;
var request;
var fullMessage;

greeting = 'Howdy ';
name = 'Molly, ';
request = 'please check your order';
fullMessage = greeting + name + request;

var el = document.getElementById('greeting');
el.textContent = fullMessage;
