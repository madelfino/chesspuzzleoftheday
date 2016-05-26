var init = function() {

var puzzle,
    board,
    puzzle_num = -1,
    answers = [];

var updateStatus = function() {
    $('#pnumber').text(puzzle_num + 1);
    $('#players').html('<b>' + puzzle.white + ' vs. ' + puzzle.black  + '</b>');
    $('#match').text(puzzle.match);
    $('#description').text(puzzle.description);
};

var cfg = {
    draggable: false,
    showNotation: false,
    position: puzzles[0].start
};
board = new ChessBoard('board', cfg);
load_puzzle();

function computeScore() {
    score = 0;
    max = 0;
    for (i = 0; i < answers.length && i < puzzles.length; ++i) {
        max += 25;
        if (answers[i] == puzzles[i].correct) score += 25;
        console.debug(answers[i] + ' ' + puzzles[i].correct);
    }
    return parseInt((score / max) * 2500);
}

function load_puzzle() {
    puzzle_num += 1;
    $('#move1').off("click");
    $('#move2').off("click");
    $('#move3').off("click");
    if (puzzle_num >= puzzles.length)  { 
        $('body').html("<b>Score: " + computeScore()  + "</b>");
        console.debug(computeScore());
    } else {

    puzzle = puzzles[puzzle_num];
    $('#move1').text(puzzle.moves[0]);
    $('#move2').text(puzzle.moves[1]);
    $('#move3').text(puzzle.moves[2]);
    board.position(puzzle.start, false);
    updateStatus();
    $('#move1').click(function() {
        answers.push(1);
        load_puzzle();
    });
    $('#move2').click(function() {
        answers.push(2);
        load_puzzle();
    });
    $('#move3').click(function() {
        answers.push(3);
        load_puzzle();
    });
    }
}

}; // end init()
$(document).ready(init);
