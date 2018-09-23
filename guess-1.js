var turns=1;
var correctAnswer=false;
var answer = Math.round(Math.random()*100)+1;
console.log(answer);
while (correctAnswer==false) {
    var guess = prompt("Guess my integer (1-100)");
    if (guess == answer) {
        correctAnswer = true;
    }
    if (guess > answer) {
        alert("Try a lower number!");
    }
    else if (guess < answer) {
        alert("Try a higher number!");
    }
    turns++;
}
alert("Congratulations! You guessed it in "+turns+" turns.");
