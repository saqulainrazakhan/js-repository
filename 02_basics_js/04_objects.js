// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = '579abc'
tinderUser.name = 'Saqulain'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUSer = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'Saqulain',
            lastname: 'Khan'
        }
    }
}

// console.log(regularUSer.fullname.userfullname.firstname);


const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {5: 'e', 6: 'f'}

// const obj = {obj1, obj2, obj3}
const obj = Object.assign({}, obj1, obj2, obj3) // it copies the nested object and put it into one target object

// Alternate of Object.assign() and most preferable way to do it
const obj4 = {...obj1, ...obj2, ...obj3}// spreading the objects
// console.log(obj4);


const users = [
    {
        id: 1,
        email: 'saqu@gmail.com'
    },
    {
        id: 2,
        email: 'saqu@gmail.com'
    },
    {
        id: 3,
        email: 'saqu@gmail.com'
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // getting all the keys of tinderUser in an array
// console.log(Object.values(tinderUser));// getting all the values of tinderUser in an array
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// to check if the key is present or not, it will return boolean value

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Saqulain Raza Khan"
}

// course.courseInstructor// "Saqulain Raza Khan"

const {courseInstructor} = course // it is actually called destructuring

console.log(courseInstructor);
         //OR
 const {courseInstructor: instructor} = course 

 console.log(instructor);

// JSON
 {
    "name": "saqulain",
    "course": "JS in Hindi",
    "price": "free"
 }