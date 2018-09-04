// initialize Answer: generate random number btween 0 and 1, multiply by 1, convert to integer with round up
var Answer = Math.round(Math.random()*100);
// initialize Turns variable, set to 0
var Turns=0;
// initialize boolean variable Correct, set to value False
var Correct=false;
// Add one to value of variable Turns 
Turns++;
// Keep looping until Correct is set to true
while (Correct==false) {
    // initialize Guess, set value to user input, telling user what to input
    var Guess = prompt("Guess my integer (between 0 and 100)!");
    // check if guess is equal to answer
    if (Guess == Answer) {
        // if equal, say "Correct" and number of turns
        alert("CORRECT! You guessed it in "+Turns+" turns.");
        // set Correct equal to true to get out of our "while loop"
        Correct = true;
    }
    // check if guess greater than answer
    else if (Guess > Answer) {
        // give feedback: go lower
        alert("Hint: Try a lower number!");
    }
    // check if guess lower than answer
    else if (Guess < Answer) {
        // give feedback: go higher
        alert("Hint: Try a higher number!");
    }
    // add one to turns
    Turns++;
}
// tell player the game is over
alert("Thank you for playing.");
