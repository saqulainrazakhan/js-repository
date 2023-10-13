// const fun = () => {
//     console.log('Saqulain');
// }

// const changeText = () => {
//     document.querySelector('h1').innerHTML = 'Best JS Series'
// }

// const stopMe = setTimeout(changeText, 2000)

// document.querySelector('#stop').addEventListener('click', ()=> {
//     clearTimeout(stopMe)
//     console.log('STOPPED');
// })

const sayDate = (str) => {
    console.log(str, Date.now());
}


 let startInterval;
 document.querySelector('#start').addEventListener('click', ()=>{
    startInterval = setInterval(sayDate, 1000, 'Saqulain')
 }) 


 document.querySelector('#stop').addEventListener('click', ()=> {
    clearInterval(startInterval)
    startInterval = null
 })

 