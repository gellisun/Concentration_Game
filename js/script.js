// // Constants
const CARDS = [
    { path: './imgs/cards/clubs/clubs-A.svg', id: 'A' },
    { path: './imgs/cards/clubs/clubs-K.svg', id: 'K' },
    { path: './imgs/cards/clubs/clubs-Q.svg', id: 'Q' },
    { path: './imgs/cards/clubs/clubs-J.svg', id: 'J' },
    { path: './imgs/cards/clubs/clubs-r10.svg', id: '10' },
    { path: './imgs/cards/clubs/clubs-r09.svg', id: '9' },
    { path: './imgs/cards/clubs/clubs-r08.svg', id: '8' },
    { path: './imgs/cards/clubs/clubs-r07.svg', id: '7' },
    { path: './imgs/cards/clubs/clubs-r06.svg', id: '6' },
    { path: './imgs/cards/clubs/clubs-r05.svg', id: '5' },
    { path: './imgs/cards/clubs/clubs-r04.svg', id: '4' },
    { path: './imgs/cards/clubs/clubs-r03.svg', id: '3' },
    { path: './imgs/cards/clubs/clubs-r02.svg', id: '2' },
    { path: './imgs/cards/diamonds/diamonds-A.svg', id: 'A' },
    { path: './imgs/cards/diamonds/diamonds-K.svg', id: 'K' },
    { path: './imgs/cards/diamonds/diamonds-Q.svg', id: 'Q' },
    { path: './imgs/cards/diamonds/diamonds-J.svg', id: 'J' },
    { path: './imgs/cards/diamonds/diamonds-r10.svg', id: '10' },
    { path: './imgs/cards/diamonds/diamonds-r09.svg', id: '9' },
    { path: './imgs/cards/diamonds/diamonds-r08.svg', id: '8' },
    { path: './imgs/cards/diamonds/diamonds-r07.svg', id: '7' },
    { path: './imgs/cards/diamonds/diamonds-r06.svg', id: '6' },
    { path: './imgs/cards/diamonds/diamonds-r05.svg', id: '5' },
    { path: './imgs/cards/diamonds/diamonds-r04.svg', id: '4' },
    { path: './imgs/cards/diamonds/diamonds-r03.svg', id: '3' },
    { path: './imgs/cards/diamonds/diamonds-r02.svg', id: '2' },
    { path: './imgs/cards/hearts/hearts-A.svg', id: 'A' },
    { path: './imgs/cards/hearts/hearts-K.svg', id: 'K' },
    { path: './imgs/cards/hearts/hearts-Q.svg', id: 'Q' },
    { path: './imgs/cards/hearts/hearts-J.svg', id: 'J' },
    { path: './imgs/cards/hearts/hearts-r10.svg', id: '10' },
    { path: './imgs/cards/hearts/hearts-r09.svg', id: '9' },
    { path: './imgs/cards/hearts/hearts-r08.svg', id: '8' },
    { path: './imgs/cards/hearts/hearts-r07.svg', id: '7' },
    { path: './imgs/cards/hearts/hearts-r06.svg', id: '6' },
    { path: './imgs/cards/hearts/hearts-r05.svg', id: '5' },
    { path: './imgs/cards/hearts/hearts-r04.svg', id: '4' },
    { path: './imgs/cards/hearts/hearts-r03.svg', id: '3' },
    { path: './imgs/cards/hearts/hearts-r02.svg', id: '2' },
    { path: './imgs/cards/spades/spades-A.svg', id: 'A' },
    { path: './imgs/cards/spades/spades-K.svg', id: 'K' },
    { path: './imgs/cards/spades/spades-Q.svg', id: 'Q' },
    { path: './imgs/cards/spades/spades-J.svg', id: 'J' },
    { path: './imgs/cards/spades/spades-r10.svg', id: '10' },
    { path: './imgs/cards/spades/spades-r09.svg', id: '9' },
    { path: './imgs/cards/spades/spades-r08.svg', id: '8' },
    { path: './imgs/cards/spades/spades-r07.svg', id: '7' },
    { path: './imgs/cards/spades/spades-r06.svg', id: '6' },
    { path: './imgs/cards/spades/spades-r05.svg', id: '5' },
    { path: './imgs/cards/spades/spades-r04.svg', id: '4' },
    { path: './imgs/cards/spades/spades-r03.svg', id: '3' },
    { path: './imgs/cards/spades/spades-r02.svg', id: '2' }];
const CARD_BACK = './imgs/cards/backs/File-01.svg';


// State of the game
let gameHasStarted;
let firstAndSecondChoice;
let timer;
let winningCondition;
let timeRunOut;
let numOfCards;
let shuffledCards;


// Cached elements
const boardEl = document.getElementById('board');
const optionEl = document.getElementById('options');
const btnEl = document.getElementById('button');
const resetEl = document.getElementById('reset');
const msgEl = document.getElementById('message');


// Event Listeners
document.addEventListener('DOMContentLoaded', init);
boardEl.addEventListener('click', handleMove);
btnEl.addEventListener('click', handleBtnClick);
resetEl.addEventListener('click', handleReset);
optionEl.addEventListener('change', handleOptionChange);


// Functions:
function init() {
    gameHasStarted = false;
    firstAndSecondChoice = [];
    timeRunOut = false;
    numOfCards = 52;
    winningCondition = numOfCards;
    render();
}

function shuffleCards () {
    let cards = [...CARDS];
    if (numOfCards === 26) {
        cards = cards.filter((cardObj, idx) => {
            return idx < numOfCards;
        })
    }
    shuffledCards = cards.sort(() => 0.5 - Math.random());
}

function createBoard() {
    for (let i = 0; i < numOfCards; i++) {
        const card = document.createElement('img');
        card.src = CARD_BACK;
        card.className = 'card';
        card.id = i;
        boardEl.appendChild(card);
    }
}

function startTimer() {
    let minutes = numOfCards === 26 ? 2 : 4;
    countdown(minutes, 0);
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
                msgEl.innerText = 'TRY AGAIN!';
                boardEl.removeEventListener('click', handleMove);
            }
        }
    }
    tick();
}

function render() {
    shuffleCards();
    createBoard();
}

// Player interacts…
function handleBtnClick(e) {
    let target = e.target;
    if (!target.classList.contains('play') || target.disabled) {
        return;
    }
    target.disabled = true;
    gameHasStarted = true;
    startTimer();
}

function handleOptionChange(e) {
    numOfCards = parseInt(e.target.value);
    winningCondition = numOfCards;
    boardEl.innerHTML = '';
    gameHasStarted = false;
    clearTimeout(timer);
    render();
}

function handleReset() {
    clearTimeout(timer);
    timer = 0;
    document.getElementById('clock').innerHTML = '0:00';
    msgEl.textContent = '';
    render();
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
    let cardIndex = target.id;
    let selectedCard = document.getElementsByClassName('card');
    selectedCard = shuffledCards[cardIndex].path;
    let selectedCardId = shuffledCards[cardIndex].id;

    if (firstAndSecondChoice.length < 2) {
        if (target.classList.contains('active')) {
            return;
        }
        target.src = selectedCard;
        target.classList.add('active');
        firstAndSecondChoice.push({ card: target, id: selectedCardId });
    }
    if (firstAndSecondChoice.length === 2 && firstAndSecondChoice[0].id !== firstAndSecondChoice[1].id) {
        setTimeout(() => {
            for (let choice of firstAndSecondChoice) {
                choice.card.src = CARD_BACK;
                choice.card.classList.remove('active');
            }
            firstAndSecondChoice = [];
            msgEl.textContent = "Wrong guess, try again!";
        }, 1000);
            msgEl.textContent = '';
    }
    if (firstAndSecondChoice.length >= 2 && firstAndSecondChoice[0].id === firstAndSecondChoice[1].id) {
        setTimeout(() => {
            for (let choice of firstAndSecondChoice) {
                choice.card.style.visibility = 'hidden';
                choice.card.classList.remove('active');
            }
            firstAndSecondChoice = [];
            msgEl.textContent = "Yes! Keep guessing!";
            winningCondition -= 2;
            checkForWin();
        }, 1000);
    }
}


// Check the game status:
function checkForWin() {
    console.log(winningCondition);
    if (winningCondition === 0 && !timeRunOut) {
        clearTimeout(timer);
        msgEl.textContent = 'WELL DONE!!! You spotted all matching pairs!';
    }
}