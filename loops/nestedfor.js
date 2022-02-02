const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

// for (let i = 1; i <= 10; i++){
//     console.log('OUTER LOOP', i);
//     for (let j = 5; j <=10; j++){
//         console.log('INNER LOOP')
//     }
// }

for (let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}