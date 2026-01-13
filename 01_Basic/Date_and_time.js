// ******************* Date *******************

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 23);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025, 0, 23, 5, 3);
// let myCreatedDate = new Date("2025-01-04");
let myCreatedDate = new Date("01-14-2025");
// console.log(myCreatedDate.toLocaleString());

let mytimeStamp = Date.now();

// console.log(mytimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('Default',{
    weekday : "long",
})

