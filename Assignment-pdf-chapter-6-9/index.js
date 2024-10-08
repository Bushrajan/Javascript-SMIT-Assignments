
var number = 10;
document.write("<br><br><h1>Result:</h1>");
document.write("<br>The value of  num is: " + number + "<br>");
document.write("-----------------------------------------------" + "<br><br><br>");
document.write("The value of ++num is: " + ++number + "<br>");
document.write("Now value of num is: 11" + "<br><br>");

document.write("The value of num++ is: " + number++ + "<br>");
document.write("Now value of num is: 12" + "<br><br><br>");

document.write("The value of --num is: " + --number + "<br>");
document.write("Now value of num is: 11" + "<br><br>");

document.write("The value of num-- is: " + number-- + "<br>")
document.write("Now value of num is: 10" + "<br><br><br><br><br>");



//(1) --a;
//(2) --a - --b;
//(3) --a - --b + ++b;
//(4) --a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br><br><br><h2>Result:</h2>");
document.write("The value of a is a: 2 " + "<br>");
document.write("The value of a is b: 1 " + "<br>");
document.write("-----------------------------------------------" + "<br><br>");
document.write(" a is: " + a + "<br>");
document.write(" b is: " + b + "<br>");
document.write(" result is: " + result + "<br><br>");

let myname = prompt("Enter your name: ");
document.write("Hello " + myname + "! <br><br><br>");

let num1 = prompt("Enter the table number you want to print: ");
if (num1 === null || num1 === "") {
    num1 = 5;
}

document.write("Multiplication table of " + num1 + " is: <br><br>");
for (let i = 1; i <= 10; i++) {
    document.write(num1 + " x " + i + " = " + num1 * i);
    document.write("<br>");
}

document.write("<br><br><br><br>");


let sub1 = prompt("Enter subject no-1 in text : ");
let sub2 = prompt("Enter subject no-2 in text : ");
let sub3 = prompt("Enter subject no-3 in text : ");
document.write("You have entered Subjects: <br>");
document.write("Subject 1: " + sub1 + "<br>");
document.write("Subject 2: " + sub2 + "<br>");
document.write("Subject 3: " + sub3 + "<br><br><br>");

let totalMarks = 100;
document.write("Total marks for each subject is: " + totalMarks + "<br><br");

let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + sub1 + ": "));
document.write("You have entered " + obtainedMarks1 + " for " + sub1 + "<br><br>");


let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + sub2 + ": "));
let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + sub3 + ": "));
document.write("You have entered " + obtainedMarks2 + " for " + sub2 + "<br> You have entered " + obtainedMarks3 + " for " + sub3 + "<br><br><br>");

let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
document.write("<table border='1'>");
document.write("<tr> <th>Subject</th> <th>Obtained Marks</th> <th>Total Marks</th ></tr > ");
document.write("<tr><td>" + sub1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><th>Total</th><th>" + totalObtainedMarks + "</th><th>" + totalMarks * 3 + "</th></tr>");
document.write("<tr><th>Percentage</th><th colspan='2'> = " + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");
