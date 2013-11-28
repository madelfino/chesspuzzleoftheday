var puzzles = [
    {
        date: '11/12/13',
        title: 'Mate in one - White to move',
        start: '3q1rk1/5pbp/5Qp1/8/8/2B5/5PPP/6K1 w - - 0 1',
        moves: [
            'f6-g7'
        ]
    },
    {
        date: '11/13/13',
        title: 'Mate in two - White to move',
        start: '1Q6/8/8/8/8/k2K4/8/8 w - - 0 1',
        moves: [
            'd3-c3',
            'a3-a4',
            'b8-b4'
        ]
    },
    {
        date: '11/14/13',
        title: 'Mate in two - White to move',
        start: 'r1bq4/pppn2R1/3p1n2/4P2p/3P2pk/3Q4/PPP3P1/R6K w - - 0 1',
        moves: [
            'd3-h3',
            'g4-h3',
            'g2-g3'
        ]
    },
    {
        date: '11/15/13',
        title: 'Mate in two - Black to move',
        start: '4k2r/p1p2p1p/b1p2qpb/3P4/3r2P1/1BN1B3/PPP3PP/R1Q3KR b k - 0 1',
        moves: [
            'd4-d1',
            'c1-d1',
            'h6-e3'
        ]
    },
    {
        date: '11/16/13',
        title: 'Mate in three - Black to move',
        start: '6k1/1p5p/3p1rp1/P2Pbn2/1PB4P/3Q1q2/4R3/4B1K1 b - - 0 1',
        moves: [
            'f3-f1',
            'g1-f1',
            'f5-e3',
            'f1-g1',
            'f6-f1'
        ]
    },
    {
        date: '11/17/13',
        title: 'Mate in three - White to move',
        start: '7k/7p/4b3/4b2q/8/2B5/5Q1P/7K w - - 0 1',
        moves: [
            'f2-f8',
            'e6-g8',
            'f8-f6',
            'e5-f6',
            'c3-f6'
        ]
    },
    {
        date: '11/18/13',
        description: 'Carlsen vs Hans K Harestad, Copenhagen, 2003',
        title: 'Mate in three - White to move',
        start: 'r7/3bb1kp/q4p1N/1pnPp1np/2p4Q/2P5/1PB3P1/2B2RK1 w - - 0 1',
        moves: [
            'h4-g5',
            'f6-g5',
            'f1-f7',
            'g7-h6',
            'f7-h7'
        ]
    },
    {
        date: '11/19/13',
        description: 'Anand vs Vassily Ivanchuk, Monte Carlo, 2004',
        title: 'White to move',
        start: 'r7/P1q2p1k/6p1/R6p/3Qp2P/6P1/5P1K/8 w - - 0 1',
        moves: [
            'a5-h5',
            'g6-h5',
            'd4-e4',
            'h7-h6',
            'e4-a8'
        ]
    },
    {
        date: '11/20/13',
        description: 'E Chukaev vs Tal, Tbilisi, 1956',
        title: 'Mate in four - Black to move',
        start: '4r1k1/5pbp/3p2p1/1ppP4/pqP5/R4B2/1PQ3PP/1K6 b - - 0 1',
        moves: [
            'e8-e1',
            'f3-d1',
            'e1-d1',
            'b1-a2',
            'b4-a3',
            'b2-a3',
            'd1-a1'
        ]
    },
    {
        date: '11/21/13',
        description: 'Composed by Josef Kling 1851',
        title: 'Mate in fourteen - White to move',
        start: 'kq4n1/4p2Q/1P2P3/1K6/8/8/p7/8 w - - 0 1',
        moves: [
            'h7-e4',
            'b8-b7',
            'e4-a4',
            'a8-b8',
            'a4-f4',
            'b8-a8',
            'f4-f8',
            'b7-b8',
            'f8-f3',
            'b8-b7',
            'f3-a3',
            'a8-b8',
            'a3-g3',
            'b8-a8',
            'g3-g8',
            'b7-b8',
            'g8-g2',
            'b8-b7',
            'g2-a2',
            'a8-b8',
            'a2-h2',
            'b8-a8',
            'h2-h8',
            'b7-b8',
            'h8-a1',
            'a8-b7',
            'a1-a6'
        ]
    },
    {
        date: '11/22/13',
        description: 'Tal v Botvinnik World Championship Match (1960)',
        title: 'White to play and win',
        start: '2r5/kp1r1pp1/pR2pnp1/2Pq4/3P4/1Q6/4N1PP/1R4K1 w - - 0 1',
        moves: [
            'b6-a6',
            'a7-b8',
            'b3-a4'
        ]
    },
    {
        date: '11/23/13',
        title: 'White to move',
        start: 'k7/1p6/PP1K4/8/8/8/8/8 w - - 0 1',
        moves: [
            'd6-c7',
            'b7-a6',
            'b6-b7',
            'a8-a7',
            'b7-b8'
        ]
    },
    {
        date: '11/24/13',
        description: 'Kramnik vs Jaan Ehlvest, Riga, 1995',
        title: 'Mate in five - White to move',
        start: '3k3r/p1rb1p2/5P1b/q1p3B1/1pp1Q3/6P1/PP3P1P/2KRR3 w - - 0 1',
        moves: [
            'e4-a8',
            'c7-c8',
            'd1-d7',
            'd8-d7',
            'a8-d5',
            'd7-c7',
            'e1-e7',
            'c7-b6',
            'd5-b7'
        ]
    },
    {
        date: '11/25/13',
        title: 'Mate in one - White to move',
        start: 'rnb1r1kb/pppq1p2/4p2p/2B4P/6N1/2NP4/PPPQ1P2/R5RK w - - 0 1',
        moves: [
            'g4-f6'
        ]
    },
    {
        date: '11/26/13',
        description: 'Carlsen vs Vugar Gashimov, Moscow, 2009',
        title: 'Mate in two - White to move',
        start: '8/p3rpk1/4nN1p/2pR1Q2/8/Pq4P1/4PP1P/6K1 w - - 0 1',
        moves: [
            'f5-h7',
            'g7-f6',
            'd5-f5'
        ],
        annotation: 'Alternatively - Qh7+ Kf8 Qg8#'
    },
    {
        date: '11/27/13',
        title: 'Mate in three - Black to move',
        start: '2k4r/ppp3pp/7r/4n3/8/1BP5/PP2bPPP/RN2R1K1 b - - 0 1',
        moves: [
            'e5-f3',
            'g2-f3',
            'h6-g6',
            'g1-h1',
            'e2-f3'
        ]
    },
    {
        date: '11/28/13',
        description: '<a href="http://www.chess.com/livechess/game?id=657507534">michaeldelfino vs ColonelKnight, chess.com, 2013</a>',
        title: 'White to move and gain advantage',
        start: 'r4rk1/1pp2ppp/1pbp4/4qN1n/4PR2/2NP2Q1/PPP3PP/5RK1 w - - 0 1',
        moves: [
            'f5-h6',
            'g8-h8',
            'h6-f7',
            'f8-f7',
            'f4-f7'
        ],
        annotation: 'Happy Thanksgiving!'
    }
];
