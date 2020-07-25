var fs = require('fs');

fs.writeFile("file.txt", "whats in the poketoli", function () {

	fs.rename("file.txt", "new.txt", function (err) {
		if (err) throw err;

		/*DELETE file: */
		/*fs.unlink("new.txt", function(){});*/
	});

});

// Add your own listen emitter

var event = require('events');
var emitter = new event.EventEmitter();


emitter.on('podpezd', function(){
	console.log("Idi na xuy");
});

emitter.emit('podpezd');