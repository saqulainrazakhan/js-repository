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

console.log(typeof bigNum);