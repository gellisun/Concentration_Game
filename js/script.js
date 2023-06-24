// Constants
// An array of colors or images
// A constant for randomly selecting colors or images
const COLORS = ['aliceblue', 'antiquewhite', 'cadetblue', 'coral', 'cornflowerblue', 'cornsilk', 'darkcyan', 'darksalmon', 'darkseagreen', 'darkslategray'];
// 'honeydew', 'indianred', 'khaki', 'lavender', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray',
// ''lightgreen', 'lightpink', 'lightseagreen', 'lightskyblue', 'lightsteelblue', 'mediumorchid', 'mediumpurple', 'navajowhite', 'navy', 'olive',
// 'olivedrab', 'orange', 'orangered', 'palegreen', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'salmon',
// 'seagreen', 'sienna', 'silver', 'steelblue', 'tan', 'teal', 'tomato', 'violet', 'yellow', 'yellowgreen', 'red', 'black'];

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
    totalCards = 20;
    gameHasStarted = false;
    cardsFlipped = 0;
    timer = 0;
    timeLeft = 5; // timeLeft = 2*60;
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

function updateTimer() {
    timeLeft = timeLeft -1;
    if (timeLeft >=0) {
        timerEl.innerHTML = timeLeft;
    }
    else {
        gameHasStarted = false;
        btnEl.hidden = false;
    }
}

function startTimer() {
    timer = setInterval(updateTimer, 1000);
    updateTimer();
    btnEl.hidden = true;
}

function render() {
    console.log(gameHasStarted)
    // if (gameHasStarted === true) {
    //     boardEl.style.pointerEvents = 'auto';
    // }else {
    //     boardEl.style.pointerEvents = 'none';
    // }
}

// Player interacts…
function handleBtnClick () {
    gameHasStarted = true;
    startTimer();
}

function handleMove(e) {
    //guards
    if (! e.target.classList.contains('card')) {
        return;
    };

    if (! gameHasStarted) {
        return;
    }

    cardsFlipped = boardEl.querySelectorAll('.card.active').length;
    if (cardsFlipped < 2) {
        e.target.classList.add('active');
        const randomIdx = Math.floor(Math.random()*COLORS.length); 
        const randomColor = COLORS[randomIdx];
        e.target.style.backgroundColor = randomColor;
        const target = e.target;
        setTimeout(() => {
            target.style.backgroundColor = 'transparent';
        }, 2000);
    }
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