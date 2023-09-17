const name = 'Saqulain'
const value = 60

// console.log(name + value + ' value');

// console.log(`Hello my name is ${name} and the value is ${value}`);

const gameName = new String('firewar')

// console.log(gameName[0]); // Accessing key's value as first char of string
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('w'));

const newString = gameName.substring(0,4) // gives the substring in the given range where last parameter is excluded
console.log(newString);

const anotherString = gameName.slice(1,6) // slice the string from given range and exclude the last parameter 
// console.log(anotherString);

const anotherStringOne = "    Saqulain    "
// console.log(anotherStringOne);
// console.log(anotherStringOne.trim()); // removes the white space from start and end  

const url = "https://saqulain.com/saqulain%30khan"
// console.log(url.replace('%30', '-'))

// console.log(url.includes('saqulaiu'));

// console.log(gameName.split('-')); // splits the character of string

