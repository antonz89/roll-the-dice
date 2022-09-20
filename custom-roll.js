const prompt = require('prompt-sync')({sigint: true});

let input = Number(prompt('How many sides on a dice? '));

console.log(Math.ceil(Math.random()*input));
