var temp=18;

if(temp<15){
    console.log("It's very cold outside");
}
else{
    console.log("It's normal weather ouside");
}

// Allow user to access the application if is he login from 
// google
// facebook
// email

var email=true;
var google=false;
var facebook=false;

if(email || google || facebook){

    console.log("Loging succeed");
}
else{
    console.log("Loging failed");
}

// Show user a signout button if he is authenticated
// Other wise show him login/Signup option 

var authenticated=true;

if(authenticated){
    console.log("Show signout button");
}
else{
    console.log("Show login option");
}

// By using ternary operator

authenticated ? console.log("Show signout button") : console.log("Show login option");