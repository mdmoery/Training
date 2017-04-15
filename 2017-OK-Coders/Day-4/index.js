// Week 4 work

var restify = require('restify');
var server = restify.createServer();

var port = 8088;

// /blogs/posts/comments/
//
// CRUD   | mongoDB | restify
// --------------------------
// create | insert  | post
// read   | fing    | GET
// update | update  | PUT
// delete | remove  | DELETE

// server.verb('path' function(req, res, next({}))


server.get('/', function(req, res, next) {
    res.send("Hello World " + res);
    next(false);
});

server.get('hello/:name', function(req, res, next){
    res.send('Hello ' + req.params.name);
    next();
});

server.listen(port, function(){
    console.log('%s listening at %s', server.name, server.url);
});
