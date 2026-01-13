// const userEmail = "Samir.ai"

// if (userEmail) {
//     console.log("Got user Email");
// }
// else{
//     console.log("Don't have user email");
// }

// const userEmail = ""

// if (userEmail) {
//     console.log("Got user Email");
// }
// else{
//     console.log("Don't have user email");
// }

const userEmail = []

if (userEmail) {
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10 // ?? use for handle dual, null or undefind value
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20  // ?? this always takes first value after and before null value

console.log(val1);

// Ternary Operator

// condition ? true Statement : false Statement

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


