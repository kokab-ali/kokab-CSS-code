

// function addition (num1, num2) {
//    let sum = num1 + num2;
//    console.log(sum);
// }

// addition(10,20);  // function call
// addition(20,30);



// function multiply (a,b,c) {
//     let res = a * b * c;
//     console.log(res);
// }

// multiply(1,2,3);
// multiply(23,45,11);


// let num1 = 10;
// let num2 = 20;
// let sum = num1 + num2;
// console.log(sum);

// num1 = 30;
// num2 = 40;
// sum = num1 + num2;
// console.log(sum);

// num1 = 40;
// num2 = 50;
// sum = num1 + num2;
// console.log(sum);

// num1 = 50;
// num2 = 60;
// sum = num1 + num2;
// console.log(sum);


function multiply2 (a, b) {
    return a * b;
}

function addition2 (a, b) {
    let sum = a + b;
    return sum;
}


function addSquare (a, b) {
    let m1 = multiply2(a, a);
    let m2 = multiply2(b,b);
    let sum = addition2(m1, m2);
    return sum;
}

let num1 = 5;
let num2 = 6;
let sum = addSquare(num1, num2);
console.log(sum);



//addCube   =>     take 3 numbers , add ald print the sum of cube of every number
// 2,3,4 =>   2^3 + 3^3 + 4^3 => 8 + 27 + 64 => ----