const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
};

avgScore = (student.exams.midterm + student.exams.final) / 2;

console.log(avgScore);
console.log(student.strengths[1])

const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
];

console.log(shoppingCart);

[
    ['0', null, 'X'],
    ['X', '0', 'X'],
    [null, '0', 'X']
]
 
const game = {
    player1: {
        username: 'Blue',
        playingAs: 'X'
    },
        player2: {
        username: 'Muffins',
    playingAs: 'O'},
            board: [['0', null, 'X'],
            ['X', '0', 'X'],
            [null, '0', 'X']]
}