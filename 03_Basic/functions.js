function SayMyName() {
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("R");
}

// SayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5);

// console.log("Result:", result);

function  loginUserMessage(username = "sam"){
    // if (username == undefined) 
    // if (!username) 
    //     {
    //     console.log("Please enter your user name");
    //     return
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Samir"))
// console.log(loginUserMessage())
// console.log(loginUserMessage("Samir"))


function claculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(claculateCartPrice(200,300,400,500));

const user = {
    username: "Samir",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 800, 600]));
