var Gigasecond = function(input) {
    this.original = input;
};


Gigasecond.prototype.date = function() {
    var test = this.original;
    test.setSeconds(test.getSeconds() + Math.pow(10,9));
    return test;
};

module.exports = Gigasecond;
