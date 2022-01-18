let shoppingList = ['Cheddar Cheese', '2% Milk']

shoppingList[1] = 'Whole Milk'

console.log(shoppingList)

shoppingList[2] = 'Ice Cream'

console.log(shoppingList)

shoppingList.push('Tomatoes')

console.log(shoppingList)

shoppingList.unshift('Cat Food')

console.log(shoppingList)

shoppingList.pop()

console.log(shoppingList)

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

console.log(topSongs)
topSongs.push('Fortunate Son');
console.log(topSongs)
const nextSong = topSongs.pop();
console.log(nextSong);