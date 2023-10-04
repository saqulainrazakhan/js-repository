// for loop
// const array = [1,2,3,4,5]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and outer loop ${i}`);
//         console.log(`${i} * ${j} = ${i * j}`);
        
//     }
    
// }

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log('5 Detected');
//         break // it terminates the loop
//     }
//     console.log(`Value of index is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log('5 Detected');
        continue // it simply just skip the conditioned iteration 
    }
    console.log(`Value of index is ${index}`);
}