var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static Path
//app.use(express.static(path.join(__dirname, 'public')));

var users = [
	{
		name: 'Ivan',
		age: '18'
	},
	{
		name: 'Pol',
		age: '12'
	}
]

app.get('/', function(req, res){
	res.render('index', {
		title: 'Home',
		users: users
	});
});

app.post('/users/add', function(req, res){
	users.push({
		name: req.body.name,
		age: req.body.age
	});
	res.redirect('/');
});

app.listen('3000');