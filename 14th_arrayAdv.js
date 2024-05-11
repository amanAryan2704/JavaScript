/* Array is a collection of elements of multiple or similar datatype.The size of Array 
is resizeable. */

const myArray=[1,2,3,4,5];
const myNewArray=new Array(1,2,3,4,5);
console.log(myNewArray[1]);

const marval_heros=["ironman","thor","spiderman"];
const dc_heros=["superman","flash","batman"]

// Array push() operation can put array inside array also
// console.log(marval_heros.push(dc_heros)); //=> give length of array=> 4
// console.log(marval_heros); //=> [ 'ironman', 'thor', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marval_heros[3][0]); //=> "superman"
// console.log(marval_heros.length); //=> 4

// Arary concat add two array and return a new array
// const myN1=marval_heros.concat(dc_heros);
// console.log(myN1); //=> [ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]


/* Spread Operator in Array You can use the spread operator to copy elements from one array into 
another or to create a new array by combining elements from multiple arrays. */

// spread donated as=> (...)
// console.log(...marval_heros, ...dc_heros); //=> ironman thor spiderman superman flash batman
// console.log([...marval_heros,...dc_heros]); //=> [ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]
// const myN2=[...marval_heros,...dc_heros]; 
// console.log(myN2); //=> [ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]


// flat() use to merge all sub-array together and return it as a single array
const useCaseArrayForFlat=[1,2,3,[4,5,6,1],[7,[8,9]]];
// console.log(useCaseArrayForFlat.flat(Infinity)); /*=> [
//     1, 2, 3, 4, 5,
//     6, 1, 7, 8, 9
//   ] */

//   here, Infinity inside flat denote the depth of useCaseArrayForFlat.

// isArray() use to check the given input is array or not

console.log(Array.isArray(useCaseArrayForFlat)); //=> true
const myName="Aman";
console.log(Array.isArray(myName)); //=> false

// from() use to covert value into array

console.log(Array.from(myName)); //=> [ 'A', 'm', 'a', 'n' ]
console.log(Array.from({name:"Aman"})); //=> research(why result is an empty array?)

// of() use to add all variable into an array

const msDhoniScore=173;
const viratKohliScore=121;
const ishanKishanScore=200;
const chrisGayleScore=183;
console.log(Array.of(msDhoniScore,viratKohliScore,ishanKishanScore,chrisGayleScore)); //=> [ 173, 121, 200, 183 ]