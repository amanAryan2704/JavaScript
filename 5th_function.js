// Create a funtion and call it
// to create a function in javascript we used "function" keyword

// function sayHello(name) { 
//     console.log(`hello,${name} here`);
//     console.log("All,you are good");
// }

// sayHello("Aman");
// sayHello("Rakesh");

// function namstey(){
//     return "hello in india";
// }

// var greetings=namstey()
// console.log(greetings);
// console.log(namstey());

function roleOfUsers(name,role){
    switch (role) {
        case "admin":
            return `${name} is Admin with all access`;
            break;
        
        case "sub-admin":
            return `${name} is Sub-admin with access of create and delete a course`;
            break;
        
        case "testprep":
            return `${name} is Testprep with access of create and delete tests `;
            break;
    
        case "user":
            return `${name} is User with access of consume the content`;
            break;
                       
    
        default:
            // console.log(`${name} is trail user`);
            return `${name} is Trail user with no access`;
            break;
    }
}

var accessDetails=roleOfUsers("Aman","admin");
console.log(accessDetails);

// Note- When the function doesn't  return anything then in that case it will give undefined.
// For better understanding go to line no.40 and make the statement not comment and make comment line no.41. 