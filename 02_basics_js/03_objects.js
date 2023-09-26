// singleton
// Object.create

// object literals

const mySymbol = Symbol('key1') // interview perspective symbol question


const user = {
    name: 'Saqulain',
    'full name': 'Saqulain Raza Khan',
    [mySymbol]: 'mykey1',
    age: '23',
    location: 'Darbhanga',
    email: 'saqulain@yahoo.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Tuesday']
}

// console.log(user.email);
// console.log(user['email']);
// console.log(user['full name'] );
// console.log( user[mySymbol]);

user.email = "saqulain@google.com" // you can update key's value in this manner
// Object.freeze(user) // It will not let you further to update any value
user.location = 'Delhi'
console.log(user);

user.greeting = function() {
    console.log("Hello JS user");
}

user.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());