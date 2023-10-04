// if statement

// if(condition) {
//     // statement
// }

const isUserLoggedIn = true
const temperature = 41

if(temperature === 41) {
  console.log('Less than 50')
}
else {
    console.log('Temperature is greater than 50 ');
}

// <, >, <=, >=, ==, !=,!==, ===

// const score = 200

// if(score > 100) {
//   const power  = "fly"
//   console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`) // ReferenceError: power is not defined

// const balance = 1000

// if(balance > 500) console.log('test'), console.log('test1');// avoid it to do 

// if(balance < 500) {
// console.log('less than');
// } else if(balance < 750) {
//   console.log('less than 750');
// } else if(balance < 900) {
//   console.log('less than 900');
// } else {
//   console.log('less than 1200');
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
  console.log('Allow to buy products');
}

if(loggedInFromEmail || loggedInFromGoogle) console.log('User logged in');