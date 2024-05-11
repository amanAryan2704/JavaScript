var accessDetails=function roleOfUsers(name,role){
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

// Now,at the time of calling we have to call it with the variable name follwed function arguments

var role=accessDetails("LoveBabar","admin")
console.log(role); 
console.log(accessDetails("Aman","user"));