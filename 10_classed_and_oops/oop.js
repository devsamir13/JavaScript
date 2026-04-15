const user ={
    username: "Samir",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); 

function User(username, loginCount, islogedIn) {
    this.username = username
    this.loginCount = loginCount
    this.islogedIn = islogedIn

    return this
}

const userOne = new User("Samir", 5, true);
const userTwo = new User("Chai", 6, false)

console.log(userOne);
console.log(userTwo);