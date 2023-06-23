// Constants
// An array of colors or images
// A constant for randomly selecting colors or images
const COLORS = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];


// State of the game
let gameHasStarted;
let cardsFlipped;
let timer;
let winner;


// Cached elements
const boardEl = document.getElementById('board');
const btnEl = document.getElementById('button')
// Cards
// Timer
// Win message element


// Event Listeners
document.addEventListener('DOMContentLoaded', init);
// Click on the card(s)
boardEl.addEventListener('click', handleMove);
// Click on the start button
btnEl.addEventListener('click', handleBtnClick);

// Functions:
// Generate the cards and display them in default five rows, three columns.
// Append them to the containing element in a random position —-> will leave as an alternative to create a container with 20 divs in the html
function createBoard(boardEl, rows = 5, columns = 4) {
    for (let row = 0; row < rows; row++) {
        const rowEl = document.createElement('div');
        rowEl.className = 'row';
    for (let column = 0; column < columns; column++) {
        const colEl = document.createElement('div');
        colEl.className = 'col';
        rowEl.appendChild(colEl);
    }
    boardEl.appendChild(rowEl);
    }
}

init();

function init() {
    // Board with array of cards without values
    gameHasStarted = false;
    cardsFlipped = false;
    timer = 0;
    winner = null;
    createBoard(boardEl);
    render();
    // Set if the game has started with flipping action or start button
    // Number of cards flipped (only two can be flipped at a time) to 0
    // Timer or Moves to 0
}

function render() {
    renderMessage();
}

// Player interacts…

// Click function:
// Player can click up to two cards
// Add class of active to the first card clicked
// Add class of active to the second card
// Stop ability of the player to click on any other card
// If the cards have different values
// show the color or image of the clicked cards for two seconds and then hide them
// Remove the active class
// Allow the ability of the player to click on the same cards again, and the other cards in the board
// If the cards values match both cards disappear


// Check the game status:
// While the timer is not 0/or the turns are not maxed out and the are not 10 pairs of cards with active class, keep letting the player click on boxes
// Else, well done, the game is finished!


// Restart
// By clicking on play button the board of cards resets, the timer resets