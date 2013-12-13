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
    },
    {
        date: '11/29/13',
        title: 'Mate in one - White to move',
        start: '8/1b6/2kp4/2pN4/4P1r1/8/2BK4/8 w - - 0 1',
        moves: [
            'c2-a4'
        ]
    },
    {
        date: '11/30/13',
        title: 'Mate in two - White to move',
        start: 'rnbk2r1/pppp1pBp/2q5/8/2B3Q1/8/P5PP/R3R1K1 w - - 0 1',
        moves: [
            'g7-f6',
            'c6-f6',
            'g4-g8'
        ]
    },
    {
        date: '12/1/13',
        title: 'Mate in three - Black to move',
        start: 'r3k2r/ppp2N2/3p1n2/4p3/2B1P1b1/3P3P/PPP1nbP1/RN5K b - - 0 1',
        moves: [
            'h8-h3',
            'g2-h3',
            'g4-f3',
            'h1-h2',
            'f2-g1'
        ]
    },
    {
        date: '12/2/13',
        description: 'J. Polgar vs P. Benko, Aruba 1992',
        title: 'Find the best move - White to move',
        start: 'r3nqk1/1p1b4/p3ppp1/4B3/P2P1Q2/2P1R3/2B2PP1/6K1 w - - 0 1',
        moves: [
            'c2-g6',
            'f8-g7',
            'e3-g3',
            'f6-e5',
            'd4-e5'
        ],
        annotation: '+-'
    },
    {
        date: '12/3/13',
        description: 'Vladimir Kramnik vs Kasparov, Moscow, 2001',
        title: 'Mate in four - Black to move',
        start: '8/5p1k/4r1p1/2PP1p2/1Q6/1p3bbP/1B2pqP1/R5RK b - - 0 1',
        moves: [
            'f3-g2',
            'g1-g2',
            'f2-f1',
            'a1-f1',
            'e2-f1',
            'g2-g1',
            'f1-h3' 
        ]
    },
    {
        date: '12/4/13',
        description: 'Svidler vs Konstantin Chernyshov, Voronezh, 2003',
        title: 'Mate in seven - White to move',
        start: '2r3kr/p2R2b1/6pp/1pB5/2q3p1/4Q3/PP3P1P/3R2K1 w - - 0 1',
        moves: [
            'e3-e7',
            'g7-f8',
            'e7-f6',
            'h8-h7',
            'd7-h7',
            'g8-h7',
            'd1-d7',
            'c4-f7',
            'd7-f7',
            'h7-g8',
            'f6-g6',
            'f8-g7',
            'g6-g7'
        ],
        annotation: 'If Kh8, Qh7#'
    },
    {
        date: '12/5/13',
        description: 'Keres vs Verbak, corr., 1932',
        title: 'Mate in three - White to move',
        start: 'rnbq1b1r/pp4kp/5np1/4p2Q/2BN1R2/4B3/PPPN2PP/R5K1 w - - 0 1',
        moves: [
            'h5-h6',
            'g7-h6',
            'f4-h4',
            'h6-g7',
            'e3-h6'
        ]
    },
    {
        date: '12/6/13',
        description: '<a href="http://www.chessgames.com/perl/chessgame?gid=1018910">Anderssen vs Lionel Kieseritzky, London, 1851</a>',
        title: 'Mate in three - White to move',
        start: 'r1b1k1nr/p2p1ppp/n2B4/1p1NPN1P/6P1/3P1Q2/P1P1K3/q5b1 w - - 0 1',
        moves: [
            'f5-g7',
            'e8-d8',
            'f3-f6',
            'g8-f6',
            'd6-e7'
        ],
        annotation: 'This comes from "The Immortal Game"'
    },
    {
        date: '12/7/13',
        description: '<a href="http://www.chessgames.com/perl/chessgame?gid=1470998">Jose Raul Capablanca vs Guillermo Vassaux, Buenos Aires, 1939</a>',
        title: 'Mate in three - White to move',
        start: 'r3br1k/pp5p/4B1p1/4NpP1/P2Pn3/q1PQ3R/7P/3R2K1 w - - 0 1',
        moves: [
            'h3-h7',
            'h8-h7',
            'd3-h3',
            'h7-g7',
            'h3-h6'
        ]
    },
    {
        date: '12/8/13',
        description: '<a href="http://www.chessgames.com/perl/chessgame?gid=1397589">Aronian vs Stefan Kindermann, Germany, 2004</a>',
        title: 'Mate in four - White to move',
        start: '3r2r1/4q1Bp/4k3/nBP2p1Q/P3p2P/4P1R1/8/4K3 w - - 0 1',
        moves: [
            'g3-g6',
            'h7-g6',
            'h5-g6',
            'e6-d5',
            'g6-f5',
            'e7-e5',
            'f5-e5'
        ]
    },
    {
        date: '12/9/13',
        description: '<a href="http://www.chessgames.com/perl/chessgame?gid=1043727">Fine vs Beckhardt, New York, 1933</a>',
        title: 'Mate in six - White to move',
        start: '2kr1n1r/p4p1p/1p1p1Pp1/2pPp3/4P3/2P1n1Pq/P3Q2P/1R3RKN w - - 0 1',
        moves: [
            'e2-a6',
            'c8-b8',
            'b1-b6',
            'a7-b6',
            'a6-b6',
            'b8-a8',
            'b6-a6',
            'a8-b8',
            'f1-b1',
            'b8-c7',
            'a6-b7'
        ],
        annotation: 'If Kc8, then Qc6+ Kb8 Rb1+ Ka7 Qb7#' 
    },
    {
        date: '12/10/13',
        description: '<a href="http://www.chessgames.com/perl/chessgame?gid=1462714">Yehuda Gruenfeld vs Samuel Reshevsky, New York, 1986</a>',
        title: 'Mate in three - White to move',
        start: '8/R4R1p/4p1p1/r3p3/1b2PnkP/6P1/5PK1/8 w - - 0 1',
        moves: [
            'f7-f4',
            'e5-f4',
            'f2-f3',
            'g4-h5',
            'a7-h7'
        ]
    },
    {
        date: '12/11/13',
        description: '<a href="http://www.chessgames.com/perl/chessgame?gid=1053155">Theo Van Scheltinga vs Gruenfeld, 1936</a>',
        title: 'Mate in seven - Black to move',
        start: '6rr/R4p2/4pk2/1p5q/2pP4/5P2/1P3KPP/3QR3 b - - 0 1',
        moves: [
            'g8-g2',
            'f2-e3',
            'h5-g5',
            'f3-f4',
            'h8-h3',
            'd1-f3',
            'h3-f3',
            'e3-f3',
            'g5-g4',
            'f3-e4',
            'g2-e2',
            'e1-e2',
            'g4-e2'
        ],
        annotation: 'A couple alternate lines here, can you find them?'
    },
    {
        date: '12/12/13',
        description: '<a href="http://www.chessgames.com/perl/chessgame?gid=1067573">Karpov vs Chilnov, Riga, 1970</a>',
        title: 'White to play and win',
        start: '3r3Q/pq1k1b2/2pn4/P4p2/1P2P2P/2B5/6B1/3R3K w - - 0 1',
        moves: [
            'd1-d6',
            'd7-d6',
            'h8-d8'
        ]
    },
    {
        date: '12/13/11',
        description: '<a href="http://www.chessgames.com/perl/chessgame?gid=1075577">Lewis Elkin vs Morphy, New York, 1857</a>',
        title: 'Mate in four - Black to move',
        start: '4r1k1/ppp2p1p/8/3Pr3/5Q1P/5P1q/PPP3p1/R2KR3 b - - 0 1',
        moves: [
            'e5-d5',
            'f4-d2',
            'e8-e1',
            'd1-e1',
            'g2-g1',
            'e1-e2',
            'h3-g2'
        ]
    }
];
