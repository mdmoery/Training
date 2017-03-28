var Hamming = function() {};

Hamming.prototype.compute = function(input1,input2) {
    var item1 = input1;
    var item2 = input2;
    
    // Check to see if strings are different lengths.
    // Throw specified error message if they differ.
    if (item1.length != item2.length) {
        throw "DNA strands must be of equal length.";
        return;
    };
    
    var count = 0;
    for (i = 0; i < item1.length; i++) {
        if (item1.substring(i,i+1) != item2.substring(i,i+1)) {count += 1;};
    };
    return count;
};

module.exports = Hamming;
