var Bob = function() {};

Bob.prototype.hey = function(input) {
    var phrase = input;
    
    // use regex to remove all spaces in phrase
    var cleanphrase = phrase.replace(/\s/g,'');
    
    // define regex for shouting
    var shout = new RegExp(/\b[A-Z][A-Z]+\s[A-Z][A-Z]+/);
    var shout2 = new RegExp(/\b[A-Z][A-Z]+!$/);
    


    switch (true) {
        case ((cleanphrase == "")):
            // CASE: Bob says 'Fine. Be that way!' if you address him without actually saying anything.
            // LOGIC: Since all spaces were removed from phrase prior to SWITCH, phrase will now be 
            //        empty no matter how many spaces were passed in
            
            return "Fine. Be that way!";
            break;
        
        case ((shout.test(phrase)) || (shout2.test(phrase))):
            // CASE: Bob answers 'Whoa, chill out!' if you yell at him.
            return "Whoa, chill out!";
            break;
        
        case ((phrase.match(/\?$/) == "?")):
            // CASE: Bob answers 'Sure.' if you ask him a question.
            // EXPECTED: [question mark on end of phrase && NOT UPPERCASE]
            // LOGIC: Use regex to check for ? on end of phrase.  All 
            // Uppercase already returned by previous yelling case
            return "Sure.";            
            break;
            
        default:
            // CASE: Bob answers 'Whatever.' to anything else.
            // LOGIC: All previous cases fail. 
            return "Whatever.";
    };

 
    
};

module.exports = Bob;
