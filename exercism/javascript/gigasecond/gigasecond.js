var Gigasecond = function(input) {
    this.original = input;
};


Gigasecond.prototype.date = function() {
    return new Date(this.original.getTime() + Math.pow(10,12));
    /* This is my orignal incomplete code.  Arsenicro's solution above.
     * 
    var test = this.original;
    test.setSeconds(test.getSeconds() + Math.pow(10,9));
    return test;
    
    */
};

module.exports = Gigasecond;
