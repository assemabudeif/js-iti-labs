var regText = /^[A-Za-z\s]+$/;

function checkInputs(event) {
    return regText.test(event.key);
}

// Graduation date in milliseconds since Jan 1, 1970
var graduationDate = new Date("2024", "7", "1").getTime();

// Update the countdown every second
setInterval(countdownDate, 1000); // Update every second

function countdownDate() {
    var now = new Date().getTime();
    var timeLeft = graduationDate - now;

    // Calculate remaining time
    var months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeLeft / (1000 * 60 * 60));
    var minutes = Math.floor(timeLeft / (1000 * 60));
    var seconds = Math.floor(timeLeft / 1000);

    // Adjust values to get the correct remaining time
    days %= 30;
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    var countdown = document.getElementById("countdown");
    countdown.innerHTML = months + " months " + days + " days " + hours + " hours "
        + minutes + " minutes " + seconds + " seconds ";

    // If the countdown is over, show a message
    if (timeLeft <= 0) {
        clearInterval(countdown);
        countdown.innerHTML = "Graduation Day!";
    }
}