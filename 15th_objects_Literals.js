// object literals

// put symbol value inside object
const id=Symbol('121');

const myObj={
    name:"Aman",
    age:19,
    // id:"121", //=> for use it as a symbol we have to follow below step
    [id]:"121",
    email:"aman12@google.com",
    location:"mohali",
    isLogedIn:false,
    lastLoginDates:["monday","sunday"]

}
// console.log(myObj); //=> all value inside object gets displayed
// console.log(myObj.name); //=> use for get a specific value of object
// console.log(myObj["age"]); // it another way that use to get a specific value

// if we want to update value of a key inside object

// myObj.email="aman78@microsoft.com";
// console.log(myObj.email);

// freeze() use to freeze the value inside object. In this sitution we can't update the values

// Object.freeze(myObj);
// console.log(myObj);
// myObj.age=20;
// console.log("not updated",myObj);

// Access symbol type values

// console.log(myObj.id); //=> 121
// console.log(typeof myObj.id); //=> So, here id is treated as string not like a symbol

// To access like a symbol we have to follow these step

// console.log(myObj[id]); //=> it accessed like a symbol
// console.log(myObj); //=> now, we can clearly see the id is called symbol in output of this line=> [Symbol(121)]: '121'

// function inside object

myObj.greeting=function(){
    console.log("Namaste India");
}

// console.log(myObj.greeting()); //=> here, we got output like this
/*
Namaste India
undefined => the undefined is displayed because the function inside greeting variable isn't defined anywhere in code
*/

// console.log(myObj); //=> here, we got output like this
/*
Namaste India
undefined
{
  name: 'Aman',
  age: 19,
  email: 'aman12@google.com',
  location: 'mohali',
  isLogedIn: false,
  catch: null,
  lastLoginDates: [ 'monday', 'sunday' ],
  greeting: [Function (anonymous)],
  [Symbol(121)]: '121'
}
*/
// console.log(myObj.greeting); //=> [Function (anonymous)] => called, function return back

// myObj.greetingTwo=function(){
//     console.log(`Hello ${myObj.name}`);
//     // console.log(`Hello ${this.name}`); //=> we can also use this keyword here

// }
// console.log(myObj.greetingTwo()); //=> Hello Aman and undefined




