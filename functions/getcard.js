//Write a getCard() function which returns a random playing card object

function getCard(){
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const valIdx = Math.floor(Math.random() * values.length);
    const value = values[valIdx];

    const suits = ['clubs', 'hearts', 'spades', 'diamonds']
    const suitIdx = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIdx]

    console.log(`Your card is the ${value} of ${suit}`)
    return {value: value, suit: suit};
}