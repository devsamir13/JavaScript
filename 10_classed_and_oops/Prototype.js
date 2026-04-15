// let myName = "Samir     "
// let myLast = "Ansari     "

// console.log(myName.trueLength);

let myHeros = ["thor", "Spiderman"]


let heroPower = {
    thor: "hammer",
    Spiderman: "Sling",

    getSpidermanPower: function () {
        console.log(`Spidy power${this.Spiderman}`);
    }
}

Object.prototype.samir = function () {
    console.log(`Samir is present in all objects`);
}

Array.prototype.heysamir = function () {
    console.log(`Samir says hello`);
}


// heroPower.samir()
// myHeros.samir()

// myHeros.samir()
// myHeros.heysamir()
// heroPower.heysamir()

// inheritance

const user ={
    name:"Chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime: true,
    __proto__ : TeacherSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "Samir Ansari    "

String.prototype.trueLenght = function() {
    console.log(`${this}`);
    console.log(`true lenght is : ${this.trim().length}`);
}

anotherUsername.trueLenght()
"Samir".trueLenght()
"iceTea".trueLenght()