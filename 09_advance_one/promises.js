const promisesOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    },1000)
})

promisesOne.then(() => {
    console.log('Promise consumed');
    
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async call 2');
        resolve()
    },1000)
}).then(function(){
        console.log("Async 2 resolved"); 
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: "Samir", email: "example@gmail.com"})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user);    
})


const promisesFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false 
        if(!error){
            resolve({username: "Hitesh", password: "123"})
        }else{
            reject('ERROR:Somthing went wrong')
        }
    }, 1000)
})

promisesFour.then(function (user) {
    console.log(user);
    return user.username
}).then((username) => {
   console.log(username);
}).catch((error) => {
    console.log(error);
}).finally( () => {
    console.log("Promise is either resolved or rejected");
});

const promisesFive = new Promise(function(resolve, reject){
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username: 'JavaScript', Password: "123"})
        }else{
            reject('ERROE: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promisesFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//       atch (error) {
//          console.log(data);
//     } c console.log("E:", error);
//     }
// }

// getAllUsers()

fetch ('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then( (data)=>{
    console.log(data);
})
.catch((error) => {
    console.log(error);
});