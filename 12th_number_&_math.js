const score=100;
// console.log(score);

const balance=new Number(400);
// console.log(balance);

// Prototype(inbuit function) of Number

const temp=score.toString() //=> convert number to string using => ("toString()")
// console.log(temp);
// console.log(typeof temp);

// console.log(score.toFixed(2)); //=> 100.00

const pointValue=19.636;
//=> "toPrecision()" used to take limited digit from input
// console.log(pointValue.toPrecision(2)); //=> 20

const accountBudget=1000000000;
//=> use for formating =>10,00,00,000
// console.log(accountBudget.toLocaleString());  // by default it is follow us standards
// console.log(accountBudget.toLocaleString('en-IN'));


//----------++++++++++------------+++++++ <Math> +++++++++++++++++++------------------------+++++++++++++++++++++-----------------------++++++++++++++++++++++-------------------+++++++++++++++++

const testValue=-4;

console.log(Math.abs(testValue)); //=> convert only '-ve' value into '+ve'
console.log(Math.round(4.6)); //=> return the round up values
console.log(Math.ceil(4.1)); //=> return round value in max => '5'
console.log(Math.floor(4.9)); //=> return round value in min => '4'
console.log(Math.min(7,6,3,9,1)); //=> return least value from given list
console.log(Math.max(2,1,4,8,5,6,9,3)); //=> return most value from given list
console.log(Math.random()); //=> by,default it return the random value in the range b/w'0-1'
console.log((Math.random()*10)+1); //=> now, return value in the range b/w '1-10'
