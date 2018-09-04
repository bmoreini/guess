// generate random number btween 0 and 1, multiply by 1, convert to integer with round up
var Answer = Math.round(Math.random()*100);
// initialize Turns variable, set to 0
var Turns=0;
// initialize boolean variable Correct, set to value False
var Correct=false;
// Add one to value of variable Turns 
Turns++;
while (Correct==false) {
    var Guess = prompt("Guess my integer (between 0 and 100)!");
    if (Guess == Answer) {
        alert("CORRECT! You guessed it in "+Turns+" turns.");
        Correct = true;
    }
    else if (Guess > Answer) {
        alert("Hint: Try a lower number!");
    }
    else if (Guess < Answer) {
        alert("Hint: Try a higher number!");
    }
    Turns++;
}
alert("Thank you for playing.");
