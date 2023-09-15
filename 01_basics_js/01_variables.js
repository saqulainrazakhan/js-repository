const accountId = 144553
let accountEmail = "saqulainkhan650@gmail.com"
var accountPassword = '12345'
accountCity = "Jaipur"

// accountId = 2 // not allowed
let accountState;
accountEmail = "hc@hc.com"
accountPassword = "2345322"
accountCity = "Bengaluru"
console.log(accountId);

/* 
Prefer not to use var because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])