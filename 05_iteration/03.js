// forof loop = forof loop iterates over an iterable object like array, string, map, set

// ["", "", ""]
// [{}, {}, {}]

const arr = [10, 20, 30, 40, 50];

for (const num of arr) { // forof loop iterates over an iterable object like array, string, map, set
    // console.log(num);
}

const greeting = "Hello World"; // forof loop also works on string
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map() // map is a object & collection of key value pairs, not support duplicate keys
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')

// console.log(map);


for (const [key, value] of map) {  //  this is use to print key and value both
    // console.log(key, ":-", value);
}

const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
}

for (const [key, value] of myObject) {  // this will give error because myObject is not iterable
    // console.log(key, ":-", value);
}

