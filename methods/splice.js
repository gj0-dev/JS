let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

animals.splice(1, 0, 'octopus')

console.log(animals)

animals.splice(3, 2);

console.log(animals)

animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

animals.splice(3, 0, 'snake', 'frog')

console.log(animals)

animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

animals.splice(0, 2, 'SHARK!', 'OCTOPUS!')

console.log(animals)