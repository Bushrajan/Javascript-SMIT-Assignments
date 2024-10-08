
let input = prompt("Enter Number Or any String or Character");

if (input >= String.fromCharCode(65) && input <= String.fromCharCode(90)) {
    alert("Uppercase");
}

else if (input >= String.fromCharCode(97) && input <= String.fromCharCode(122)) {
    alert("Lowercase");
}

else if (input >= String.fromCharCode(48) && input <= String.fromCharCode(57)) {
    alert("Number");
}
else {
    alert("Invalid condition...");
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var intput_1 = +prompt("Enter First Number ...");
var intput_2 = +prompt("Enter Second Number ...");


if (intput_1 === intput_2) {
    alert("Both Numbers Are Equal");
}

else if (intput_1 > intput_2) {
    alert("First Number is Greater");
}

else {
    alert("Second Number is Greater");
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


var number = +prompt("Enter Number that you want to check");
if (number > 10) {
    alert("Positive Number");
}
else if (number < 100) {
    alert("Negative Number");
}
else {
    alert("xxx Zero xxx");
}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var check = prompt("Enter any character of Alphabets...");
if (
    check.toLowerCase() === "a" ||
    check.toLowerCase() === "e" ||
    check.toLowerCase() === "i" ||
    check.toLowerCase() === "o" ||
    check.toLowerCase() === "u"
) {
    alert("vowel...");
} else {
    alert("consonant...");
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


var pswd = "password12345";
var inputpswd = prompt("Enter any Password : (Password hint: password12345)");
if (inputpswd === null) {
    alert("Please Enter Password first...");
}
else {
    if (inputpswd === pswd) {
        alert("Correct !!! password...");
    } else {
        alert("Incorrect XXX Password...");
    }
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert("Good day");
}

else {
    greeting = "Good evening";
    alert("Good evening");

}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// var time = 1900;
var time = +prompt("Enter time in 4 digits like 1900");

if (time >= 0 && time < 1200) {
    alert("Good Morning")
}

else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon")
}

else if (time >= 1700 && time < 2100) {
    alert("Good Evening")
}

else if (time >= 2100 && time < 2359) {
    alert("Good Night")
}

else if (time > 12 && time < 24) {
    alert(" PM time..")
}

else {
    alert("unvalid time..")
}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var hour = 10;
if (hour > 12 && hour < 24) {
    alert(" PM time..")
}
else {
    alert(" AM time..")

}
