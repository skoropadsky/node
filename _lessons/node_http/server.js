/* Simple connection end answer from server ********
var http = require('http');

var server = new http.Server();

server.listen(1488, '127.9.1.1');

var counter = 0;
server.on('request', function(req, res) {
	res.end("Hello mothefucker " + ++counter);
});*/

var http = require('http');
var url = require('url');

var conter = 0;

var server = new http.Server(function (req, res) {
/*	console.log(req.headers);*/
	
	var urlParsed = url.parse(req.url, true);
	console.log(urlParsed);

	if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
		res.end("Yor message: " + urlParsed.query.message);
	} else {
		res.statusCode = 404;
		res.end('Page not found blea ' + ++conter);
	}
});

server.listen(1488, '127.0.0.1');