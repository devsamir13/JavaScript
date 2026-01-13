const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( function (acc, currVal) {
//     console.log( `Acc: ${acc} and Curval: ${currVal}`);
//     return acc + currVal    
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "Mobile dev course",
        price : 5999
    },
    {
        itemName : "Data Science course",
        price : 5999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);