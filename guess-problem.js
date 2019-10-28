/* Guessing Game Advanced - Last Year by Mr. M */

var answer=0;
var guess=0;
var turns=0;
var correctAnswer=false;
var averageTurns=0;
var totalTurns=0;
var games = 0;
var again="y";
var playAgain=true;

while (playAgain==true){
    answer=Math.floor(Math.random()*100)+1;
    console.log(answer);
    while(correctAnswer==false){
      guess=prompt("input a guess 1-100");
      turns++;
      if(guess==answer){
        alert("you guessed it in "+turns+" turns");
        correctAnswer=true;
      }
      if (guess>answer) alert("go lower");
      else if(guess<answer) alert("go higher");
    }
   games++;
   totalTurns+=turns;
   averageTurns=totalTurns/games;
   gameOver(turns,games,totalTurns);
}
alert("thanks for playing");


function gameOver(turns,games,totalTurns){
    playAgain=true;
    alert("your average is "+averageTurns+" over "+games+" games");
    again=prompt("want to play again? type y for yes");
    if(again!="y"){
      playAgain=false;
    }
    return playAgain;
}
