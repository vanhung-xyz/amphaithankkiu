var score = 75;
var msg;

if (score >= 50) {
    msg = 'congratulations!';
    msg += ' Proceed to the next round.';
}

var el = document.getElementById('answer');
el.textContent = msg;