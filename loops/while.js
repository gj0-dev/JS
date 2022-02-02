// let j = 0;
// while (j <= 5) {
//     console.log(j);
//     j++;
// }

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);

}

console.log(`Target: ${target} Guess: ${guess}`);
console.log(`Congrats you win!`)

// while(some condition)
//in the loop, update or attempt to make that condition false