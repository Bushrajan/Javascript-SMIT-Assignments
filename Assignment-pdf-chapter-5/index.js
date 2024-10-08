var num1 = 5
var num2 = 5
var sum = num1 + num2;
document.write("<br><br>Sum  &nbsp;&nbsp;of  &nbsp;&nbsp;5 and &nbsp;&nbsp;5 &nbsp;&nbsp;is &nbsp;&nbsp;" + sum);

var num1 = 5
var num2 = 5
var sub = num1 - num2;
document.write("<br>Sub  &nbsp;&nbsp; of  &nbsp;&nbsp;5 and &nbsp;&nbsp;5 &nbsp;&nbsp;is &nbsp;&nbsp;" + sub);

var num1 = 5
var num2 = 5
var mul = num1 * num2;
document.write("<br>Mul  &nbsp;&nbsp;of  &nbsp;&nbsp;5 and &nbsp;&nbsp;5 &nbsp;&nbsp;is &nbsp;&nbsp;" + mul);

var num1 = 5
var num2 = 5
var div = num1 / num2;
document.write("<br>Div  &nbsp;&nbsp; of  &nbsp;&nbsp;5 and &nbsp;&nbsp;5 &nbsp;&nbsp;is &nbsp;&nbsp;" + div);


var num1 = 5
var num2 = 5
var mod = num1 % num2;
document.write("<br>Mod  &nbsp;of  &nbsp;&nbsp;5 and &nbsp;&nbsp;5 &nbsp;&nbsp;is &nbsp;&nbsp;" + mod);

var variable;
document.write("<br><br>Value after variable declaration is " + variable);

variable = 5;
document.write("<br>Initial value: " + variable);

variable++;
document.write("<br>Value after increment is: " + variable);

variable = variable + 7;
document.write("<br>Value after addition is: " + variable);

variable--;
document.write("<br>Value after decrement is: " + variable);

variable = variable % 3;
document.write("<br>The remainder is: " + variable);


var ticketprice1 = 600
var ticketcost = 5
var total = ticketprice1 * ticketcost;
document.write("<br><br><h1>Movie Ticket:</h1>");
document.write("<br>ticketprice1:" + ticketprice1);
document.write("<br>ticketcost:" + totalcost);
document.write("<br>Total cost to buy " + ticketcost + " tickets to a movie is " + total + "<b>PKR</b> ");


var no = +prompt("Enter any number for Table : ")
document.write("<br><br><br><h1>Table of : " + no + "<br><br> </h1>");
for (let i = 1; i <= 10; i++) {
    document.write(no + " X " + i + " = " + i * no + "<br>");
}


var Celsius = 70;
var Fahrenheit = 25;

var Fahrenheit_temperature_into_Celsius = (9 / 5) * 25 + 32;
var Celsius_temperature_into_Fahrenheit = (70 - 32) * 5 / 9;
document.write("<br><br><br><h1>Tempreture Calculation </h1>");
document.write("<br> 25°C is  " + Fahrenheit_temperature_into_Celsius + "°C");
document.write("<br> 77°F is  " + Celsius_temperature_into_Fahrenheit + "°F");


var Price_of_item1 = 650;
var Orderedquantityof_item1 = 3;
var Price_of_item2 = 100;
var Orderedquantityof_item2 = 7;
var Shippingcharges = 100;

var total_item1 = 650 * 3;
var total_item2 = 100 * 7;
var total_item_price = total_item1 + total_item2;
var totalcost = total_item_price - Shippingcharges;

document.write("<br><br><br><h1>Shopping: </h1>");
document.write("<br>Price of item 1 is " + Price_of_item1);
document.write("<br>Quantity of item 1 is " + Orderedquantityof_item1);
document.write("<br>Price of item 2 is " + Price_of_item2);
document.write("<br>Quantity of item 2 is " + Orderedquantityof_item2);
document.write("<br>Shipping Charges " + Shippingcharges);
document.write("<br><br>Total cost of your order is " + totalcost);


var Total_marks = 980;
var Marks_obtained = 804

if (Marks_obtained >= 0 && Marks_obtained <= 980) {
    if (Marks_obtained >= 800) {
        console.log("A+");
    } else if (Marks_obtained >= 700) {
        console.log("A");
    } else if (Marks_obtained >= 600) {
        console.log("B");
    } else if (Marks_obtained >= 500) {
        console.log("C");
    } else if (Marks_obtained >= 400) {
        console.log("D");
    } else {
        console.log("fail");
    }
}
else {
    console.log("invalid inputF");
}


var Percentage = Marks_obtained * 100 / Total_marks;
document.write("<br><br><h1>Mark Sheet</h1>");
document.write("<br>Total_marks    : " + Total_marks);
document.write("<br>Marks_obtained : " + Marks_obtained);
document.write("<br>Percentage    :  " + Percentage + "%");


var UStoPKR = 10 * 104.80;
var SautoPKR = 28 * 25;

var currencyPKR = UStoPKR + SautoPKR;
document.write("<br><br><h1>Currency in PKR </h1>");
document.write("<br>Total Currency in PKR: " + currencyPKR);


var totalnumber = 5;
var exp = totalnumber * 10 / 2
document.write("<br><br><h1>Full Expression: </h1>" + " 5 * 10 / 2 = " + exp);


var currentyear = 2024;
var birthyear = 2010;
var totalage = currentyear - birthyear;
document.write("<br><br><h1>Age Calculator</h1>");
document.write("<br>Current Year : " + currentyear);
document.write("<br>Birth Year : " + birthyear);
document.write("<br>Your Age is : " + totalage);


var PI = 3.142;
var radius = 20;
var circumference = 2 * PI * radius;
var area = PI * radius * radius;

document.write("<br><br><h1>The Geometrizer</h1>");
document.write("<br>Radius of a circle : " + radius);
document.write("<br>The circumference is : " + circumference);
document.write("<br>The area is : " + area);


var favorite_snack = "choclate chip";
var current_age = 15;
var max_age = 65;
var totalsnack = ( max_age - current_age ) * 3;
var Amountofsnack_per_day = 3;

document.write("<br><br><h1>Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snack: " + favorite_snack);
document.write("<br>Current age: " + current_age);
document.write("<br>Estimated Maximum Age: " + max_age);
document.write("<br>Amount of snacks per day: " + Amountofsnack_per_day);
document.write("<br>You will need " + totalsnack + " chocolate chip to last you until the ripe old age  of " + max_age);

