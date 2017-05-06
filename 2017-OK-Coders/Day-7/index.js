var restify = require('restify');
var server = restify.createServer();
server.use(restify.bodyParser());
var config = require('./config.json');
const port = config.port;

var auth = require('./routes/auth');

var mongoose = require('mongoose');
mongoose.connect(config.mongodb);
var db = mongoose.connection;

db.on('error', function(msg){
	console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
	console.log('Mongoose connection established');
});

server.post('/user/add', auth.create);
server.post('/user/login', auth.read);
server.get('/', restify.serveStatic({
	directory: './client', 
	default: "index.html"
}));

server.listen(port, function(){
	console.log("%s listening on %s", server.name, port);
});
