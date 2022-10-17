function checkUsername() {
    var elMsg = document.getElementById('feedbsck');
    var elUsername = document.getElementById('username');
    if (elUsername.value.length < 5) {
        elMsg.textContent = 'Username must be 5 character of more';
    } else {
        elMsg.textContent = '';
    }
}