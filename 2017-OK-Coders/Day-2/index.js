var name = "Princess Brunhilda von Nay Nay III";
var age = 8; //Setting age to 8
var tmpAge;
var drinkingAge;

console.log("My name is " + name + " and I am age " + age);


var counter =1;

while(age <= (21 - counter)){
    tmpAge = age + counter;
    console.log("In " +counter + " years I will be " + tmpAge);
    counter++;
    
    drinkingAge = 21 - tmpAge;


    if (tmpAge < 21) {
        console.log("...and I can have beer in " + drinkingAge + " years");
    } else if (tmpAge === 21) {
        console.log ("yeah ... celebrate");
    } else {
        console.log("leave me alone I am drinking");
    }
};
