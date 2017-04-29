var restify = require('restify');
var server = restify.createServer();
server.use(restify.queryParser());
const port = 8088;

var auth = require('./routes/auth');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testing');
var db = mongoose.connection;

db.on('error', function(msg){
	console.log('Mongoose bit the dust; ' + msg);
});

db.once('open', function(){
	console.log("Mongoose connection established.");
});

server.post('/user/add/:username/:password', auth.create);
server.get('/', restify.serveStatic({
    directory: './client',
    default: "index.html"    
}));

server.listen(port, function(){
	console.log('%s listening on %s', server.name, port);
});

