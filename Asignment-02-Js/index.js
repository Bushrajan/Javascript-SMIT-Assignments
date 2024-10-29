
/* __________________________ 21st to 25th ________________________________________
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
1)Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.*/

// var userinput1 = prompt("Enter your First Name : ");
// var userinput2 = prompt("Enter your Last  Name : ");
// var concat = alert("Welcome to our website " + userinput1 + " " + userinput2 + ".")


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2)Write a program to take a user input about his favorite
mobile phone model.Find and display the length of user
input in your browser */

// var mobilemodel = prompt("Enter your favorite mobile phone model : ");
// alert("Length of string is : " + mobilemodel.length)


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3) Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .*/

// var index_pakistani = "Pakistani";
// alert("The index of letter “n” is : " + index_pakistani.indexOf("n"))


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
4) Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser.*/

// var lastindexof_l = "Hello World"
// alert("The Last index of letter “l” is : " + lastindexof_l.lastIndexOf("l"))


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5) Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser*/

// var _3rdindex = "Pakistani"
// alert("Character at index 3 : " + _3rdindex[3])


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
6) Repeat Q1 using string concat() method.*/

// var userinput1 = prompt(" Enter your First Name : ");
// var userinput2 = prompt(" Enter your Last  Name : ");
// var concat = alert("Welcome to our website ".concat(userinput1 + userinput2 ))


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
7) Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser.*/

// var city = "Hyderabad"
// alert("City : " + city)
// alert("After replacement " + city.replace("Hyder", "Islam"))


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
8) Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”; */

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceword = message.replace(/and/gi , "&")
// alert(replaceword)


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
9) Write a program that converts a string “472” to a number
472. Display the values & types in your browser.*/

// var convertstring = "472"
// var convertnumber = parseInt("472")

// document.write("<br> Value : "+ convertstring)
// document.write("<br> Type : "+ typeof convertstring)
// document.write("<br><br> Value : "+ convertnumber)
// document.write("<br> Type : "+ typeof convertnumber)


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
10) Write a program that takes user input. Convert and
show the input in capital letters. */

// var userInput = prompt("Enter any thing you like: ")
// alert("User Input : " + userInput)
// alert("Upper Case : " + userInput.toUpperCase())


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
11. Write a program that takes user input. Convert and
show the input in title case.*/

// var userInput = prompt("Enter any thing you like: ")
// console.log("TittleCase : " + userInput[0].toUpperCase() + userInput.slice(1));


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
12. Write a program that converts the variable num to string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.*/

// var num = 35.36;
// var newnum = num.toString().replace(".", ""); // original main changes nhi krta
// console.log(newnum);
// console.log(typeof newnum);
// // document.write(newnum);  //browser main sab sy last main show ho ga agr dekhna hoto (bholna nhi hay)


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
13. Write a program to take user input and store username in a
variable. If the username contains any special symbol among [@ . , !],
prompt the user to enter a valid username. For character codes
of [@ .

Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64 */

// var username = prompt("Enter a username:");

// if (username === String.fromCharCode(33) ||
//     username === String.fromCharCode(44) ||
//     username === String.fromCharCode(46) ||
//     username === String.fromCharCode(64)) {
//     console.log("Invalid username. Please enter a valid username without the charcters@ . , !");
// }

// console.log("Valid username: " + username);


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
14. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example:*/

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item you are looking for: \ncake, apple pie, cookie, chips, patties ").toLowerCase();

// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         found = true;
// alert(userInput + " is found in the list.");
//         break;
//     }
// }

// if (found) {
//     alert(userInput + " is not found in the list.");
// }

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
15. Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.*/

// [0 – 9] -- [48 – 57].
// A = 65 --to-- Z = 90
// a = 97 --to-- z = 122.
//////////////////////////////////////////////////my---code

// var inputpswd = prompt("xxxxx Enter Your Password xxxxx \n\n a) It should contain alphabets and numbers\n b) It should not start with a number \n c) It must at least 6 characters long\n xxxxxxxxx('Password-Hint: You are 😁 😁 foolish  😁 😁.')xxxxxxxxxx \n")

// for (var i = 0; i < inputpswd.length; i++) {

//     if (inputpswd[i] === "fool@ish") {
//         alert("Wow !!! thats amaze,  that you remember your passcode.😱😱😱");
//     }

//     else if (inputpswd[i] !== inputpswd[i] > 47 && inputpswd[i] <= 57 ||
//         inputpswd[i] >= String.fromCharCode(65) && inputpswd[i] <= String.fromCharCode(90) ||
//         inputpswd[i] >= String.fromCharCode(97) && inputpswd[i] <= String.fromCharCode(122)) {
//         alert("Remember your password please otherwise you are foolish.");
//     }

//     else {
//         alert("Password does not meet above requirements , Enter a valid password from the instruction given to you.");
//         alert("Hint: you are foolish.")
//         break;
//     }
// }



///////////////////////////////////////////////chatgpt---code
//How it works:
//Prompts the user for a password.
//Initializes isValid to false and enters a loop.
//Inside the loop, it initially sets isValid to true.
//It checks the length of the password; if it’s less than 6 characters, isValid is set to false.
//It checks if the password starts with a number; if it does, isValid is set to false.
//It iterates through the password to check for at least one letter and one number.
//If any of the conditions aren’t met, isValid is set to false, and the user is prompted to re-enter the password.
//The loop continues until a valid password is entered.
//__________________________________________________________________________


// var inputpswd = prompt("Enter Your Password: \n\n a) It should contain alphabets and numbers\n b) It should not start with a number \n c) It must be at least 6 characters long\n");

// var isValid = false;

// while (!isValid) {
//     isValid = true;

//     // Check length
//     if (inputpswd.length < 6) {
//         isValid = false;
//     }

//     // Check if it starts with a number
//     if (!isNaN(inputpswd[0])) {
//         isValid = false;
//     }

//     // Check for letters and numbers
//     var hasLetter = false;
//     var hasNumber = false;

//     for (var i = 0; i < inputpswd.length; i++) {

//         var charCode = inputpswd.charCodeAt(i);

//         if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//         else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasLetter = true;
//         }
//     }

//     if (!hasLetter || !hasNumber) {
//         isValid = false;
//     }

//     if (!isValid) {
//         alert("Password does not meet above requirements. Enter a valid password from the instructions given.");
//         inputpswd = prompt("Enter Your Password: \n\n a) It should contain alphabets and numbers\n b) It should not start with a number \n c) It must be at least 6 characters long\n");
//     }
// }

// alert("Password Accepted ");



/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
16) Write a program to convert the following string to an
array using string split method.
Display the elements of array in your browser*/

// var university = "University of Karachi";
// for (let i = 0; i < university.length; i++) {
//     console.log(university[i]);
// }


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
17) Write a program to display the last character of a user input*/

// var userInput = prompt("Enter the thing you like: ");
// alert(userInput);
// alert(userInput.charAt(userInput.length-1));


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
18) You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string.*/

// var mystr = "The quick brown fox jumps over the lazy dog"
// var count = 0;
// for (var i = 0; i < mystr.length; i++) {

//     if (mystr.slice(i, i + 3).toLowerCase() === "the") {
//         count++
//     }
// }

// console.log("Text : " + mystr);
// console.log("There are " + count + " occurence(s) of 'the' ");

//______________________________________________________________________________________

/* __________________________ 26st to 30th ________________________________________
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

// var number = 3.45215;
// var floatnumber = Math.round(number);
// var floor_value = Math.floor(number);
// var ceil_value = Math.ceil(number);

// document.write("<br><br><br> Number : " + number)
// document.write("<br> Round off Value : " + floatnumber)
// document.write("<br> Floor Value : " + floor_value)
// document.write("<br> Ceil Value : " + ceil_value)

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

// var number = -2.673;
// var floatnumber = Math.round(number);
// var floor_value = Math.floor(number);
// var ceil_value = Math.ceil(number);

// document.write("<br><br><br> Number : " + number)
// document.write("<br> Round off Value : " + floatnumber)
// document.write("<br> Floor Value : " + floor_value)
// document.write("<br> Ceil Value : " + ceil_value)

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

// var number = parseInt(prompt("Enter a number to find its absolute value:"));

// if (number < 0) {
//     number = -number;
// }
// console.log("The absolute value is " + number);

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser. */

// var dice = Math.floor(Math.random() * 6) + 1;
// document.write("<br> Dice Value : " + dice)


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser: */

// var coin = Math.round(Math.random());
// console.log(coin);
// document.write("<p> &nbsp;<br><br><br><br> Random Coin Value : " + coin + "</p>")

// if (coin === 0) {
//     document.write(" <p>&nbsp; Heads : " + coin + "</p>")
//     // alert("Tails")
//     console.log("Tails")
// }
// else {
//     document.write(" <p>&nbsp; Tails : " + coin + "</p>")
//     // alert("Heads")
//     console.log("Heads")
// }


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
6. Write a program that shows a random number between 1
and 100 in your browser.*/

// var randomvalue = Math.floor(Math.random() * 101);
// document.write("<br> Random Value between 1-100: " + randomvalue)

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


7) Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */

// var weight_a = parseInt(prompt("Enter your weight: "));
// console.log(weight_a.toString());

// var weight_b = parseInt(prompt("Enter your weight: "));
// console.log(weight_b.toString() + "kgs");

// var weight_c = parseFloat(prompt("Enter your weight: "));
// console.log(weight_c.toString() + "kgs");

// var weight_d = parseFloat(prompt("Enter your weight: "));
// console.log(weight_d.toString() + "kilograms");

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

8) Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.*/

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userNumber = +prompt("xxxx Guess the Number between 1 to 10 xxxx");

// if (userNumber === secretNumber) {
//     console.log("🎉 🎉 🥳 🎉 🥳 🎊 Congratulations , You won !!!! 🎉 🎉 🥳 🎉 🥳 🎊 ");
// }

// else {
//     console.log("❌ 👎 😥 💔 You Lose Lose Lose .... ❌ 👎 😥 💔");
// }


/* __________________________ 31st to 34th ________________________________________
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

1. Write a program that displays current date and time in
your browser*/

// var date = new Date();
// console.log(date);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2. Write a program that alerts the current month in words.
For example December.*/

// var date = new Date();
// var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  var currentmonth = date.getMonth();
// var month = montharray[currentmonth]
// alert("Current Month : " + month)


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun.*/

// var date = new Date();
// var weekarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentday = date.getDay();
// var currentday = weekarray[currentday]
// alert("Today is : " + currentday)


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today.*/

// var date = new Date();
// var weekarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentday = date.getDay();
// var currentday = weekarray[currentday]

// if (currentday === "Sunday") {
//     alert("It's Fun day")
// }

// else if (currentday === "Saturday") {
//     alert("It's Fun day")
// }

// else {
//     alert("Today is : " + currentday)
// }


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”.*/


// var date = new Date();
// var currentday = date.getDate();

// if (currentday < 16) {
//     console.log("First fifteen days of the month");
// }

// else {
//     console.log("Last days of the month");
// }


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object.*/


// var date = new Date();
// console.log("Current Date : " + date);

// var milisecondssince_1970 = date.getTime()
// console.log("Elapsed miliseconds since January 1 , 1970 : " + milisecondssince_1970);

// var minutessince1970 = Math.floor(milisecondssince_1970 / (1000 * 60));
// console.log("Elapsed minutes since January 1, 1970: " + minutessince1970);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”.*/

// var date = new Date();
// var hours = date.getHours();

// if (hours < 12) {
//     console.log("It's AM");
// }
// else {
//     console.log("It's PM");
// }



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate. */

// var laterDate = new Date("2020, 11, 31");
// console.log("Later Date : " + laterDate);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
9. Create a date object of the starting date of this Note: Date: sep 9, 2024  with the test date:2024, 9, 28*/

// var currentDate = new Date();
// var startDate = new Date("2024, 9, 28");
// var timeDifference = currentDate - startDate;

// //////////////formula of daydifferences Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// console.log ("Number of days past since October 28, 2024: " + daysDifference);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2024.*/

// var date = new Date("October 20,2024"); //today-date
// var datestartof2024 = new Date("January 1, 2024");

// var dateinmilisecds = date.getTime(); //1970 sy abhi tk ky miliseconds
// var startDate_of2024Milisec = datestartof2024.getTime();

// console.log("Today time: " + dateinmilisecds); // aaj ka bara hy
// console.log("Past time: " + startDate_of2024Milisec);

// var timeDifference = dateinmilisecds - startDate_of2024Milisec / (1000 * 60 ) //only-minutes
// console.log("Time Difference: " + timeDifference);



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser. */

// var today_date = new Date();

// var hours = today_date.getHours()
// console.log("Current Hour: " + hours);

// today_date.setHours(hours + 1) // 12 ka time ht 1hr add kis 1ho rha hy
// console.log("Current date: " + today_date);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */

// var date = new Date();

// date.setFullYear(date.getFullYear() - 100); //100 years back (- operation)

// alert("The date of 100 years back then was: " + date);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */

// var userage = +prompt("Enter your age: ")
// var currentDate_year = new Date().getFullYear()  //formula=> curentdate().fullyear()

// var agediffer = currentDate_year - userage;
// console.log("Surprice I findout your Birthyear which is: " + agediffer);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */

// let CustomerName = "Mona";
// var date = new Date();
// var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentmonth = date.getMonth();
// var month = montharray[currentmonth];

// var no_of_units = 100;
// var charges_per_unit = 10;
// var late_charges = 50;

// var netpay = (no_of_units * charges_per_unit).toFixed(2);
// var grosspay = (parseFloat(netpay) + late_charges).toFixed(2);

//             // alert("Customer Name: " + CustomerName + "\n" +
//             // "Current Month: " + month + "\n" +
//             // "Number of Units: " + no_of_units + "\n" +
//             // "Charges per Unit: " + charges_per_unit + "\n" +
//             // "Net Amount Payable (within Due Date): " + netpay + " Rs/-" + "\n" +
//             // "Late Payment Surcharge: " + late_charges + " Rs/-"+ "\n" +
//             // "Gross Amount Payable (after Due Date): " + grosspay + " Rs/-");

// console.log("Customer Name: " + CustomerName);
// console.log("Current Month: " + month);
// console.log("Number of Units: " + no_of_units);
// console.log("Charges per Unit: " + charges_per_unit);
// console.log("Net Amount Payable (within Due Date): " + netpay + " Rs/-");
// console.log("Late Payment Surcharge: " + late_charges + " Rs/-");
// console.log("Gross Amount Payable (after Due Date): " + grosspay + " Rs/-");



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */


/* __________________________ 35th - 38th ________________________________________
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
1. Write a function that displays current date & time in your
browser. */
// function date() {
//     var date = new Date();
//     console.log(date);
// }
// date()

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2. Write a function that takes first & last name and then it
greets the user using his full name. */

// function greets() {
//     var firstName = prompt("Enter First name: ").toLowerCase();
//     var lastName = prompt("Enter last  name: ").toLowerCase();
//     console.log("Hello " + firstName.slice(0, 1).toUpperCase() + firstName.slice(1) + " " + lastName.slice(0, 1).toUpperCase() + lastName.slice(1));
// }
// greets()


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */

// function sum() {
//     var num1 = +prompt("Enter First no: ");
//     var num2 = +prompt("Enter Second  no: ");
//     var sum = num1 + num2
//     console.log("Sum : " + sum);
// }
// sum()


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */

// function calc(n1, n2, operator) {

//     switch (operator) {
//         case "+":
//             return n1 + n2;

//         case "-":
//             return n1 - n2;

//         case "*":
//             return n1 * n2;

//         case "/":
//             return n1 / n2;

//         case "%":
//             return n1 % n2;

//         default:
//             return ("Invalid statement");
//     }
// }
// var result = calc(2, 2, "+");
// console.log("Sum: " + result); // Output: Sum: 4

// result = calc(2, 2, "-");
// console.log("Sub: " + result); // Output: Sub: 0

// result = calc(2, 2, "*");
// console.log("Mul: " + result); // Output: Mul: 4

// result = calc(2, 2, "/");
// console.log("Div: " + result); // Output: Div: 1

// result = calc(2, 2, "%");
// console.log("Mod: " + result); // Output: Div: 1


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5. Write a function that squares its argument. */

// function square(number) {
//     return number * number;
// }

// var square_result = square(2, 2);
// console.log("Square of a num 2 : " + square_result);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
6. Write a function that computes factorial of a number. */

// function factorial(number) {
//     var fac = 1;
//     for (var i = 1; i <= number; i++) {
//         fac *= i;
//     }
//     return fac;
// }

// var fac_result = factorial(5);
// console.log("Factorial : " + fac_result);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
7. Write a function that take start and end number as inputs
& display counting in your browser. */


// function count() {

//     var start = +prompt("Enter start number of counting: ")
//     var end = +prompt("Enter end number of counting: ")

//     for (var i = start; i <= end; i++) {
//         console.log(i);

//     }

// }
// count();


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare() */

// function hypotenuse(base, perp) {
//     function square(number) {
//         return number * number;
//     }

//     var hyposquare = square(base) + square(perp)
//     var hypo_result = Math.sqrt(hyposquare);
//     return hypo_result;
// }

// var rightAngleTriangle = hypotenuse(5,5);
// console.log("Right Angle Triangle : " + rightAngleTriangle.toFixed(2));



/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */

// function area_rect(width, height) {
//     return width * height;
// }

// var area_result = area_rect(5, 5);
// console.log("The area of a rectangle : " + area_result);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam. */

// function palindrome() {
//     var word = prompt("Enter word : ").toLowerCase();
//     var palindrome = word.split("").reverse().join("")

//     if (word === palindrome) {
//         console.log("Palindrom >>>>>" + word);

//     }
//     else {
//         console.log("Not palindrom >>>> " + word);
//     }
// }

// palindrome()


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */

// function converstring(phrase) {

//     var string = phrase.split(" ")

//     for (var i = 0; i < string.length; i++) {
//         string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
//     }

//     return string.join(" ");
// }

// var Example_string = 'the quick brown fox';
// var result = converstring(Example_string);
// console.log(result);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development' */

// function findLongestWord(str) {

//     var words = str.split(' ');
//     var longestWord = '';

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// var exampleString = 'Web Development Tutorial';
// var longestWord = findLongestWord(exampleString);
// console.log("The longest word is: " + longestWord);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o' */

// function countOccurrences(string, letter) {

//     var count = 0;

//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// var exampleString = 'JSResourceS.com';
// var letterToCount = 'o';
// var occurrences = countOccurrences(exampleString, letterToCount);
// console.log("Number of occurrences of 'JSResourceS.com' in the string: " + occurrences +  " which is " + letterToCount);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.

Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius,
and output "The circumference is NN".

Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area is NN".
>> Circumference of circle = 2πr
>> Area of circle = πr2 */


// function calcCircumference(radius) {
//     var PI = 3.14
//     return 2 * PI * radius
// }

// var resultcircumference = calcCircumference(2)
// console.log("The Circumference of Circle is : " + resultcircumference);


// function calcArea(radius) {
//     var PI = 3.14
//     return PI * radius * radius
// }

// var resultarea = calcArea(4)
// console.log("The Area of Circle is : " + resultarea);


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

/* __________________________ 38th - 44th ________________________________________
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
1. Write a custom function power ( a, b ), to calculate the value of
a raised to b. */

// function power(a, b) {
//     return a ** b;
// }

// var resultpower = power(3, 2)
// console.log("Power of 3 which is 2 = " + resultpower);


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2. Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not.
Leap years ..., 2012, 2016, 2020 */

/////////// Which are Leap Years?
/////////// The complete list of leap years in the first half of the 21st century is
/////////// therefore 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, and 2048.
/////////// -------------------------------------------------------------------------------------------

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// var resultyear =  isLeapYear(2005)
// console.log("Leap year : " + resultyear);
// var resultyear =  isLeapYear(2006)
// console.log("Leap year : " + resultyear);
// var resultyear =  isLeapYear(2004)
// console.log("Leap year : " + resultyear);

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S (S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */

// function CalcArea(a, b, c) {
//     function side(a, b, c) {
//         return (a + b + c) / 2
//     }

//     var Sides = side(a, b, c)
//     var AreaTriangle = (Sides * (Sides - a) * (Sides - b) * (Sides - c))
//     return Math.sqrt(AreaTriangle)
// }

// console.log(CalcArea(3, 4, 5))


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
4. Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction. */


// function average(m1, m2, m3) {
//     return m1 + m2 + m3 / 3
// }

// function percentage(m1, m2, m3) {
//     var obtmarks = m1 + m2 + m3
//     return (obtmarks / 300) * 100
// }

// function mainFunction(m1, m2, m3) {

//     var calculateAverage = average(m1, m2, m3)
//     var calculatePercentage = percentage(m1, m2, m3)

//     console.log("Total Marks: 300 ");
//     console.log("Obtained Marks: " + obtmarks);
//     console.log("Average Marks: " + calculateAverage.toFixed(2));
//     console.log("Percentage: " + calculatePercentage.toFixed(2) + "%");
// }

// var m1 = 85, m2 = 90, m3 = 56;
// var obtmarks = m1 + m2 + m3;
// mainFunction(m1, m2, m3)


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
5. You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now. */

// function findindexof(example,letter) {

//     var i = 0;
//     while (i <= example.length - 1) {

//         if(example[i] === letter){
//             return i;
//         }
//         i++
//     }
// }
// console.log("Indexof r in text 'Hello Bushra' is : ",findindexof('Hello Bushra','r'));


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
6. Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long. */

// function vowels(myString) {
//     return myString.replace(/[aeiou]/gi, "")
// }

// console.log("Hi I am Bushra Jan.");
// console.log(vowels("Hi I am Bushra Jan."));

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
7. Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence "Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui.*/

// function countOccurrences(v) {
//     var vowels_pairs = []
//     for (let i = 0; i < v.length - 1; i++) {
//         var newvowel = v[i] + v[i + 1];


//         switch (newvowel) {
//             case "aa": case "ea": case "ia": case "oa": case "ua":
//             case "ae": case "ee": case "ie": case "oe": case "ue":
//             case "ai": case "ei": case "ii": case "oi": case "ui":
//             case "ao": case "eo": case "io": case "oo": case "uo":
//             case "au": case "eu": case "iu": case "ou": case "uu":
//                 vowels_pairs.push(newvowel)
//                 break;

//             default:
//                 break;
//         }
//     }
//     return vowels_pairs;
// }
// console.log("Lorem ipsum dolor sit amet usandae, rerum? Minimeat.Lorem ipsum dolor sit amet usandae, rerum? Minimeat.");
// console.log(countOccurrences("Lorem ipsunatur itaque! Recusan modi facere placeat.Lorem ipsum dolor sit amet usandae, rerum? Minimeat."));


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
8. The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters.*/

// function kmToM() {
//     var m = 1 * 1000;
//     return m;
// }

// function kmToF() {
//     var f = 1 * 3280.84;
//     return f;
// }

// function kmToI() {
//     var i = 1 * 39370.1;
//     return i;
// }

// function kmToCm() {
//     var cm = 1 * 100000;
//     return cm;
// }


// function distabcebetweencities() {
//     var Km = +prompt("Enter the distance in kilometers: ");
//     Km = parseFloat(Km);

//     if (isNaN(Km) || Km < 0) {
//         alert("Distance can't be negative...")
//         return;
//     }

//     var kilometersToMeters = Km * kmToM();
//     var kilometersToFeet = Km * kmToF();
//     var kilometersToInches = Km * kmToI();
//     var kilometersToCentimeters = Km * kmToM();

//     console.log("The distance in meters: " + kilometersToMeters + " m");
//     console.log("The distance in feet: " + kilometersToFeet + " ft");
//     console.log("The distance in inches: " + kilometersToInches + " in");
//     console.log("The distance in centimeters: " + kilometersToCentimeters + " cm");
// }

// distabcebetweencities()


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
9. Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour.*/

// function calculate_overtime_pay(hrs_of_work) {
//     var perHourPayrate = 12.00;
//     var regularHours = 40;
//     var overtimeHours = hrs_of_work - regularHours;
//     var overtimePaystart = 0;

//     if (hrs_of_work > regularHours) {
//         overtimePaystart = overtimeHours * perHourPayrate;
//     }

//     return "Your overtime pay is Rs. " + overtimePaystart;
// }

//     //for user
// var takeHours = +prompt('Enter total hours of worked (above 40): ');
// console.log(calculate_overtime_pay(takeHours),"/-");

//     //for console
// console.log(calculate_overtime_pay(50),"/-");
// console.log(calculate_overtime_pay(60),"/-");



/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
10. A cashier has currency notes of denominations 10, 50 and
100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes
of each denomination the cashier will have to give to the
withdrawer.*/

function calculateNotes(amount) {
    var hundredsrupeenote = Math.floor(amount / 100);
    amount = amount % 100;

    let fiftiesrupeenote = Math.floor(amount / 50);
    amount = amount % 50;

    let tensrupeesnote = Math.floor(amount / 10);
    amount = amount % 10;

    console.log("You will have the return amount in 100s: " + hundredsrupeenote + " hundred-notes " +
        ", 50s: " + fiftiesrupeenote + " fifty-notes " + "& 10s: " + tensrupeesnote + " ten-notes ");

    console.log("Have a good day...");

}

// for user
var amount = parseInt(prompt("Enter the amount in hundreds: "));
calculateNotes(amount);

// for console
// console.log(calculateNotes(470));
// console.log(calculateNotes(120));


/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//__________________________________________________________________________________
//|------  |xxxxxxxxx| ----- |xx|       |xx| ---  |xxxxxxxxx|  --------
//|------  |xx|        ----- |xx|x|     |xx| ---  |xx|    |xx|  --------
//|------  |xxxxxx|    ----- |xx| |x|   |xx| ---  |xx|    |xx|  --------
//|------  |xx|        ----- |xx|   |x| |xx| ---  |xx|    |xx|  --------
//|------  |xxxxxxxxx| ----- |xx|     |x|xx| ---  |xx|xxx|xx|  --------
//_________________________________________________________________________________
