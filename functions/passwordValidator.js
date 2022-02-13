// Write a isValidPassword function
//It accepts 2 arguments: password and username
//Password must:
// - be at least 8 characters long
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true.
// Otherwise: false

// isValidPassword('38rhbr23r', 'dogLuvr');  //true
// isValidPassword('dogLuvr123', 'dogLuvr'); //false

function isValidPassword(password, username) {
    console.log(`Password is ${password}`)
    console.log(`Username is ${username}`)
    if (password.length < 8 || password.indexOf(' ') != -1 || password.indexOf(username) != -1) {
        console.log('invalid password')
        return false;
    } else {
        console.log('valid password')
        return true;
    }
}