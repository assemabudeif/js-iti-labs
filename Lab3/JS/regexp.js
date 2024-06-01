// User name pettern
// start with 3 letter or more than
// then one space
// 3 letter or more
// one space
// 3 letter or more

var regFullName = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/;

var regEmail = /^[a-z]([a-zA-Z]|[0-9]|\$|#|\.|_)+@[a-z]+(.com|.net|.edu|.org).eg$/

function checkInputs() {
    checkFullName();

    checkEmail();
}

function checkFullName() {
    var fullNameInput = document.getElementById('fullName').value
    var fullNameMsg = document.getElementById('fullNameMsg')

    if (regFullName.test(fullNameInput)) {
        fullNameMsg.innerHTML = "Valid Full Name";
        fullNameMsg.style.color = "green";
        fullNameMsg.style.fontSize = "10px";
    } else {
        fullNameMsg.innerHTML = "Not Valid Full Name";
        fullNameMsg.style.color = "red";
        fullNameMsg.style.fontSize = "10px";
    }
}

function checkEmail() {
    var fullNameInput = document.getElementById('email').value
    var emailMsg = document.getElementById('emailMsg')

    if (regEmail.test(fullNameInput)) {
        emailMsg.innerHTML = "Valid Email";
        emailMsg.style.color = "green";
        emailMsg.style.fontSize = "10px";
    } else {
        emailMsg.innerHTML = "Not Valid Email";
        emailMsg.style.color = "red";
        emailMsg.style.fontSize = "10px";
    }
}