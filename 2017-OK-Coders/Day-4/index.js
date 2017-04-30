var restify = require('restify');
var server = restify.createServer();
var port = 8088;

var hello = require('./routes/hello.js');
var emails = require('./routes/emails.js');
var client = require('./client');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/enron');
var db = mongoose.connection;

db.on('error', function(msg){
	console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
	console.log('Mongoose connection established');
});

// Client
server.get('/', client.get);

// Server Responses
server.get('/emails', emails.get);          // routes/emails.js lists all emails
server.get('/hello/:name', hello.send);     // routes.hello.js Testing and name
server.put('/hello/:name', hello.send);     // routes.hello.js Testing and name
server.post('/hello/:name', hello.post);    // routes/hello.js generates random string
server.del('/hello/:name', hello.del);      // routes/hello.js says is deleted but is not

server.listen(port, function(){
	console.log('%s listening at %s', server.name, port);
});
