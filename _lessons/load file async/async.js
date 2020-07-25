var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

	var info;

	if(req.url == '/'){

		fs.readFile('index.html', function (err, info) {
			if (err) {
				console.log(err);
				res.statusCode = 404;
				res.end('File not found');
				return;
			}

			res.end(info);
		});
	} else {/* 404 */}


}).listen(3000);