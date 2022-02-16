// if (true) {
//     let animal = 'eel';
// }

// console.log(animal);

// if (true) {
//     var animal = 'eel';
//     console.log(animal);

// }

// console.log(animal);

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10;
// for (var i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }

// console.log(i);

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10;
// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }

// console.log(i);

// [1, 3, 5]
// [2,6,10]
function doubleArr(arr) {
    const result = [];

    for (let num of arr) {
        let double = num * 2;
        result.push(double);
    }

    return result;
}