# 2048game

The goal of this project is to make a working web version of the game 2048. 

## Model

The model code is encapsulated inside a Game class and could be exported from ../engine/game.js. The game class has a 
constructor taking the size of the game, adding tile function which has have a 90% chance of being a 2 and a 10% chance
 of being a 4, a move function that changes the state of the game, and observable by three events of move, win and lose.
The game class has following methods of setupNewGame(), move(direction),  onMove(callback), onWin(callback), onLose(callback),
and getGameState().

## Viewer and Controller

In my interface, following requirements have been met:
* When the page first loads, the game must be initialized to a random starting state.
* The player must be able to input moves by pressing the arrow keys on the keyboard.
* The game board must be displayed on the page and updated as moves are made.
* The score must be displayed on the page and updated as moves are made.
* A button must be included in the user interface that allows the player to reset the game to an initial starting position.
* When the game is over, the user interface must visually display that the game is over.
* If the player wins the game, the user interface must visually display that the game is won.
