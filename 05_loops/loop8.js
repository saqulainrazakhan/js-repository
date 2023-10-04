const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce((acc, currVal) => {
    console.log(`accumulator: ${acc} and current value: ${currVal}`);
    return acc + currVal
},0)

console.log(myTotal);

const shoppingCart = [
    {
        item: 'js course',
        price: 2999
    },
    {
        item: 'py course',
        price: 1999
    },
     {
        item: 'mobile dev course',
        price: 4999
    },
     {
        item: 'data science course',
        price: 12999
    }
]

const priceToPay =  shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)
console.log(priceToPay);
