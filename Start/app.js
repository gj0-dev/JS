// alert("IT'S WORKING!");
console.log(3 + 4);
console.error('OH NO');
console.log(3 + 4, "hello", true);

if (1==1) {
    console.log("It's true")
}

let rating = 3;

if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR")
}
if (rating < 3) {
    console.log("YOU ARE NOT A SUPERSTAR")
}

let num = 37;

if (num % 2 !== 0) {
    console.log("ODD NUMBER")
}

let highScore = 1430;
let userScore = 1900;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else{console.log(`Good game, your score of ${userScore} did not beat the high score of ${highScore}`)}
    
let password = 'hellokitty'


if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password")
    }
    else{console.log ("Password is long enough, but cannot contain spaces")}
}
else {
    console.log("Password must be longer")
}

