'hello'.toUpperCase();
//the above returns an output, but it is lost forever unless we store it

const scream = 'hello'.toUpperCase();
//scream stores the value returned by toUpperCase()

console.log(scream);

function add(x, y) {
    return x + y
}

//you can only return one thing from a function
//you cannot return two seperare values
//you can collect multiple values in an array/object
//then return the object