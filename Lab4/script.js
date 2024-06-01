var regForm = document.getElementById('regForm')
var fullNameInput = document.getElementById('fullName');
var fullNameValidaion = document.getElementById('fullNameValidation');
var passwordInput = document.getElementById('password');
var repeatPasswordInput = document.getElementById('repeatPassword');
var repeatPasswordValidation = document.getElementById('repeatPasswordValidation');

// When focus on the full name input, the border should be blue
fullNameInput.onfocus = (event) => {
    event.target.style.border = "";
    fullNameInput.style.border = "solid 3px blue";
};

// When focus out of the full name input, the border should be removed
fullNameInput.onblur = function () {
    fullNameInput.style.border = "";
    if (fullNameInput.value.length < 3) {
        fullNameValidaion.innerHTML = "Invalid name";
        fullNameValidaion.style.color = "red";
        fullNameInput.style.backgroundColor = "grey";
        this.focus();
        this.select();
    } else {
        fullNameInput.style.backgroundColor = "white";
        fullNameValidaion.innerHTML = "";
    }
};

// When focus on the password input, the border should be blue
repeatPasswordInput.onfocus = (event) => {
    repeatPasswordInput.style.border = "solid 3px blue";
}

// When focus out of the password input, the border should be removed
repeatPasswordInput.onblur = function () {
    repeatPasswordInput.style.border = "";
    if (repeatPasswordInput.value !== passwordInput.value) {
        repeatPasswordValidation.innerHTML = "password and repeat password should be the same";
        repeatPasswordValidation.style.color = "red";
        repeatPasswordInput.style.backgroundColor = "grey";
        this.focus();
        this.select();
    } else {
        repeatPasswordInput.style.backgroundColor = "white";
        repeatPasswordValidation.innerHTML = "";
    }
}


// When the form is submitted, the full name should be at least 3 characters and the password and repeat password should be the same
regForm.onsubmit = function (event) {
    if (fullNameInput.value.length < 3) {
        event.preventDefault();
        fullNameValidaion.innerHTML = "Invalid name";
        fullNameValidaion.style.color = "red";
        fullNameInput.style.backgroundColor = "grey";
        fullNameInput.focus();
        fullNameInput.select();
    } else {
        fullNameValidaion.innerHTML = "";
        fullNameInput.style.backgroundColor = "white";
    }

    if (repeatPasswordInput.value !== passwordInput.value) {
        event.preventDefault();
        repeatPasswordValidation.innerHTML = "password and repeat password should be the same";
        repeatPasswordValidation.style.color = "red";
        repeatPasswordInput.style.backgroundColor = "grey";
        repeatPasswordInput.focus();
        repeatPasswordInput.select();
    } else {
        repeatPasswordValidation.innerHTML = "";
        repeatPasswordInput.style.backgroundColor = "white";
    }
}