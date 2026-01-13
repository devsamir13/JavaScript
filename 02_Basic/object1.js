// singleton
// object.create

// object literals
const mySym = Symbol("key1");
const JSuser = {
    name: "Samir",
    "full name": "Samir Ansari",
    age: 18,
    [mySym]: "mykey1",
    location: "Lucknow",
    email: "samir@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Friday"],
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);

JSuser.email = "samir@chatgpt.com";
// Object.freeze(JSuser);
JSuser.email = "samir@microsoft.com";
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello Js user");
}

JSuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());