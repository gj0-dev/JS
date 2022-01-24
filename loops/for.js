console.log('HELLO!');

//10 times

for (i = 1; i <= 10; i++){
    console.log('HELLO!', i)
}
for (i = 1; i <= 10; i+=3){
    console.log('HELLO!', i)
}
for (let num = 1; num <= 20; num++){
    console.log(`${num} x ${num} = ${num * num} `);
}

for (let i = 200; i >= 0; i -= 25){
    console.log(i);
}