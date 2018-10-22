// *** Guessing Game by Andrew***

// *** Initializations ***

// ** Basic Initializations **

// var answer integer, set to 100
var answer=100;
// var guess integer, set to 0
var guess=0;
// var turns integer, set to 1
var turns=0;
// var correctAnswer boolean, set to false
var correctAnswer=false;
// ** Advanced Initializations **

// var averageTurns integer, set to 0
var averageTurns=0;
// var totalTurns integer, set to 0
var totalTurns=0;
// var games integer, set to 0
var games = 0;
// var again string, set to "yes"
var again="y";
// var playAgain boolean, set to true
var playAgain=true;

// *** Game Play ***

// ** Advanced loop start **
// keep looping while playAgain = true
while (playAgain==true){
    // ** Basic loop start **
    // set answer to to random number between 0 and 1, multiply by 100, convert to integer, add 1
    // print answer to console log while testing
    answer=Math.floor(Math.random()*100)+1;
    console.log(answer);
    // reset correctAnswer to false
    // Keep looping while correctAnswer is false
    while(correctAnswer==false){

        // prompt user for guess, tell user what to input
      guess=prompt("input a guess 1-100");
         // add one to turns
      turns++;
        // check if guess is equal to answer
      if(guess==answer){
            // if equal, say "Correct!" and say number of turns
        alert("you guessed it in "+turns+" turns");
            // set correctAnswer as true to get out of loop
        correctAnswer=true;
      }
        // check if guess greater than answer
      if (guess>answer){
            // give feedback: go lower
      alert("go lower");
      }
        // check if guess lower than answer
      else if(guess<answer) {
            // give feedback: go higher
      alert("go higher");
      }

    // ** Basic loop end
    }
   games++;
    // add turns to totalTurns
    totalTurns+=turns;
    // set averageTurns = totalTurns / games
    averageTurns=totalTurns/games;
    // add 1 to games

    gameOver(turns,games,totalTurns);

  // ** Advanced loop end
}

// say thank for playing.
alert("thanks for playing");

// *** Game end

function gameOver(turns,games,totalTurns){
    playAgain=true;

    // say "Your average is " averageTurns  "over " games "games."
    alert("your average is "+averageTurns+" over "+games+" games");
    // ask to play again (y = yes).
    again=prompt("want to play again? type y for yes");

    // if not y, set playAgain = false'
    if(again!="y"){
      playAgain=false;
    }
 return playAgain;
}
