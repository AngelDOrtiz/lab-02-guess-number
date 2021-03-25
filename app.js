// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const guesses = document.getElementById('guesses');
const retryButton = document.getElementById('retry');



// initialize state
let remainingGuesses = 3;
let correctNumber = 0;
// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    let userGuesses = userGuess.value;
    const results = compareNumbers(userGuesses, correctNumber);
    
    if (results < correctNumber) {
        alert('Too Low!');
        remainingGuesses--;
    }

    if (results > correctNumber) {
        alert('Too High!');
        remainingGuesses--;
    }

    if (results === correctNumber) {
        alert('YOU WIN');
        retryButton.classList.remove('retry');
        retryButton.textContent = 'Play Again';
    }

    guesses.textContent = remainingGuesses;

    if (remainingGuesses === 0) {
        retryButton.classList.remove('retry');
    }
});

