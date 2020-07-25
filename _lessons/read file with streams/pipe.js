var http = require('http');
var fs = require('fs');

// Load file with 1 Stream

/*new http.Server(function (req, res) {
	if (req.url = '/big.html') {
		fs.readFile('big.html', function(err, content) {
			if (err) {
				res.statusCode = 500;
				res.end("Server error");
			} else {
				res.setHeader("Content-Type", "text/html; charset=utf-8");
				res.end(content);
			}
		});
	}
}).listen(3000);*/

// Load file using Stream

new http.Server(function (req, res) {
	if (req.url = '/big.html') {
		
		var file = new fs.ReadStream('big.html'); // open stream for read file
		sendFile(file, res);

	}
}).listen(3000);

function sendFile (file, res) {
	/*file.on('readable', write);

	function write() {
		var fileContent = file.read(); // read 

		if (fileContent && !res.write(fileContent)) { // send
			file.removeListener('readable', write);

			res.once('drain', function() {  // wait for new info
				file.on('readable', write);
				write(); // call recursion
			});
		}
	}
	file.on('end', function () {
		res.end(); // close connection when file readed
	});*/

	// OR

	file.pipe(res); // "readable".pipe("writable");
	file.pipe(process.stdout); // write to console

	// Important
	file
		.on('error', function(err) {
			res.statusCode = 500;
			res.end("Server Error");
			console.error(err);
		})
		.on('open', function() {
			console.log('opend');
		})
		.on('close', function() {
			console.log('closed');
		});
		
	res.on('close', function() {
		file.destroy;
	});

}