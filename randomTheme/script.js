

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color;
}

let startChange;
const startchangingColor = () => {
    if (!startChange) {
        startChange = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000)
    }
}



const stopchangingColor = () => {
 if(startChange) {
    clearInterval(startChange)
    startChange = null
 }
}

document.querySelector('#start').addEventListener('click', startchangingColor)

document.querySelector('#stop').addEventListener('click', stopchangingColor)


