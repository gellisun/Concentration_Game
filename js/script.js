// Constants
const COLORS = ['aliceblue', 'aliceblue', 'antiquewhite', 'antiquewhite', 'cadetblue', 'cadetblue', 'coral', 'coral', 'cornflowerblue', 'cornflowerblue', 'cornsilk', 'cornsilk', 'darkcyan', 'darkcyan', 'darksalmon', 'darksalmon', 'darkseagreen', 'darkseagreen', 'darkslategray', 'darkslategray'];
const hiddenColors = COLORS.sort(() => 0.5 - Math.random());

// State of the game
let gameHasStarted;
let firstAndSecondChoice;
let timer;
let winningCondition;
let timeRunOut;

// Cached elements
const boardEl = document.getElementById('board');
const btnEl = document.getElementById('button');
const msgEl = document.getElementById('message');


// Event Listeners
document.addEventListener('DOMContentLoaded', init);
boardEl.addEventListener('click', handleMove);
btnEl.addEventListener('click', handleBtnClick);


// Functions:
function init() {
    gameHasStarted = false;
    firstAndSecondChoice = [];
    winningCondition = hiddenColors.length;
    timeRunOut = false;
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

function startTimer() {
    countdown(2, 0o0);
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
            } else {
                timeRunOut = true;
                msgEl.innerText = 'TRY AGAIN!'
                boardEl.removeEventListener('click', handleMove);
            }
        }
    }
    tick();
}

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
    if (!e.target.classList.contains('card')) {
        return;
    };
    if (!gameHasStarted) {
        return;
    };
    //game has started
    let target = e.target;
    let colorIndex = target.id;
    if (firstAndSecondChoice.length < 2) {
        target.style.backgroundColor = hiddenColors[colorIndex];
        firstAndSecondChoice.push(target);
    }
    if (firstAndSecondChoice.length >= 2 && firstAndSecondChoice[0].style.backgroundColor !== firstAndSecondChoice[1].style.backgroundColor) {
        setTimeout(() => {
            firstAndSecondChoice.forEach((div) => {
                div.style.backgroundColor = 'black';
            });
            firstAndSecondChoice = []; 
        }, 2000);
    }
    if (firstAndSecondChoice.length >=2 && firstAndSecondChoice[0].style.backgroundColor === firstAndSecondChoice[1].style.backgroundColor) {
        setTimeout(() => {
            firstAndSecondChoice.forEach((div) => {
                div.style.visibility = 'hidden';
            });
            firstAndSecondChoice = [];
            winningCondition -= 2;
            checkForWin();
        }, 2000);
    }
    render();
}

// Check the game status:
function checkForWin() {
    if (winningCondition === 0 && !timeRunOut) {
        msgEl.innerText = 'CONGRATULATIONS!!! You spotted all matching pairs!';
    }
}

// Restart
// By clicking on play button the board of cards resets, the timer resets




























//if I decide to put down 52 cards...
// 'honeydew', 'indianred', 'khaki', 'lavender', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray',
// ''lightgreen', 'lightpink', 'lightseagreen', 'lightskyblue', 'lightsteelblue', 'mediumorchid', 'mediumpurple', 'navajowhite', 'navy', 'olive',
// 'olivedrab', 'orange', 'orangered', 'palegreen', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'salmon',
// 'seagreen', 'sienna', 'silver', 'steelblue', 'tan', 'teal', 'tomato', 'violet', 'yellow', 'yellowgreen', 'red', 'black']