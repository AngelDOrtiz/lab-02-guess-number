// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const guesses = document.getElementById('guesses');
const retryButton = document.getElementById('retry');



// initialize state
let remainingGuesses = 3;
let correctNumber = 10;
// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    let userGuesses = Number(userGuess.value);
    const results = compareNumbers(userGuesses, correctNumber);
    console.log(results);
    if (results === -1) {
        alert('Too Low!');
        remainingGuesses--;
    }

    if (results === 1) {
        alert('Too High!');
        remainingGuesses--;
    }

    if (results === 0) {
        alert('YOU WIN');
        retryButton.classList.remove('retry');
        retryButton.textContent = 'Play Again';
    }

    guesses.textContent = remainingGuesses;

    if (remainingGuesses === 0) {
        alert('I guess you lose :^)');
        retryButton.classList.remove('retry');
    }
});

retryButton.addEventListener('click', () => {
    location.reload();
});
