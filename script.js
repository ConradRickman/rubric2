//Switch

var headsOrTails= prompt ("Heads or tails?");

switch (headsOrTails) {
    case "Heads":
    case "heads":
        alert ("Too bad, it was tails!");
    break;


    case "Tails":
    case "tails":
        alert ("Congrats, you win!");
    break;
    
    default:
        alert ("That's not heads or tails!")
}

//Create Function and pass info into function

function addNumbers(a,b) {
    var addedTotal = a + b;
    alert ("What is 10 plus 5? " + addedTotal);
}

//Call Function

addNumbers(10,5);

//Return data from function

function subtractNumbers(a,b) {
    var subtractedTotal = a - b;
    return subtractedTotal;
}

var subtractNumbers2 = subtractNumbers(20,5);
alert ("What is 20 minus 5? " + subtractNumbers2);