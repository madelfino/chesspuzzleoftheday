var init = function() {

var puzzle,
    move_num = 0,
    board,
    game,
    statusMsg = '',
    timeouts = [],
    puzzle_num = parseInt($(location).attr('search').substr(1));

if (isNaN(puzzle_num) || puzzle_num < 0 || puzzle_num >= puzzles.length) puzzle_num = puzzles.length - 1;
puzzle = puzzles[puzzle_num];
game = new Chess(puzzle.start);

function clearTimeouts() {
    for (var i=0; i<timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
}

// do not pick up pieces if the game is over
// only pick up pieces for the side to move
var onDragStart = function(source, piece, position, orientation) {
    if (game.game_over() === true ||
        (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1) ||
        move_num >= puzzle.moves.length) {
    return false;
    }
};

var onDrop = function(source, target) {
    // see if the move is legal
    correct_move = puzzle.moves[move_num];
    if (source == target) return 'snapback';
    if (correct_move.indexOf(source) != 0 || correct_move.indexOf(target) != 3) {
        $('#msg').text('Incorrect');
        return 'snapback';
    }
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a pawn for example simplicity
        //TODO: Fix this once I add a puzzle that involves promoting
    });

    // illegal move
    if (move === null) return 'snapback';

    move_num++;
    if (move_num >= puzzle.moves.length) {
        statusMsg = 'Solved!';
        if (puzzle.annotation) {
            statusMsg += '<br>' + puzzle.annotation;
        }
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
    $('#date').text(puzzle.date);
    if (typeof(puzzle.description) !== 'undefined') $('#description').html(puzzle.description); else $('#description').html('');
    $('#title').text(puzzle.title);
    $('#msg').html(statusMsg);
    if (statusMsg.indexOf('Solved!') == 0) $('#solve').hide();
};

var cfg = {
    draggable: true,
    showNotation: false,
    position: game.fen(),
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
};
board = new ChessBoard('board', cfg);

updateStatus();

function load_puzzle(num) {
    
    clearTimeouts();
    move_num = 0;
    puzzle_num = num;
    if (num < 0) puzzle_num = 0;
    if (num >= puzzles.length) puzzle_num = puzzles.length - 1;
    puzzle = puzzles[puzzle_num];
    game.load(puzzle.start);
    board.position(game.fen(), false);
    statusMsg = '';
    $('#solve').show();
    updateStatus();
}

$('#first').click(function() {
    load_puzzle(0);
});

$('#prev').click(function() {
    load_puzzle(puzzle_num - 1);
});

$('#next').click(function() {
    load_puzzle(puzzle_num + 1);
});

$('#last').click(function() {
    load_puzzle(puzzles.length - 1);
});

$('#solve').click(function() {
    $('#msg').text('');
    (function() {
        next_move();
        function next_move() {
            if (move_num >= puzzle.moves.length) {
                statusMsg = 'Solved!';
                if (puzzle.annotation) {
                    statusMsg += '<br>' + puzzle.annotation;
                }
                updateStatus();
                return;
            }
            board.move(puzzle.moves[move_num]);
            var move = game.move({
                from: puzzle.moves[move_num].substr(0,2),
                to: puzzle.moves[move_num].substr(3,2),
                promotion: 'q'
            });
            move_num++;
            board.position(game.fen());
            timeouts.push(setTimeout(next_move, 1000));
        }
    })();
    $('#solve').hide();
});

}; // end init()
$(document).ready(init);
