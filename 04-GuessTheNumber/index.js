let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sub')
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultPara');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;
let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

const validateGuess = (guess) => {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number more than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 9) {
            displayGuess(guess)
            
            displayMsg(`Game over! Random number was ${randomNum}`)
            
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) => {
    if (guess === randomNum) {
        displayMsg(`You won!`)
        endGame()
    }
    else if(guess > randomNum) {
        displayMsg(`Number is too high.`)
    }
    else if(guess < randomNum) {
        displayMsg(`Number is too low.`)
    }
}

const displayGuess = (guess) => {
userInput.value = '';

guessSlot.innerHTML += `${guess}, `;
numGuess++;
lastResult.innerHTML = `${10 - numGuess}`;
}

const displayMsg = (msg) => {
lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

const endGame = () => {

   userInput.value = '';
   userInput.setAttribute('disabled', '')
   p.classList.add('button')
   p.innerHTML = `<button id = "newGame">Start new Game</button>`;
   startOver.appendChild(p)
   playGame = false
   startGame();
}

const startGame = () => {
const newButton = document.querySelector('#newGame')
Object.assign(newButton.style,{backgroundColor: '#007BFF', color: '#fff', borderRadius: '5px', padding: '10px 20px', fontSize: '18px', cursor: 'pointer', transition: 'background 0.3s', border: 'none'})

newButton.addEventListener('click', (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 0
    lastResult.innerHTML = `${10 - numGuess}`
    guessSlot.innerHTML = '';
    lowOrHi.innerHTML = '';
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
})

}




