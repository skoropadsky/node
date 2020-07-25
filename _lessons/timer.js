var http = require('http');

var server = new http.Server(function (req, res) {
	console.log('server is started!');
}).listen(3000);

setTimeout(function() {
	server.close();
}, 2500);

var timer = setInterval(function () {
	console.log(process.memoryUsage());
}, 1000);

process.nextTick(function () {
	console.log('Выводится до начала выполнения любых операций');
});

setImmediate(function () {
	console.log('Выполняется постепенно по итерациям');
});

timer.unref();

console.log(process.argv);
console.log(require.cache);
