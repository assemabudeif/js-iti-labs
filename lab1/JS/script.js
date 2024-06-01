/// Task 1 Solution:

// alert("Welcome to my site")

// var name = prompt("What is your name?")

// document.write("welcome " + name + "!")

/// Task 2 Solution:

function sum(number1, number2) {
    return number1 + number2
}
var firstNumber, secondNumber

function showPrompet() {
    firstNumber = Number(prompt("Enter first number"))
    secondNumber = Number(prompt("Enter second number"))

    document.write("The sum of the two numbers is " + sum(firstNumber, secondNumber))
}


/// Task 3 Solution:

function calculateExp() {
    var exp = document.getElementById("exp").value.replaceAll(" ", "")
    var result = eval(exp)
    alert(`You entered: ${exp}, and the result is: ${result}`)
}

/// Task 4 Solution:

// var namePettern = /^[a-zA-Z\s]+$/
// var agePattern = /^[0-9]+$/
// var fullName = "", birthYear = 0
// fullName = prompt("What is your name?")
// if (namePettern.test(fullName) == false) {
//     alert("Please enter a valid name")
// }
// while (namePettern.test(fullName) == false) {
//     fullName = prompt("What is your name?")
//     if (namePettern.test(fullName) == false) {
//         alert("Please enter a valid name")
//     }
// }


// do {
//     fullName = prompt("What is your name?")

//     if (namePettern.test(fullName) == false) {
//         alert("Please enter a valid name")
//     }

// } while (namePettern.test(fullName) == false)


// do {
//     birthYear = prompt("What is your birth year?")
//     Number(birthYear)

//     var condition

//     if (!agePattern.test(birthYear)) {
//         alert("Please enter a valid birth year")
//         condition = true
//     } else if (birthYear >= 2010) {
//         alert("You are not allowed to access this page")
//         condition = true

//     } else {
//         condition = false
//     }

// } while (condition)

// var age = 2024 - birthYear

// document.write(
//     '<span class="title">Name:</span> ' + fullName + '<br>',
//     '<span class="title">Birth year:</span> ' + birthYear + '<br>',
//     '<span class="title">Age:</span> ' + age + '<br>'
// )



/// Bonus

// document.write(
//     'Heading',
//     '<br>',
//     '<hr>',
// )

// for (var index = 1; index <= 6; index++) {
//     document.write(
//         '<h' + index + '>This is header number ' + index + '</h' + index + '>',
//     )

// }