// var c = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    // console.log('INNER', a)
   
}

// console.log(a);
// console.log(b); // // reference error, b is not defined
// console.log(c); // 30 

// nested scope

function one() {
    const username = 'Saqulain'

    function two() {
        const website = 'shopway'
        // console.log(username);
    }
    // console.log(website)

    two()
}

one()


if(true) {
    const username = "Saqulain"
    if(username === "Saqulain") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ************************** INTERESTING ***************************

console.log(addone(6))
function addone(num) {
    return num + 1
}

console.log(addTwo(8));
const addTwo = function(num) {
    return num + 2
}
