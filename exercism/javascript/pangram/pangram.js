var Pangram = function(input) {
    this.item = input.toLowerCase();
};

Pangram.prototype.isPangram = function() {
    var panny = this.item;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var arr = panny.split(''),
    alpha = arr.sort().join('').replace(/[^a-z]/g,'');
    var unique='';
    for(var i=0; i<alpha.length; i++){
        if(unique.indexOf(alpha[i])==-1){
            unique += alpha[i];
        };
    };
    if (alphabet == unique) {
        return true;
    } else {
        return false;
    };
    
};

module.exports = Pangram;
