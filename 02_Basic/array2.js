const marvel_heros = ["thor", "iron man", "spiderman"];
const dc_heros = ["batman", "superman", "flash"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3] [1]);

// const all_heros = marvel_heros.concat(dc_heros); // concat use for merge to array & return a new array
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros]; // same work like concat
// console.log(all_new_heros);

const another_arr = [1, 2, 3,[1, 5, 3], 8, [15, 7,[4, 6]]];
const real_another_arr = another_arr.flat(Infinity); // flat make multiple nested array in one array
console.log(real_another_arr);


console.log(Array.isArray("Samir")); // check the element is array or not
console.log(Array.from("Samir")); // from use to convert element in aaray
console.log(Array.from({name: "Samir"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.
