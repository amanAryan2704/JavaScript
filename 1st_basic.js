"use strict" //=> use for new version of js

console.log("jai shree ram");

var fullName="aman";

console.log("fullName: "+ fullName);
//                              or
console.log("fullName:", fullName);

var age=18;
console.log(age);

var gender;
console.log(gender);
gender="Male"

// print more than one variable at a time by using only one "console.log()" statement

console.log(`

Your fullname is:${fullName}
Your age is:${age}
Your gender is:${gender}

`);
console.log(
fullName,age);

// Avoid digit after decimal by using "Math.round()"

// console.log(Your fullname is:fullname
//     Your age is:age
//     Your gender is:gender
var a=15.237489;
var result=Math.round(a);
console.log(result);

// Find data type of any variable by using "typeof" operator
var type=typeof age;
console.log(type);
console.log(typeof fullName);

// Coverting a string into a number

let regNo="1234";
let rNo=Number(regNo); //"regNo" converted into "number" for "string" by using "Number" function 
console.log(typeof regNo);
console.log(typeof rNo);
console.log(rNo);

// ++ or -- => called, precedence operator
var a=8.3378;
console.log(Math.round(a));

var a=778;
var aString=String(a)
console.log(aString);
console.log(typeof aString);

// Prefer not to use var bacause of issue in functional & block scope


// typeof operator

let userName="Aman";
console.log("typeof userName:",typeof userName);

// typeof null => Object;
// typeof undefined => undefined:

console.log(typeof null); // object
console.log(typeof undefined); // undefined

// coercion => coercion in javscript means, type conversion of a variable.

let number=123;
let input1=String(number);
console.log(input1);
console.log(typeof input1);

let firstName="Sankalp";
let input2=Number(firstName);
console.log(input2);
console.log(typeof input2);

let userLogedIn=1;
let input3=Boolean(userLogedIn);
console.log(input3);
console.log(typeof input3);

