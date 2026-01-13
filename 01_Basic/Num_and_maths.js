const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
 
// console.log(balance.toString().length); // convert num to string and find lenth of string
// console.log(balance.toFixed(2)); // display maximum 2 value after decimal 

const otherNumber = 1123.8966;
// console.log(otherNumber.toPrecision(4)); // round of the value

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // define number standard according region


// ******************** Math ********************

// console.log(Math);
// console.log(Math.abs(-4)); // absolute value covert negative value to positive value
// console.log(Math.round(4.6)); // round of the value
// console.log(Math.ceil(4.3)); // take uppar value in round off
// console.log(Math.floor(4.9)); // take lower value in round off
// console.log(Math.min(5, 4, 8, 9, 3)); // find minimum value
// console.log(Math.max(5, 4, 8, 9, 3)); // find maximum value

console.log(Math.random());
console.log((Math.random() * 10)+1);
console.log(Math.floor(Math.random() * 10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
 





