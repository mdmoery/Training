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

function send(req, res, next){
    res.send("Testing " + req.params.test);
    return next;
};


server.get('/', send);
server.get('hello/:test', send);
server.put('hello/:test', send);
server.del('hello/:test', function(req, res, next) {
    res.send(req.params.test + " is gone ... deleted");
    return next();
})


server.listen(port, function(){
    console.log('%s listening at %s', server.name, server.url);
});
