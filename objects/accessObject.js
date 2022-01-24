const numbers = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trombones': 'great song!'}


console.log(numbers[100])
console.log(numbers['100'])

// let my cat = 'bad variable name';
// let 76trombones = `can't start variable name with a number`

console.log(numbers['76 trombones']);

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}

console.log(palette);
console.log(palette.blue);
console.log(palette.yellow);
console.log(palette['yellow']);

let mysteryColor = 'red';

console.log(palette[mysteryColor]);

console.log(palette["bl"+"ue"]);