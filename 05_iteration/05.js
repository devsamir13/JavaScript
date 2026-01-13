// foreach loop  

const coding = ["js", "ruby", "python", "java", "c++"];

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printME(val) {
//     console.log(val);
// }

// coding.forEach(printME)

// coding.forEach( (item, index, arr) => { // it also takes item, index and array access
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        LanguageName: "JavaScript",
        FileName: "js"
    },
    {
        LanguageName: "Java",
        FileName: "java"
    },
    {
        LanguageName: "Python",
        FileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.FileName);
})