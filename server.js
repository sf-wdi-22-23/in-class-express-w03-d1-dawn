// SERVER-SIDE JAVASCRIPT

// pull in express
var express = require('express');
// create our app
var app = express();

app.set('view engine', 'ejs');

// note - parts of a url 
// https://www.youtube.com/watch?v=dQw4w9WgXcQ
// protocol: https
// host: www.youtube.com
// path: /watch
// query string: ?v=dQw4w9WgXcQ


// data
var myAdjective = "awesome";


// handle requests with ROUTES

// anatomy of a route:
   // http verb, path, and what to do

// route for GET request at '/'
// localhost:5000/
app.get('/', function(req, res){
	// what to do when we see a request at this route
	// res.send("Hi!");  //sends a string response
	// res.json({"name":"Brianna", "awesomeness":"super"});  // send json response
	res.render('index', { adjective: myAdjective }); // render an html template and send that
});	

// localhost:5000/about-me
app.get('/about-me', function(req, res){
	res.send("learn about me");
});


var port = 5000;
app.listen(port, function(){
	console.log("server listening at localhost:5000");
});