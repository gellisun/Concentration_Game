
# Project 1: Concentration Game

## Description

This is my first solo project on the General Assembly Software Engineering Immersive. After two weeks of learning HTML, CSS and JavaScript I was assigned my first project: to render a game in the browser utilising ‘vanilla’ JavaScript, HTML and CSS, with a list of games to choose from such as Spaceman, Simon, Mastermind, Minesweeper, etcetera...

## The Game

The board has a default of 52 cards as in the original game - the user can decide to either play with 52 or 26 cards.
Once the user clicks on the start button, for each try two cards can be flipped.
The object of the game is to find pairs of matching cards.
The rules: only two cards at the time can be flipped and all the pairs must be found within the time limit.
The game ends when the last pair has been picked up or when the time ends.

### History Of The Game

Concentration is a round game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.
Concentration can be played with any number of players or as a solitaire or patience game. It is a particularly good game for young children, though adults may find it challenging and stimulating as well. The scheme is often used in quiz shows (in fact, several game shows have used its name in their titles) and can be employed as an educational game.
Any deck of playing cards may be used, although there are also commercial sets of cards with images. The rules given here are for a standard deck of 52 cards, which are normally laid face down in four rows of 13 cards each.[2] The two jokers may be included for a total of six rows of nine cards each.

Additional packs can be used for added interest. Standard rules need not be followed: the cards can be spread out anywhere, such as all around a room.

In turn, each player chooses two cards and turns them face up. If they are of the same rank and color (e.g. six of hearts and six of diamonds, queen of clubs and queen of spades, or both jokers, if used) then that player wins the pair and plays again. If they are not of the same rank and color, they are turned face down again and play passes to the player on the left. Rules can be changed here too: it can be agreed before the game starts that matching pairs be any two cards of the same rank, a color-match being unnecessary, or that the match must be both rank and card suit.

The game ends when the last pair has been picked up. The winner is the person with the most pairs. There may be a tie for first place.

![alt text](/imgs/README%20imgs/marvel_themed.png)

Play [here](https://gellisun.github.io/Concentration_Game/)

## Technologies Used

- HTML
- CSS
- JavaScript

Tools:

- Git and GitHub
- VS Code

## The Brief

- Render a game in the browser.
- Include win/loss logic and render win/loss messages in HTML.
- Include separate HTML, CSS & JavaScript files.
- Use vanilla JavaScript, not jQuery.
- Have properly indented HTML, CSS & JavaScript. In addition, vertical whitespace needs to be consistent.
- No remaining unused and/or commented out code (code that will never be called) .
- Have functions and variables that are named sensibly.
- Be coded in a consistent manner.
- Be deployed online using GitHub Pages so that the rest of the world can play your game!
Specific to Concentration Game:
- Use cards or other theme
- Will need to display "wrong" guess until a timer expires or until the next click.

## Planning

I started by researcing the history of the game and the games online to confirm the features that I imagined I would want to implement such as different boards of cards, a countdown, AI...

![alt text](/imgs/README%20imgs/wireframe.png)
[^1]: MVP was only the h1, board, play button, timer and the 'wrong guess' message.

### Pseudocode

1. Constants
- An array of images
- A constant for randomly selecting images

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
- Click on the reset button

5. Page Load
- Board with array of cards
- Winner: either won or game on 
- Generate the cards and display them
- Append them to the containing element in a random position

6. Functions:
init();
- Set if the game has started with flipping action or start button
- Number of cards flipped (only two can be flipped at a time) to 0
- Timer or Moves to 0

Player interacts…

Click function:
- Player can click up to two cards
- Add class of active to each card clicked
- Stop ability of the player to click on any other card
- If the cards have different values
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



## Next Steps
- Add AI and let the user play against the computer.
- Add a feature that keeps track of the moves.
- Add a feature that gives points to the user based on how fast the pairs are found and how many moves to find them.