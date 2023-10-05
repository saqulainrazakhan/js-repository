
const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'green') {
           
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'magenta') {
           
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'grey') {
           
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'teal') {
           
            body.style.backgroundColor = e.target.id;
        }
    })
})