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

if (ingredients.includes('flour')) {
    console.log("I'm gluten free I cannot eat that")
}

console.log(ingredients.indexOf('eel'));
console.log(ingredients.indexOf('maple syrup'));
console.log(ingredients.indexOf('cheese', 2));
console.log(ingredients.indexOf('cheese', 5));