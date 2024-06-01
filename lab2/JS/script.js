/// Task1 - Create a function that takes a number as an argument and returns a grade based on that number.
var tips = [
    "Don\’t forget var keyword when assigning a variable\’s value for the first time.",
    "use === instead of ==",
    "undefined, null, 0, false, NaN, '' (empty string) are all falsy.",
    "Use Semicolons for line termination",
    "Create an object constructor",
    "Be careful when using typeof, instanceof and constructor.",
    "Create a Self-calling Function",
    "Get a random item from an array",
    "Get a random number in a specific range",
    "Generate an array of numbers with numbers from 0 to max"
];

var tip = tips[Math.floor(Math.random() * tips.length)];
alert(tip);

/// Task2 - Make a button that display the current date
var date = new Date();

function displayDate() {
    var localeDateFormat = date.toLocaleDateString();
    var localeTimeFormat = date.toLocaleTimeString();


    document.write(
        `Current Date is: ${localeDateFormat}
         <br>
        Current Time is: ${localeTimeFormat}
    `);
}

/// Task3 - Error Handling
function division(firstNumber, secondNumber) {
    try {
        // make error
        undefinedVariable;

        return firstNumber / secondNumber;
    } catch (error) {
        alert("Error: " + error.message);
    }
}

function task3() {
    var firstNumber = parseInt(prompt("Enter first number: "));
    var secondNumber = parseInt(prompt("Enter second number: "));
    var result = division(firstNumber, secondNumber);
    alert("Result: " + result);
}

/// Task 4
// function enteredDate() {
//     var date = prompt("Enter date in format (DD–MM–YYYY) ex. 22–01–1999");
//     var splittedDate = date.split("-");

//     if (validateDate(date)) {
//         createNewDate(splittedDate[2], splittedDate[1], splittedDate[0]);
//     } else {
//         alert("Wong Date Format, Please try again.");
//     }
// }

// function validateDate(date) {
//     if (date.length != 10 || date[2] != "-" || date[5] != "-") {
//         return false;
//     } else {
//         return true;
//     }
// }

// function createNewDate(year, month, day) {
//     var newDate = new Date(year, month, day);
//     alert(`The Date you are enterd is:\n\n${newDate}`);
// }

/// Task 5
function findNumberFound(numbers, serchNumber) {
    var times = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == serchNumber) {
            times++;
        }
    }
    return times;
}

console.log(findNumberFound([5, 2, 3, 4, 5, 6, 7, 5, 9, 5], 5));

/// Task 6
function removeFromArray(array, char) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] != char) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeFromArray([5, 2, 3, 4, 5, 6, 7, 5, 9, 5], 5));

/// Bonus Task 1
function enteredDate() {
    var date = prompt("Enter date in format (DD–MM–YYYY) ex. 22–01–1999");
    var splittedDate = date.split("-");

    // try {
    // if (
    validateDate(date)
    // )
    createNewDate(splittedDate[2], splittedDate[1], splittedDate[0]);
    // } catch (error) {
    //     alert(error.message);
    // }
}

function onErrorDate() {
    alert("Wong Date Format, Please try again.");
}
function validateDate(date) {
    if (date.length == 10 && date[2] == "-" && date[5] == "-") {
        return true;
    } else {
        throw new Error("Invalid Date Format, Please try again.");
    }
}

function createNewDate(year, month, day) {
    var newDate = new Date(year, month, day);
    alert(`The Date you are enterd is:\n\n${newDate}`);
}


/// Bonus Task 2
window.onerror = function (msg, url, line, col, error) {
    alert(msg);
    return true; // Prevent default error handling
};

/// Bonus Task 3
function sortArray(array) {
    return array.sort();
}

console.log("Sorted Array:" + sortArray([5, 2, 3, 4, 5, 6, 7, 5, 9, 5]));

/**
 * The sort() method in JavaScript sorts the elements of an array in place and returns the sorted array.
 * By default, it sorts the elements as strings and converts them to strings before comparing them.
 */