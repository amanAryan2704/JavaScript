// Create an application with following roles:
// admin - gets full access
// sub-admin - gets access to create/delete courses 
// testprep - gets access to create/delete tests
// user - gets access to consume the content

var user="testprep";

switch (user) {
    case "admin":
        console.log("gets full access");
        break;
    
    case "sub-admin":
        console.log("gets access to create/delete courses");
        break;
    
    case "testprep":
        console.log("gets access to create/delete courses test");
        break;

    case "user":
        console.log("gets access to consume the content");
        break;
                   

    default:
        console.log("Trail User");
        break;
}


