function square(x) {
    return x * x;
    console.log('ALL DONE')
}

//console.log will not run, as the return statement has ended the function

// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//         console.log('YAY')
//     }
//     else {
//         return false;
//         console.log('YAY')
//     }
// }
// as soon as one of the return cases executes, the code stops
// the above console.logs will never run

// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//         console.log('YAY')
//     }
//     return false;
// }
// there is no need for an else

// function isPurple(color) {
//     return color.toLowerCase() === 'purple';
// }


function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}