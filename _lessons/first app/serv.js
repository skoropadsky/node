/*var user = require('./user');*/

/* var user1 = new user.User('Петя');
var user2 = new user.User('Вася');*/

var db = require('db');
db.connect();

var User = require('./user');

var user1 = new User('Петя');
var user2 = new User('Вася');

user2.hello(user1);
console.log("Vasya is " + db.getRu('Vasya'));