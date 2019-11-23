import Game from './engine/game.js'

var game = new Game(4);
loadTiles(game);
attachKeyevent(game);


function loadScore(game){
    $('#score').text(game.gameState.score);
}


function loadTiles(game){
    let width = game.width;
    let board = game.gameState.board;
    $('.tile-container').empty();
    for(let i = 0; i < width; i++)
        for(let j = 0; j < width; j++)
        {
            if (board[i*width+j]!=0){
                $('.tile-container').append(
                    $(`<div id='tile-position-${j+1}-${i+1}'
                    class='tile-${board[i*width+j]}'>${board[i*width+j]}</div>`)
                )
            }

        }
}
function attachKeyevent(game){
$(document).keydown((Event) => {
    switch(Event.which) {
        case 39:
            game.move('right');
            break;
        case 37:
            game.move('left');

            break;
        case 40:
            game.move('down');

            break;
        case 38:
            game.move('up');
            break;
    }
    loadTiles(game);
    loadScore(game);
});
game.onLose(() => {
    alert('Oh no! You lost!Press the "Reset Game" button to try again.')
})
game.onWin(() =>
    alert('Congratulatinos! You win!'))
}

$('#Reset').on('click', () => {
    game = new Game(4);
    loadTiles(game);
    loadScore(game);
    attachKeyevent(game);
});