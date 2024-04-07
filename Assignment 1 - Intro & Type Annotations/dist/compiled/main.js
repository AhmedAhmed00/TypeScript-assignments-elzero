"use strict";
// Q1
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
// ==================================================================================================
// Q2
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
// ==================================================================================================
// Q3
let arr;
arr = [1, 2, 3, [1, 2, 3], ["mohamed"], "saad ", { name: "ccs" }];
// ==================================================================================================
// Q4
function reportErrors(username, age) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
}
console.log(reportErrors("Elzero", 40));
