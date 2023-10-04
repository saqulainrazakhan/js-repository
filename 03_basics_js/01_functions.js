function fun() {
    console.log(1 + 2)
    console.log(1 + 2)
    console.log(1 + 2)
    console.log(1 + 2)
}
// fun();

// function addTwoNums(num1, num2) {
//     console.log(num1 + num2)
// }
// addTwoNums(5,7)


function addTwoNums(num1, num2) {
        //  let result = num1 + num2
        //  return result
        return num1 + num2
         console.log('Saqulain'); // no line of code after return keyword is executed in the current block
    }
   const result = addTwoNums(5,7)
//    console.log('Result:', result);

function loginUserMsg(username = 'Harry') {
    if(username === undefined) {
        console.log('Please enter a username');
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg());


function calculateCartPrice(val1, val2, ...num1) {
    return [ val1, val2, num1]
}
// console.log(calculateCartPrice(2,5,9));

const user = {
    username: "Saqulain",
    price: 299
}
function handleObj(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
} 

// handleObj(user) OR
// handleObj({
//     username: "Khan",
//     price: 599
// })


const myArr = [100, 200, 600, 700, 400]

function returnSecondVal(arr) {
    return arr[1]
}

// console.log(returnSecondVal(myArr)); OR
// console.log(returnSecondVal([800,340, 200,100]))