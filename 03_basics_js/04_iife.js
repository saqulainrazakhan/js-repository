// IIFE (Immediately invoked function expression) 
// It is used to avoid disruption by globally declared variable  or polluted by globally declared variable

(function foo(){ 
    // It is named IIFE
    console.log('DB Connected');
})();

( (name) => {
    console.log(`Second DB Connected, ${name}`)
})('Saqulain')