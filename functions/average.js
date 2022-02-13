// Write a function to find the average value in an array of numbers
//avg([0,50]) // 25
//avg([75,76,80,95,100]) //85.2

function avg(nums) {
    let total = 0;

    for(let i = 0; i < nums.length; i++) {
        total += nums[i];
        console.log(total);
    }
    let averageOfNums = (total / nums.length);

    console.log(`The average of ${nums} is ${averageOfNums}`)
    return averageOfNums;
}

avg([0, 50])
avg([75,76,80,95,100])