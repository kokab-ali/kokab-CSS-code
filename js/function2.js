

let fullName = 'kokab';
let fullName2 = 'kokab2';
let fullName3 = 'kokab3';
let allName = 'ankit';

function printName() {
    console.log(allName);
    
    allName = fullName + fullName2 + fullName3;
    console.log(allName);
}

function printAllName() {
    console.log(allName);
    printName();
}

console.log(allName);
printAllName();
console.log(allName);



/*
ankit
ankit
ankit
kokabkokab2kokab3
kokabkokab2kokab3
*/



//variable scope











// function doSomething() {
//     let num1 = 20;
//     console.log(num1);
// }


// function callSomething() {
//     doSomething();
// }

// function checkThat() {
//     callSomething();
// }

// checkThat();