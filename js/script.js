// Constants
const COLORS = ['aliceblue', 'antiquewhite', 'cadetblue', 'coral', 'cornflowerblue', 'cornsilk', 'darkcyan', 'darksalmon', 'darkseagreen', 'darkslategray'];

// const COLORS = [
//     {id: 1, color: 'aliceblue'},
//     {id: 2, color: 'antiquewhite'},
//     {id: 3, color: 'cadetblue'},
//     {id: 4, color: 'coral'},
//     {id: 5, color: 'cornflowerblue'},
//     {id: 6, color: 'cornsilk'},
//     {id: 7, color: 'darkcyan'},
//     {id: 8, color: 'darksalmon'},
//     {id: 9, color: 'darkseagreen'},
//     {id: 10, color: 'darkslategray'}
// ]


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
    // pickedColor = [];
    timer = 0;
    timeLeft = 10; // timeLeft = 2*60;
    winner = null;
    createBoard(boardEl);
    render();
}

// function randCol(){
//     const randomColor = COLORS.sort(() => 0.5 - Math.random());
//     let current = [];
//     function rand(c) {
//         return(Math.random()*c)|0;
//     }
//     return function() {
//         if(!current.length) current = randomColor.slice();
//         return current.splice(rand(current.length), 2);
//     }
// }

function createBoard(boardEl) {
    for (let i = 0; i < totalCards; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        // randCol();
        const randomColor = COLORS.sort(() => 0.5 - Math.random());
        randomColor.forEach(function(color){
            card.style.backgroundColor = color;
        })
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

// function countdown(minutes, seconds) {
//     function tick() {
//         let counter = document.getElementById("clock");
//         counter.innerHTML =
//             minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
//         seconds--;
//         if (seconds >= 0) {
//             timer = setTimeout(tick, 1000);
//         } else {
//             if (minutes >= 1) {
//                 // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
//                 setTimeout(function () {
//                     countdown(minutes - 1, 59);
//                 }, 1000);
//             }
//         }
//     }
//     tick();
// }

// countdown(2, 00);

function render() {
    
}


// Player interacts…
function handleBtnClick(e) {
    if (!e.target.classList.contains('play')){
        return;
    }
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
    let target = e.target;
    target.classList.add('active');
    cardsFlipped = boardEl.querySelectorAll('.card.active').length;
    if (cardsFlipped === 2) return;
    if (cardsFlipped < 2) {
        // const randomIdx = Math.floor(Math.random()*COLORS.length); 
        // const currentColor = randomColor[randomIdx];
    }   
    // const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)].color;
    // if (pickedColor.length === 2) return;
    // if (pickedColor.length < 2) {
    //     pickedColor.push(randomColor);
    //     e.target.style.backgroundColor = randomColor;
    //     const target = e.target;
    // if (pickedColor.at(0) !== pickedColor.at(1)) {
    //     setTimeout(() => {
    //         target.style.backgroundColor = 'hidden';
    //     }, 2000);
        
    // }
    // if (pickedColor.at(0) === pickedColor.at(1)) {
    //     target.style.backgroundColor = 'visible';
    // }
    // }
    
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