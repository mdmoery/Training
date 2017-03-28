
var Isogram = function(input) {
    this.isoname = input;
};

Isogram.prototype.isIsogram = function() {
    var word = this.isoname;
    var regex = new RegExp(/(\w)\1+/);
    var result = regex.test(word)
    return result;

};

module.exports = Isogram;
