var correctAnswer=false;
var turns=0;
var answer = Math.round(Math.random()*100)+1;
console.log(answer);
while (correctAnswer==false) {
    var guess = prompt("Enter a guess (1-100)");
    if (guess == answer) correctAnswer = true;
    if (guess > answer) alert("Try a lower number!");
    if (guess < answer) alert("Try a higher number!");
    turns++;
}
alert("You guessed it in "+turns+" turns.");
