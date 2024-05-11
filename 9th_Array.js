let myArray=[1,2,3,4,5,6];




console.log(myArray[3]); //=> value at index '3'
console.log(myArray); //=> print whole value of myArray

myArray.push(7); //=> insert value in array at last
console.log(myArray);

myArray.pop(7); //=> delete value from array at last
console.log(myArray);

myArray.unshift(9); //=> insert value at "0th" index  
console.log(myArray);

myArray.shift(); //=> delete value at from "0th" index
console.log(myArray);

console.log(myArray.includes(3)); //=> Use to match value of array

console.log(myArray.indexOf(5)); //=> tell the location where element  is present in array

console.log("A",myArray);
let myn2=myArray.slice(1,4); //=> print array from index 1 to 3 last one isn't included
console.log(myn2);
console.log(myArray);

console.log("B",myArray);
let myn3=myArray.splice(1,4); //=> delete the element from array of given range 
console.log(myn3);
console.log(myArray);
