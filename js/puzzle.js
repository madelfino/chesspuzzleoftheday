var init = function() {

var puzzle_num = puzzles.length - 1,
    move_num = 0,
    puzzle = puzzles[puzzle_num];

var board,
    game = new Chess(puzzle.start),
    statusMsg = '',
    statusEl = $('#msg');

// do not pick up pieces if the game is over
// only pick up pieces for the side to move
var onDragStart = function(source, piece, position, orientation) {
    if (game.game_over() === true ||
        (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false;
    }
};

var onDrop = function(source, target) {
    // see if the move is legal
    correct_move = puzzle.moves[move_num];
    if (correct_move.indexOf(source) != 0 || correct_move.indexOf(target) != 3) {
        $('#msg').text('Incorrect');
        return 'snapback';
    }
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a pawn for example simplicity
    });

    // illegal move
    if (move === null) return 'snapback';

    move_num++;
    if (move_num >= puzzle.moves.length) {
        statusMsg = 'Solved!';
    } else {
        statusMsg = '';
        var next_move = puzzle.moves[move_num];
        board.move(next_move);
        move = game.move({
            from: next_move.substr(0,2),
            to: next_move.substr(3,2),
            promotion: 'q'
        });
        move_num++;
    }
    updateStatus();
};

// update the board position after the piece snap 
// for castling, en passant, pawn promotion
var onSnapEnd = function() {
    board.position(game.fen());
};

var updateStatus = function() {
    $('#title').text(puzzle.title);
    statusEl.html(statusMsg);
};

var cfg = {
    draggable: true,
    position: game.fen(),
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
};
board = new ChessBoard('board', cfg);

updateStatus();

function load_puzzle(num) {
    move_num = 0;
    puzzle_num = num % puzzles.length;
    if (num < 0) puzzle_num = puzzles.length - 1;
    puzzle = puzzles[puzzle_num];
    game.load(puzzle.start);
    board.position(game.fen(), false);
    statusMsg = '';
    updateStatus();
}

$('#prev').click(function() {
    load_puzzle(puzzle_num - 1);
});

$('#next').click(function() {
    load_puzzle(puzzle_num + 1);
});

}; // end init()
$(document).ready(init);
