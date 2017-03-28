var dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = function(input) {
    var rna = "";
    for (i = 0; i < input.length; i++) {
        switch(input.substring(i,i+1)) {
            case "G":
            rna += "C";
            break;

            case "C":
            rna += "G";
            break;

            case "T":
            rna += "A";
            break;

            case "A":
            rna += "U";
            break;

            default:
            throw "Invalid input";
        };
    };
        
    return rna;

};

module.exports = dnaTranscriber;
