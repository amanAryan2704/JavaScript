// Falsy value in js:
// 1.'0'
// 2. " "
// 3. null
// 4. undefined
// 5. NaN

// These all above values are not excuted under if condition,because if, block only executed when the condition is true

var a=0;
if(a){
    console.log(a);
}

var name="ram ji";
if(name){
    console.log(name);
}

var age=null;
if(age){
    console.log(age);
}

var gender;
if(gender){
    console.log(gender);
}