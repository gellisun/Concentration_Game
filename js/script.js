// Constants
// const COLORS = ['aliceblue', 'antiquewhite', 'cadetblue', 'coral', 'cornflowerblue', 'cornsilk', 'darkcyan', 'darksalmon', 'darkseagreen', 'darkslategray'];
// const RANDOM_COLORS = COLORS.sort(() => 0.5 - Math.random());
const COLORS = [
    {id: 1, color: 'aliceblue'},
    {id: 2, color: 'antiquewhite'},
    {id: 3, color: 'cadetblue'},
    {id: 4, color: 'coral'},
    {id: 5, color: 'cornflowerblue'},
    {id: 6, color: 'cornsilk'},
    {id: 7, color: 'darkcyan'},
    {id: 8, color: 'darksalmon'},
    {id: 9, color: 'darkseagreen'},
    {id: 10, color: 'darkslategray'}
]


// State of the game
let totalCards;
let gameHasStarted;
let cardsFlipped;
let pickedColor;
let timer;
let timeLeft;
let winner;


// Cached elements
const boardEl = document.getElementById('board');
const cardEl = document.querySelectorAll('card');
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
    pickedColor = [];
    timer = 0;
    timeLeft = 10; // timeLeft = 2*60;
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
    //game has started
    // e.target.classList.add('active');
    // cardsFlipped = boardEl.querySelectorAll('.card.active').length;
    // if (cardsFlipped === 2) return;
    // if (cardsFlipped < 2) {
        // const randomIdx = Math.floor(Math.random()*COLORS.length); 
        // const pickedColor = RANDOM_COLORS[randomIdx];
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)].color;
    if (pickedColor.length === 2) return;
    if (pickedColor.length < 2) {
        pickedColor.push(randomColor);
        e.target.style.backgroundColor = randomColor;
        const target = e.target;
    if (pickedColor.at(0) !== pickedColor.at(1)) {
        setTimeout(() => {
            target.style.backgroundColor = 'hidden';
        }, 2000);
        
    }
    if (pickedColor.at(0) === pickedColor.at(1)) {
        target.style.backgroundColor = 'visible';
    }
    }
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
function checkStatus() {
    while (timer !== 0 && cardEl.className !== 'active') {
        gameHasStarted = true;
        winner =  null;
    }
}


// Restart
// By clicking on play button the board of cards resets, the timer resets




//if I decide to put down 52 cards...
// 'honeydew', 'indianred', 'khaki', 'lavender', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray',
// ''lightgreen', 'lightpink', 'lightseagreen', 'lightskyblue', 'lightsteelblue', 'mediumorchid', 'mediumpurple', 'navajowhite', 'navy', 'olive',
// 'olivedrab', 'orange', 'orangered', 'palegreen', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'salmon',
// 'seagreen', 'sienna', 'silver', 'steelblue', 'tan', 'teal', 'tomato', 'violet', 'yellow', 'yellowgreen', 'red', 'black'];