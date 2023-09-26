// Dates

let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date)

// let myCreatedDate = new Date(2023, 0, 24)// to get the adject year month and date
// let myCreatedDate = new Date(2023, 0, 23, 5, 4)
// let myCreatedDate = new Date('2023-01-14')
let myCreatedDate = new Date('01-14-2023')
// console.log(myCreatedDate.toLocaleString());// it will also give time with the date

let timeStamp = Date.now()

// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate);