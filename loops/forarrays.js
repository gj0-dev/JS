const examScores = [98, 77, 84, 91, 57, 66]

console.log(examScores)

for (let i = 0; i < examScores.length; i++){
    console.log(i, examScores[i]);
}

const myStudents = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {
        firstName: 'Apollo',
        grade: 90
    }
];

for (let i = 0; i < myStudents.length; i++){
    let student = myStudents[i];
    console.log(`app${student.firstName} scored ${student.grade}`);
}

const word = 'stressed';
let reversedWord = ""

for (let i = word.length - 1; i >=0; i--){
    console.log(word[i]);
    reversedWord += word[i];
}

console.log(reversedWord);

let total = 0;

for (let i = 0; i < myStudents.length; i++){
    let student = myStudents[i];
    total += student.grade
}
console.log(`Average score is: ${total / myStudents.length}`);