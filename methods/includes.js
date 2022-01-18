let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'

]
    
let waterPresent = ingredients.includes('water');
console.log(waterPresent)

let applePresent = ingredients.includes('apple');
console.log(applePresent)

let waterSecondHalf = ingredients.includes('water', 3);
console.log(waterSecondHalf)