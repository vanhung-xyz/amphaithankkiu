
let usernameInput = document.getElementById('username');
let usernameMsgInput = document.getElementById('checkusername');
function checkUsername() {
    let usernameValue = usernameInput .value;
    if (usernameValue.length < 5) {
        usernameMsgInput.className = 'warning';
        usernameMsgInput.textContent = 'ky tu khong du can nhap them';
    }else if(usernameValue.length >= 15){
        usernameMsgInput.className = 'warning';
        usernameMsgInput.textContent = 'qua 15 ki tu hay nhap lai ';
    }else{
        usernameMsgInput.textContent = '';
    }
}


let mailInput = document.getElementById('email');
let mailMsgInput = document.getElementById('checkmail');
const REGEX_MAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function checkMail(){
    let mailValue = mailInput.value;
    let checkMail = validateMail(mailValue);
    if(!checkMail){
        mailMsgInput.className = 'warning';
        mailMsgInput.textContent = 'nhap sai dinh dang email';
    }else{
        mailMsgInput.textContent = '';
    }
}
function validateMail(mail){
    return REGEX_MAIL.test(mail);
}


let passWordInput = document.getElementById('checkpass2')
function checkPass() {
    let pw1 = document.getElementById("pswd1");
    let pw2 = document.getElementById("pswd2");
    if(pw1 != pw2){
        passWordInput.textContent = 'Passwords did not match'
    }else{
        passWordInput.textContent = ''

    }

}
