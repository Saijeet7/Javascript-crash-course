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

//var name = prompt('What is your name?');
//greeting(name);

//How do arguments work on function?
// Add 2 numbers in a function

function sumNumber(num1,num2) {
    var result = num1 + num2;
    console.log(num1+num2);
}

sumNumber(10,10);

//While Loops
/*var num = 0;
 while (num <100){
     num +=1;
     console.log(num);
 }


*/
// For Loop
/*for (let num =0; num<=100; num++){
    console.log(num);
}*/

// Data Types
let yourAge =18;                                //number
let yourName = 'Bob';                           //String
let name = {first: 'Jane', last: 'Doe'};        //object
let truth = false;                              //boolean
let groceries = ['apple','banana','oranges'];   //array
let random;                                     //undefined
let nothing = null                              //value null


//Strings in JavaScript (common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple';               //new line

console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.split(','));              //split by a comma
console.log(fruit.split(''));               //split by character

//Arrays
let fruits= ['banana','apple','orange','blackberry'];
fruits = new Array('banana','apple','orange','blackberry');

console.log(fruits[0]); //access value at index 2nd

fruits[0] = 'pear';
console.log(fruits); 

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//Array common methods
console.log('to String:',fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(),fruits); // removes last item
console.log(fruits.push('blackberry'),fruits); // appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; //same as push
console.log(fruits);
fruits.shift(); //remove first element from a list
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['asparagus','tomato','broccoli'];
let allGroceries = fruits.concat(vegetables); //combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [ 5,12 ,1 ,211 ,3 ,35 ,345 ,46 ,12 , 6];
console.log(someNumbers.sort(function(a,b){return a-b})); //sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a})); //sorted in decending order

let emptyArray = new Array();

for (let num=0; num<=10; num++){
    emptyArray.push(num);
}

console.log(emptyArray);

// Object in JavaScript
// Dictionaries in Python

let student = {
    first:'Saijeet', 
    last:'Upadhyay', 
    age:22, 
    height:175,
    studentInfo: function (){
        return this.first + '\n'+ this.last + '\n' + this.age;
    }
};

console.log(student.first);
console.log(student.last);
student.first = "Saikriti"; // Change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());


// Conditionals, COntrol flow (if else)
//18-35 demographic
// && AND
// || OR

//var age = prompt('what is your age');
/*
if ((age >= 18) && (age<=35)){
    status ='target demo';
    console.log(status);
}else{
    status='not target demo';
    console.log(status);
}
*/
//Switch statements
//differentiate between weekday vs weekend
// day 0 = Sunday, 6 = Saturday,



switch (6){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text='weekday'
        break;
}
console.log(text);