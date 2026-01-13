// const tinderuser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUSer = {
    email: "sam@gmail.com",
    fullname: {
        username: {
            firstname: "Samir",
            lastname: "Ansari"
        }
    }
}

// console.log(regularUSer.fullname.username.firstname);
 
const obj1 = {1: "a", 2:"b"};
const obj2 = {3: "a", 4:"b"};
const obj3 = {5: "a", 6:"b"};

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3); // use to add/merge obbjects 
const obj4 = {...obj1, ...obj2, ...obj3} // use to add/merge obbjects 

// console.log(obj4);

const users = [
    {
        id: "1",
    },
    {
        id:"1",
    },
    {
        id: "1",
    }
]

users[1].id;

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// ********** object de-stucture and APIs **********

const course = {
    courseName: "Js in hindi",
    coursePrice: "999",
    courseInstucture: "Hitesh",
}

// console.log(course.courseInstucture);

const {courseInstucture : Instucture} = course; // object de-structure
// console.log(courseInstucture);
console.log(Instucture);

// {
//     "name" : "samir",
//     "course" : "Js in hindi",
//     "price" : "free"
// }

[
    {}
    {}
    {}
]