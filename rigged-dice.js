const prompt = require('prompt-sync')({sigint: true});


let x = ""
let output = ""

//-----------------------------------------------------------------------------------
let input = Number(prompt('Enter a rigged number from 1 to 6: '));
//-----------------------------------------------------------------------------------
if (input >= 1 && input <= 6){
    output = Math.ceil(Math.random()*7);
    console.log("actual output is " + output); // ---to see whats the actual output before rigging
} else {
    console.log('Error. Enter a whole number 1 - 6');
}
//------------------------------------------------------------------------ hello
if ((input===1 && output===1)||(input===1 && output===7)) {
    x = 1;
} else if ((input===2 && output===2)||(input===2 && output===7)){
    x = 2;
} else if ((input===3 && output===3)||(input===3 && output===7)){
    x = 3;
} else if ((input===4 && output===4)||(input===4 && output===7)){
    x = 4;
} else if ((input===5 && output===5)||(input===5 && output===7)){
    x = 5;
} else if ((input===6 && output===6)||(input===6 && output===7)){
    x = 6;
} else {
    x = output;
}
//--------------------------------------------------------------------------
if ((x === 1) || (x === 2) || (x === 3) || (x === 4) || (x === 5) || (x === 6)){
    console.log(x);
}

