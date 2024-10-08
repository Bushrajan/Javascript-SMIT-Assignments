let city = prompt("Enter your city name: ");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}
else {
    alert("Welcome to " + city);
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let gender = prompt("Enter your gender (male/female): ");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
}
else {
    alert("Invalid input");
}

let fuel = prompt("Enter the remaining fuel in litres: ");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
else {
    alert("You have enough fuel");
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals 2000");
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


if (true) {
    alert("True");
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

if (false) {
    alert("False");
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


if ("car" < "cat") {
    alert("car is smaller than cat");
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var num = prompt("Enter a number");
if (num % 3 === 0) {
    alert("The number is divisible by 3");
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
var num = prompt("Enter a number");
if (num % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var Temp = prompt("Enter temperature");
if (Temp > 40) {
    alert("It is too hot outside.");
} else if (Temp > 30) {
    alert("The Weather today is Normal.");
} else if (Temp > 20) {
    alert("Today's Weather is cool.");
} else if (Temp > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("Temperature is too low");
}


var num1 = parseFloat(prompt("Enter first number"));
var num2 = parseFloat(prompt("Enter second number"));
var operation = prompt("Enter operation (+, -, *, /, %)");
if (operation === "+") {
    var result = num1 + num2;
    alert("The result is " + result);
}

else if (operation === "-") {
    var result = num1 - num2;
    alert("The result is " + result);
}

else if (operation === "*") {
    var result = num1 * num2;
    alert("The result is " + result);
}

else if (operation === "/") {
    if (num2 != 0) {
        var result = num1 / num2;

        alert("The result is " + result);
    }
    else {
        alert("Error! Division by zero is not allowed.");
    }
}

else if (operation === "%") {
    if (num2 != 0) {
        var result = num1 % num2;
        alert("The result is " + result);
    }
    else {
        alert("Error! Division by zero is not allowed.");
    }
}

else {
    alert("Invalid operation. Please enter +, -, *, / or %.");
}