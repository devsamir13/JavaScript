// forin loop is used to iterate over the properties of an object

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift'
}

for (const key in myObject) { //forin loop iterates over an object
   console.log(key, ":", myObject[key]);
   
}

const programming = ["js", "cpp", "rb", "swift"];

for (const key in programming) {
    console.log(programming[key]);
    
}

// const map = new Map() // map is a object & collection of key value pairs, not support duplicate keys
// map.set('IN', 'India')
// map.set('USA', 'United States of America')
// map.set('Fr', 'France')
// map.set('IN', 'India')

// for (const key in map) { // map is not iterable using forin loop
//     console.log(key);
// }