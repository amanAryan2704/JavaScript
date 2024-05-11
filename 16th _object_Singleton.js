// Singleton object, the object that is created using new keyword called singleton object.

const tinderUser=new Object(); //=> singleton object
// const tinderUser={} //=> both are worked same
console.log(tinderUser); //=> empty object

// put value inside the object

tinderUser.name="Raj"
tinderUser.age=18
tinderUser.gender="M"
tinderUser.activeStatus=true
tinderUser.activeStatusRecord=["monday","wednesday","saturday"]

// console.log(tinderUser);

// ways to declear object inside object

const userDetails=new Object();
userDetails.email="aman@apple.com";
userDetails.fullName={firstname:"Aman",lastName:"kumar"};
// console.log(userDetails);
// console.log(userDetails.fullName.firstname);

// Another ways to declear object inside object

const newserDetails={
    email:"aman@apple.com",
    userName:{
        fullName:{
            firstName:"Aman",
            lastName:"Kumar",
        }

    },
    age:19
}

// console.log(newserDetails);
// console.log(newserDetails.userName); //=> Access whole object at once
// console.log((newserDetails.userName.fullName).firstName); //=> Aman

// Marge Objects

// const allUserDetails={userDetails,newserDetails};
// console.log(allUserDetails);

// const allUserDetails=Object.assign(userDetails,newserDetails)
// console.log(allUserDetails);

const allUserDetails=Object.assign({},userDetails,newserDetails)
console.log(allUserDetails);

// Using spread operator

// const allUserDetails={...userDetails,...newserDetails};
// console.log(allUserDetails);



