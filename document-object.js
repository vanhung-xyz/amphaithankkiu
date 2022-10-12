var today = new Date();

var year = today.getFullYear();

var est = new Date('Apr 16, 1996 15:45:55');

var difference = today.getTime() - est.getTime();

difference = (difference / 31556900000);


var elMsg = document.getElementById('message');

elMsg.textContent = Math.floor(difference) + 'years of online travel advice';

date-object-difference



var msg = '<p><b>page title: </b>' + document.title + '<br />';

msg += '<b>page address: </b>' + document.URL + '<br />';

msg += '<b>last modified: </b>' + document.lastModified + '</p>';

// Create a variable called el to hold the element whose id attribute has a value of footer
var el = document.getElementById('footer');
// Write the message into that element
el.innerHTML = msg;