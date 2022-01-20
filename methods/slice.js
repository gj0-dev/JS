let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

let swimmers = animals.slice(0, 3);

console.log(animals)
console.log(swimmers)

let mammals = animals.slice(2, 4)

console.log(mammals)

// let reptiles = animals.slice(4, 6)
let reptiles = animals.slice(4)

//both of the above work

console.log(reptiles)

let quadruped = animals.slice(-3)

console.log(quadruped);

let duplicateArray = animals.slice();
//calling slice with no parameters makes an identical new array


console.log(duplicateArray);