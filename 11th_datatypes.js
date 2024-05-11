// Primitive also called (call by value):
    // 7types: Number, String, Boolean, null, undefined, Symbol, BigInt
    // Primitive datatypes store in stack memory => give copy

    let a=18999;
    let b="18999"
    let id=Symbol('123'); //=> Symbol is datatype that store value in the form of object.
    console.log(typeof id); //=> object
    let id_2=Symbol('123');
    console.log(typeof id_2);
    console.log(id===id_2);
    console.log(a==b); //=> true because the value inside both variable is same
    let bigNumber=12346567788998809n; //=> Here, 'n' use to represent the BigInt
    console.log(bigNumber);
    console.log(typeof bigNumber);

// Reference (non-primitive):
    // Array, Objects, Functions
    // non-primitive datatypes store in heap memory => give reference

    let superHero=["Shaktiman","Mr.India","Balveer","Ironman"];
    console.log(typeof superHero); //=> Object
    console.log(superHero);

    let myObject={ //=> Ways to create an object
         name:"Aman",
         age:18,
         gender:"M"
    }    
    console.log(myObject);
    console.log(typeof myObject);

    let greet=function(){
        console.log("Namaste India");
    }