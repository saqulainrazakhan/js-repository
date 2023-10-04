

const user = {
    username: "Saqulain",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.username}, welcome to my website`);
        // console.log(this);
    }
}

// user.welcomeMsg()
// console.log(this) // it gives empty object in node environment

// function tea() {
//     console.log(this)
// }
// tea()

// const tea =  function () {
        // console.log(this)
//     }
//     tea()


// Arrow function
// const tea = () => {
//     console.log(this);
// }
// tea()

const addTwo = (num1, num2) => {
   return num1 + num2
}
// console.log(addTwo(7,6));

// const addNum = (num1, num2) => num1 + num2
// console.log(addNum(6,4));

// const addNum = (num1, num2) => (num1 + num2) // here do not require return keyword but in curly braces it is required
// console.log(addNum(2,3));

const task = (num1, num2) => ({usernamw: "Saqulain"}) // object requires parenthesis to be wrapped
// console.log(task(2,3))

