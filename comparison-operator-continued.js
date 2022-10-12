var score1 = 90;
var score2 = 95;
var higScore1 = 75;
var higScore2 = 95;

var conparison = (score1 + score2) > (higScore1 + higScore2);

var el = document.getElementById('answer');
el.textContent = ' New high score: ' + conparison