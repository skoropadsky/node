
/*var db = require('db');*/


function User(name) {
	this.name = name;
}

User.prototype.hello = function (user) {
	/*console.log(db.getRu("Hello") + ', ' + user.name);*/
	console.log("Hello, " + user.name);
};

/*console.log('user.js is required!');
console.log(module);*/

/*exports.User = User;*/
/*global.User = User;*/
module.exports = User;