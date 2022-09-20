const prompt = require('prompt-sync')({sigint: true});
let input = Number(prompt('Push 1 to roll the dice '));

if (input === 1){
    console.log(Math.ceil(Math.random()*6))
} else {
    console.log("error");
}




