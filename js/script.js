// Constants
const COLORS = ['aliceblue', 'aliceblue', 'antiquewhite', 'antiquewhite', 'cadetblue', 'cadetblue', 'coral', 'coral', 'cornflowerblue', 'cornflowerblue', 'cornsilk', 'cornsilk', 'darkcyan', 'darkcyan', 'darksalmon', 'darksalmon', 'darkseagreen', 'darkseagreen', 'darkslategray', 'darkslategray'];
const hiddenColors = COLORS.sort(() => 0.5 - Math.random());
console.log(hiddenColors)

// State of the game
let gameHasStarted;
let cardsFlipped;
let pickedColor;
let timer;
// let timeLeft;
let winner;


// Cached elements
const boardEl = document.getElementById('board');
const cardEl = document.querySelectorAll('card-back'); console.log(cardEl)
const btnEl = document.getElementById('button');
const timerEl = document.getElementById('clock');
const msgEl = document.getElementById('message');


// Event Listeners
document.addEventListener('DOMContentLoaded', init);
boardEl.addEventListener('click', handleMove);
btnEl.addEventListener('click', handleBtnClick);


// Functions:
function init() {
    gameHasStarted = false;
    cardsFlipped = 0;
    timer = 0;
    // timeLeft = 10; // timeLeft = 2*60;
    winner = null;
    createBoard(boardEl);
    render();
}

function createBoard(boardEl) {
    for (let i = 0; i < hiddenColors.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.id = i;
        card.style.backgroundColor = 'black';
        boardEl.appendChild(card);
    }
}

// function updateTimer() {
//     timeLeft = timeLeft -1;
//     if (timeLeft >=0) {
//         timerEl.innerHTML = timeLeft;
//     }
//     else {
//         gameHasStarted = false;
//         btnEl.hidden = false;
//     }
// }

function startTimer() {
    // timer = setInterval(updateTimer, 1000);
    // updateTimer();
    countdown(2, 0o0);
    btnEl.hidden = true;
}

function countdown(minutes, seconds) {
    function tick() {
        let counter = document.getElementById("clock");
        counter.innerHTML =
            minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timer = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
            }
        }
    }
    tick();
}


// countdown(2, 00);

function render() {

}


// Player interacts…
function handleBtnClick(e) {
    if (!e.target.classList.contains('play')) {
        return;
    }
    gameHasStarted = true;
    startTimer();
}

function handleMove(e) {
    //guards
    if (!e.target.classList.contains('card-back')) {
        return;
    };
    if (!gameHasStarted) {
        return;
    }
    //game has started
    let target = e.target;
    cardsFlipped = boardEl.querySelectorAll('.card-back.active').length;
    if (cardsFlipped < 2) {
        // target.classList.add('active');
        // hiddenColors.forEach(function(color){
        //     target.style.backgroundColor = color;
        // });
        if (cardsFlipped === 2) return;
        //     setTimeout(() => {
        //         target.style.backgroundColor = 'hidden';
        //     }, 2000);
        render();
    }
}

// Check the game status:
// While the timer is not 0/or the turns are not maxed out and the are not 10 pairs of cards with active class, keep letting the player click on boxes
// Else, well done, the game is finished!
function checkStatus() {
    while (timer !== 0 && cardEl.className !== 'active') {
        gameHasStarted = true;
        winner = null;
    }
}


// Restart
// By clicking on play button the board of cards resets, the timer resets




























//if I decide to put down 52 cards...
// 'honeydew', 'indianred', 'khaki', 'lavender', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray',
// ''lightgreen', 'lightpink', 'lightseagreen', 'lightskyblue', 'lightsteelblue', 'mediumorchid', 'mediumpurple', 'navajowhite', 'navy', 'olive',
// 'olivedrab', 'orange', 'orangered', 'palegreen', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'salmon',
// 'seagreen', 'sienna', 'silver', 'steelblue', 'tan', 'teal', 'tomato', 'violet', 'yellow', 'yellowgreen', 'red', 'black']