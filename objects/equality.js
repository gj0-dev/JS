let nums = [1, 2, 3];
let mystery = [1, 2, 3]

let moreNums = nums

console.log(nums === mystery)
console.log(nums == moreNums)

const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notifications: ['message', 'not']
};

if (!user.notifications.length) {
    console.log('No new notificationss')
} else {
    console.log('You have new notifications')

}

console.log([]===[])