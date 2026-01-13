// var c = 300;

let a = 400;

if (true) {
  let a = 10;
  const b = 20;
//   console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Samir"

    function two() {
        const website = "Youtube"
        console.log(username);       
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
  const username = "Samir"
  if (username === "Samir") {
    const website = " Youtube"
    // console.log(username + website);
  }
  // console.log(website);
  
}

// console.log(username);

console.log(addone(5))
function addone(num) {
  return num + 1
}


addTwo(5)
const addTwo = function (num) {
  return num + 2 
}

