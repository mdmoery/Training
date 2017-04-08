var fs = require('fs');




fs.readFile('text.txt', function(err,data) {
    if(err){console.log(err)}
    else {
    console.log("print out our hipster ipsum\n", data.toString());
    var result = printOut("TOMmy", makeLower);
    var result2 = printOut("timmmay", function(x) {
        return x.toUpperCase(x).substring(1,4);
    });
    console.log(result);
    console.log(result2);
    
    }
});

function printOut(what, callback) {
    return callback(what);
};

function makeLower(str) {
    return str.toLowerCase();
};




