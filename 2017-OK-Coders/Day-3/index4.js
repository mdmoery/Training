 
var mongo = require('mongodb');
var mc = mongo.Mongo.Client;

var url = 'mongodb://localhost:27017/testing';

mc.connect(url,function(err,db) {
    if(err){ console.log("unable to access database on " + url);}
    var collection = db.collection('posts');
    posts.find({}).toArray(function(err,docs){
        console.log(docs);
        db.close();
    });
});
