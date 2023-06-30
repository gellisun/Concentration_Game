
# Project 1: Concentration Game

## Description

This is my first solo project on the General Assembly Software Engineering Immersive. After two weeks of learning HTML, CSS and JavaScript I was assigned my first project: to render a game in the browser utilising vanilla JavaScript, HTML and CSS, with a list of games to choose from such as Spaceman, Simon, Mastermind, Minesweeper, etcetera...

## The Game

The board has a default of 52 cards as in the original game - the user can decide to either play with 52 or 26 cards.
Once the user clicks on the start button, for each try two cards can be flipped.
The objective of the game is to find pairs of matching cards.
The rules: only two cards at the time can be flipped and all the pairs must be found within the time limit.
The game ends when the last pair has been picked up or when the time ends.

### History Of The Game

Concentration is a round game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.
Concentration can be played with any number of players or as a solitaire or patience game. It is a particularly good game for young children, though adults may find it challenging and stimulating as well. The scheme is often used in quiz shows (in fact, several game shows have used its name in their titles) and can be employed as an educational game.
Any deck of playing cards may be used, although there are also commercial sets of cards with images. The rules given here are for a standard deck of 52 cards, which are normally laid face down in four rows of 13 cards each. The two jokers may be included for a total of six rows of nine cards each.

Additional packs can be used for added interest. Standard rules need not be followed: the cards can be spread out anywhere, such as all around a room.

In turn, each player chooses two cards and turns them face up. If they are of the same rank and color (e.g. six of hearts and six of diamonds, queen of clubs and queen of spades, or both jokers, if used) then that player wins the pair and plays again. If they are not of the same rank and color, they are turned face down again and play passes to the player on the left. Rules can be changed here too: it can be agreed before the game starts that matching pairs be any two cards of the same rank, a color-match being unnecessary, or that the match must be both rank and card suit.

The game ends when the last pair has been picked up. The winner is the person with the most pairs. There may be a tie for first place.

![alt text](/imgs/README%20imgs/game.png)

[Start playing!](https://gellisun.github.io/Concentration_Game/)

## Technologies Used

- HTML
- CSS
- JavaScript

Tools:

- CLI
- Git and GitHub
- VS Code
- Google Chrome Dev Tools

## The Brief

- Render a game in the browser.
- Include win/loss logic and render win/loss messages in HTML.
- Include separate HTML, CSS & JavaScript files.
- Use vanilla JavaScript, not jQuery.
- Have properly indented HTML, CSS & JavaScript. In addition, vertical whitespace needs to be consistent.
- No remaining unused and/or commented out code.
- Have functions and variables that are named sensibly.
- Be coded in a consistent manner.
- Be deployed online using GitHub Pages.
Specific to Concentration Game:
- Use cards or other theme
- Will need to display "wrong" guess until a timer expires or until the next click.

## Planning

I started by researching the history of the game and the games online to confirm the features that I imagined I would want to implement such as different boards of cards, a countdown, AI...

![alt text](/imgs/README%20imgs/wireframe.png)[^1]
[^1]: The photo shows some of the features I thought of during planning. MVP were only the game title, board, play button, timer and the 'wrong guess' message.

### Pseudocode

1. Constants
    - An array of cards
    - A constant for randomly selecting cards

2. State of the game
    - let gameHasStarted;
    - let cardsFlipped;
    - let timer;

3. Cached elements
    - Cards containing element
    - Cards
    - Timer
    - Button
    - Win message element

4. Event Listeners
    - Click on the card(s)
    - Click on the start button

5. Page Load
    - Board with array of cards
    - Winner: either won or game on 
    - Generate the cards and display them
    - Append them to the containing element in a random position

6. Functions:
    init();
    - Set if the game has started with flipping action or start button
    - Number of cards flipped (only two can be flipped at a time) to 0
    - Timer to 0

    Click function:
    - Player can click up to two cards
    - Stop ability of the player to click on any other card
    - Add class of active to each card clicked
    - If the cards have different values:
        - show the color or image of the clicked cards for two seconds and then hide them
        - Remove the active class
        - Allow the ability of the player to click on the same cards again, and the other cards in the board
    - If the cards values match both cards disappear

7. Check the game status:

    - While the timer is not 0 and the are still pairs of cards to match, keep letting the player click on boxes
    - Else, well done, the game is finished!

8. Restart

    - By clicking on play button the board of cards resets, the timer resets

## Getting Started

### The Page Setup

I started with a few functions and the aim to dynamically create and display the cards and shuffle them.
I created an array of objects storing the CARDS images when flipped: each object has a path and id keys with their values. I also created an array CARD_BACK to show the back of the cards when they are facing down on the board.

```JavaScript
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

    function render() {
        shuffleCards();
        createBoard();
    }
```
    
### The User Interactions

I created four ways in which the user interacts with the page: by clicking on the 'Click to start!' and if so, by being able to click on two cards at the time in order to display them, and, in case of a change of heart or wanting to start again, by clicking on a 'Reset' button. Finally, once the MVP was finalised I added the possibility for the user to decide whether to go for a board of 26 cards rather than the default of 52.

```JavaScript
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
        timerEl.innerHTML = '0:00';
        btnPlayEl.disabled = false;
        boardEl.innerHTML = '';
        gameHasStarted = false;
        clearTimeout(timer);
        render();
    }

    function handleReset() {
        clearTimeout(timer);
        init();
    }
```

It was the handleMove function where I was the most challenged.
The function has guards that won't allow the user to click on the cards unless clicking on the 'Click to start!' button, also it will only listen for clicks that happen on the actual cards and not areas next to them. Finally, the user won't be able to click on the same card twice (this was one of the many bugs I fixed).
With each event the 'key: value' pairs of the cards that are selected are stored in variables. This allows the conditions for the game to set the course of action when pairs of cards are or are not found; it also will decide what side of the card will be displayed after the user interaction.
The two main conditions of the function will check if the newly created array of selected cards has a length of 2 and, only once it has, it checks if the ids of the selected cards are or not the same:
 1. if not
 - flips them back after one second and removes the class of active that helps with the guard I mentioned earlier
 - removes the selections from the firstAndSecondChoice array
 - displays a 'try again' message that will be then deleted while waiting for the next two clicks
 2. if a pair is found
 - removes the class of active and after one second hides the cards
 - clears the selections array and displays a 'well done' message
 - takes action on the winning condition and calls the function that will check if the user wins

```JavaScript
    function handleMove(e) {
        if (!e.target.classList.contains('card')) {
            return;
        };
        if (!gameHasStarted) {
            return;
        };
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
```
## Key Takeaways

This project taught me that I have to be patient with the learning process. If you asked me on the first two days if I was ever going to deliver something you would have had negative feedback!
I found that starting from scratch takes a lot of thinking, planning ahead and having the ideas clear before starting to put everything together. Without the wireframe and pseudocode I created as the first step it would have been much harder for me.
I did my best to get to the point where I could add more than only one feature to my MVP, but as expected on a first project I spent a lot of time figuring out why some of the code I was writing would work differently from the way I wanted or working on refactoring it and make it DRY.
Overall I am satisfied that I have a functioning game and I am really proud of overcoming all the challenges that I was put face to face with.

## Next Steps
- Responsive design
- Add AI and let the user play against the computer.
- Add a feature that keeps track of the moves.
- Add a feature that gives points to the user based on how fast the pairs are found and how many moves to find them.
