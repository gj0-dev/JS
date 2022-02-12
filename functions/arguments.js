function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
};


function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        rollDie();
    }
}

throwDice(5);


function greet(person) {
    console.log(`Hi ${person}!`)
}

greet('Garry');