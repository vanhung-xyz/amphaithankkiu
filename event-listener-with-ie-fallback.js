var elusername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.value.length < minLength){
    elMsg.innerHTML = ' Username must be ' + minLength + 'charactesr of more';
   } else {
        elMsg.innerHTML = '';
   }
}


if (elUsername.addEventListener){
 elUsername.addEventListener('blur', function () {
     checkUsername(5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function (){
        checkUsername('5')
    })
}