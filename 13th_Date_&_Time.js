/* Date is a objects in javaScript that represent a single moment in time in a plateform 
independent format. */


let myDate=new Date();
console.log(myDate);
console.log(myDate.toString()); //=> Sun Aug 27 2023 01:20:46 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //=> Sun Aug 27 2023
console.log(myDate.toJSON()); //=> 2023-08-26T19:50:46.171Z
console.log(myDate.toISOString()); //=> 2023-08-26T19:50:46.171Z
console.log(myDate.toLocaleString()); //=> 27/8/2023, 1:20:46 am
console.log(myDate.toLocaleDateString()); //=> 27/8/2023
console.log(myDate.toLocaleTimeString()); //=> 1:20:46 am
console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,12); //=> '0' represents January
// console.log(myCreatedDate.toDateString()); //=> Thu Jan 12 2023
// let myNewCreatedDate=new Date(2023,0,16,5,5); //=> '5,5' represent time & minutes.
// console.log(myCreatedDate.toLocaleString()); //=> 12/1/2023, 12:00:00 am
// console.log(Date("2023-08-27")); //=>Sun Aug 27 2023 02:06:58 GMT+0530 (India Standard Time)
// let myNewCreatedDate=new Date("2023-01-27")
// console.log(myNewCreatedDate.toString()); //=> Fri Jan 27 2023 05:30:00 GMT+0530 (India Standard Time)
// console.log(myNewCreatedDate.toLocaleString()); //=> 27/1/2023, 5:30:00 am
let myNewCreatedDate=new Date("08-15-2023")
console.log(myNewCreatedDate.toString()); //=> Tue Aug 15 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(myNewCreatedDate.toLocaleString()); //=> 15/8/2023, 12:00:00 am

