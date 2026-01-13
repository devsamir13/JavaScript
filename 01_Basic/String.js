const name = "Samir";
const repoCount= 0;

// console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Samir-Ansari') // object

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length); // Stirng lenght
// console.log(gameName.toUpperCase()); // Convert into uppercase
// console.log(gameName.charAt(2)); // find char by index
// console.log(gameName.indexOf("m")); // find char index

const newString = gameName.substring(0,4);
console.log(newString);

const anothString = gameName.slice(-6,4);
console.log(anothString); 

const newStringOne = "    Samir Ansari    ";
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "http//samir.com/samir%13ansari";
console.log(url.replace('%13',' - '));
console.log(url.includes('%13'));

console.log(gameName.split('-'));


