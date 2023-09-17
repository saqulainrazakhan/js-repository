// Primitive data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

const bigNum = 354367899765099484n // bigInt


// Reference (Non primitive)

// Array, Objects, Functions

const array = ['car', 'cycle', 'tram'];

let object = {
    name: 'Saqulain',
    gender: 'male',
}

const myFunc = function() {
    console.log("Hello World!");
}

// console.log(typeof bigNum);

// *******************************************************************************

// Types of memory 
// Stack memory (Primitive), Heap memory (Non-Primitive)

let myYoutubename = 'web talk'
let anotherName = myYoutubename
anotherName = 'something'

// console.log(myYoutubename);
// console.log(anotherName);

let user = {
email: 'something@gmail.com',
upi: "user@paytm"
}

let userTwo = user

userTwo.email = 'saqulain123@gmail.com'

console.log(user.email);
console.log(userTwo.email);