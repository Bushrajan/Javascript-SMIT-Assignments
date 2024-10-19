
/* __________________________ 21st to 25th ________________________________________
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
1)Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.

// var userinput1 = prompt("Enter your First Name : ");
// var userinput2 = prompt("Enter your Last  Name : ");
// var concat = alert("Welcome to our website " + userinput1 + " " + userinput2 + ".")


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
//don't open       var replaceword = message.replaceAll("and", "&") //ES6 as a practice
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
// var invalid_characters = /[@.,!]/;

// while (invalid_characters.test(username)) {
//     username = prompt("Invalid username. Please enter a valid username without the charcters@ . , !");
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
//     if (A[i].toLowerCase() === userInput) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert(userInput + " is found in the list.");
// } else {
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

//     if (mystr.slice(i, i + 3) === "the" ||  mystr.slice(i, i + 3) === "The" ) {
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
b. 50kgsF
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
D

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


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//__________________________________________________________________________________
//|------  |xxxxxxxxx| ----- |xx|       |xx| ---  |xxxxxxxxx|  --------
//|------  |xx|        ----- |xx|x|     |xx| ---  |xx|    |xx|  --------
//|------  |xxxxxx|    ----- |xx| |x|   |xx| ---  |xx|    |xx|  --------
//|------  |xx|        ----- |xx|   |x| |xx| ---  |xx|    |xx|  --------
//|------  |xxxxxxxxx| ----- |xx|     |x|xx| ---  |xx|xxx|xx|  --------
//_________________________________________________________________________________

