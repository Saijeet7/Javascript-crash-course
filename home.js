console.log("hello");

//Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);


// var age = prompt('What is your age?');
// document.getElementById('someText').innerHTML= age;

//Number in JavaScript

var num1 = 10;
//Increment num1 by 1
num1++;
//Decrement num1 by 1
num1--;
console.log(num1);

//Divide, multiply*, remainder%
console.log(num1%6);

//Increment/decrement by any number you want
num1 += 30;
console.log(num1);

//Functions
/*
1. Create a function
2. Call the function
*/

function fun() {
    console.log('This is a function');
}
//Call
fun();
/* Let's create a function that take in a name and says
hello followed by your name

For Example
Name: "Saijeet"
Return: "Hello Saijeet"
*/


function greeting(yourName) {
    var result = 'Hello'+' '+ yourName; // String Concatenation
    console.log(result);
}

var name = prompt('What is your name?');
greeting(name);

//How do arguments work on function?
// Add 2 numbers in a function

function sumNumber(num1,num2) {
    var result = num1 + num2;
    console.log(num1+num2);
}
sumNumber(10,10);
