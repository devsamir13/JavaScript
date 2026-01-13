const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10 ) // using map method

// const newNums = []

// myNumbers.forEach( (nums) => { // using forEach loop
//     newNums.push(nums+10)
// })

// console.log(newNums);

const newNums = myNumbers
                .map( (num) => num*10 ) // chaining :- we use mutliple method and its called chaining
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 );
                
console.log(newNums);
