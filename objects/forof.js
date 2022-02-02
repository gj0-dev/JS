let subreddits = ['soccer', 'popheads', 'cringe', 'books']

for (let i = 0; i < subreddits.length; i++){
    console.log(subreddits[i]);
}

for (let sub of subreddits) {
    console.log(sub);
}

//for x of y
//do this

for (let char of 'cockadoodledoo') {
    console.log(char.toUpperCase())
}