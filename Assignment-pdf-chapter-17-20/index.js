
var empty_array1 = [[], [], []]

var empty_array2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]


for (var i = 1; i <= 10; i++) {
    console.log(i);
}

var table_number = +prompt("Enter table number : ")
var table_range = +prompt("Enter table Range : ")

for (var i = 1; i <= table_range; i++) {
    console.log(table_number + "  X  " + i + "  =  " + table_number * i);
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i <= fruits.length - 1; i++) {
    console.log(fruits[i]);
}
console.log("Element at index 0 is ", fruits[0]);
console.log("Element at index 1 is ", fruits[1]);
console.log("Element at index 2 is ", fruits[2]);
console.log("Element at index 3 is ", fruits[3]);
console.log("Element at index 4 is ", fruits[4]);


//Counting
for (var i = 1; i <= 15; i++) {
    console.log(i);
}

//Reverse Counting
for (var j = 10; j >= 1; j--) {
    console.log(j);
}

//Even
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0)
        console.log(i);
}

//Odd
for (var i = 1; i <= 19; i++) {
    if (i % 2 !== 0)    // two ways to write condition (i % 2 !== 0 || i % 2)
        console.log(i);
}

//Series
var series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"]
for (var i = 0; i < series.length; i++) {
    console.log(series[i]);
}


//Array
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Enter the item you are looking for: \ncake, apple pie, cookie, chips, patties ");

if (A.includes(userInput.toLowerCase())) {
    alert(userInput + " is found in the list.");
}
else {
    alert(userInput + " is not found in the list.");
}


//smallest number
var A_num = [24, 53, 78, 91, 12]
var min_element = Infinity

for (var i = 0; i < A_num.length; i++) {

    if (min_element > A_num[i]) {
        min_element = A_num[i]
    }
}
console.log(min_element);


//largest number
for (var i = 0; i < A_num.length; i++) {
    if (min_element <= A_num[i]) {
        min_element = A_num[i]
    }
}
console.log(min_element);



for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0)
        console.log(i);
}
