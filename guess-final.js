//start program
//initialize variables answer, turns, guess, averageTurns, games
var answer = 0;
var turns = 0;
var guess = 0;
var averageTurns = 0;
var games = 0;
//add turns to total turns
//totalTurns = totalTurns+turns;
//make a random number for answer
answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
// in a while loop, ask for guesses and give feedback
while (guess != answer) { // begin while 
   //prompt "input a guess"
   //input guess
   guess = prompt("guess a number between 1 and 100");
   //add one to turns
   turns++;
   //if guess is too high, prompt "too high"
   //if guess is too low, prompt "too low"
   //if guess is correct, prompt it is correct
   if (guess==answer) {
       alert("correct")
   } else if (guess>answer) {
      alert("too high")
   } else if (guess<answer) {
       alert("too low")
   }
} // end while
//tell player how many turns it took, as well as how many games and their average turns.
alert("You have taken "+turns+" turns.");
//ask player to play again
//restart game
