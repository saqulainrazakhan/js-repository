const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach(ele => { // it takes callback function which has no name actually as callback which call the function for each iteration
//     console.log(ele);
// });


// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe) // giving the reference of printMe function and the function is printing the value

// coding.forEach((item, index, arr) => { // it generally takes three parameters which is as follows value, index and whole array
//     console.log(item, index, arr);
// });

const myCode = [
    {
        myLang: 'Javascript',
        langFileName: 'js'
    },
    {
        myLang: 'python',
        langFileName: 'py'
    },
    {
        myLang: 'Java',
        langFileName: 'java'
    }
]

myCode.forEach((item) =>{
    console.log(item.myLang);
})