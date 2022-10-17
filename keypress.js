var el;

function charConunt(e) {
    var taxtEntered, charDisplay, contuer, lastkey;
    taxtEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    contuer = (180 - (taxtEntered.length));
    charDisplay.textContent = contuer;
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}
el =document.getElementById('message');
el.addEventListener('keyup', charCount, false);