let name="SitaRam";
let secondName="  Shree Krishna  ";

// Declear a string using New keyword
const primeMinister=new String('Narendra Modi');
console.log(typeof primeMinister);
console.log(primeMinister);

// console.log(``) => console log with backticks is called => "String Interpolation"
console.log(`first name of peace:${name} and second name of peace:${secondName}`);
// ${} => Place holder use to inject variable

// string in-built functions
console.log(name.length); //give length of string

console.log(name.toUpperCase()); //convert into uppercase

console.log(name.toLowerCase()); //convert into lowercase

console.log(name.indexOf('t')); //give place where character are present

console.log(name.charAt(4)); //give the character which is present at loc '4'

console.log(name.substring(0,4)); //give character from 0 to 3

console.log(name.slice(-6,4)); //give value from reverse

console.log(secondName); //use "trim()" method 
console.log(secondName.trim()); //remove extra white space from left and right

let url="https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log(url.replace('=','*')); //replace at one place
console.log(url.replaceAll('=','*')); //replace at all places
console.log(url.includes('youte')); //find the string is present or not


