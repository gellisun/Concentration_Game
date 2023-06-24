// Constants
// An array of colors or images
// A constant for randomly selecting colors or images
const COLORS = ['black', 'blue', 'fuchsia', 'lime', 'olive', 'purple', 'red', 'teal', 'yellow', 'green'];


// State of the game
let totalCards;
let gameHasStarted;
let cardsFlipped;
let timer;
let timeLeft;
let winner;


// Cached elements
const boardEl = document.getElementById('board');
const btnEl = document.getElementById('button');
const timerEl = document.getElementById('clock');
const msgEl = document.getElementById('message');


// Event Listeners
document.addEventListener('DOMContentLoaded', init);
boardEl.addEventListener('click', handleMove);
btnEl.addEventListener('click', handleBtnClick);


// Functions:
// Generate the cards and display them in default five rows, three columns.
// Append them to the containing element in a random position —-> will leave as an alternative to create a container with 20 divs in the html

function init() {
    // Board with array of cards without values
    // Set if the game has started with flipping action or start button
    // Number of cards flipped (only two can be flipped at a time) to 0
    // Timer or Moves to 0
    totalCards = 20;
    gameHasStarted = false;
    cardsFlipped = 0;
    timer = 0;
    timeLeft = 2*60;
    winner = null;
    createBoard(boardEl);
    render();
}

function createBoard(boardEl) {
    for (let i = 0; i < totalCards; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        boardEl.appendChild(card);
    }
}

function gameOver(){
    cancelInterval(timer);
    btnEl.hidden = false;
}

function updateTimer() {
    timeLeft = timeLeft -1;
    if (timeLeft >=0) {
        timerEl.innerHTML = timeLeft;
    }
    else {
        gameOver();
    }
}

function renderTimer() {
    console.log('renderTimer')
    timer = setInterval(updateTimer, 1000);
    updateTimer();
    btnEl.hidden = true;
}

function render() {

}

// Player interacts…

function handleBtnClick () {
    renderTimer();
}
// Click function:
function handleMove(e) {
    const cardsFlipped = boardEl.querySelectorAll('.card.active').length;
    //guard
    if (! e.target.classList.contains('card')) {
        console.log('not a card')
        return;
    };
    // Player can click up to two cards
    // Add class of active to the first card clicked
    // Add class of active to the second card
    // Stop ability of the player to click on any other card
    if (cardsFlipped < 2) {
        e.target.classList.add('active');
    }
    // Stop ability of the player to click on any other card
    if (cardsFlipped === 2) return;
    // If the cards have different values

    // show the color or image of the clicked cards for two seconds and then hide them
    // Remove the active class
    // Allow the ability of the player to click on the same cards again, and the other cards in the board
    // If the cards values match both cards disappear
    render();
}

// Check the game status:
// While the timer is not 0/or the turns are not maxed out and the are not 10 pairs of cards with active class, keep letting the player click on boxes
// Else, well done, the game is finished!


// Restart
// By clicking on play button the board of cards resets, the timer resets