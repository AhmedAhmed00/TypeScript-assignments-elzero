"use strict";
// Q1
// Do Not Edit Here
let myData;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Do Not Edit Here
let myInfo;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
// Do Not Edit Here
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
// =======================================
// Q4
function yesOrNo(val) {
    if (val > 10)
        return "Yes";
    else
        return "No";
}
// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
function isHeOld(age) {
    if (age > 40)
        return "Yes";
    else
        return "No";
}
// Do Not Edit Here
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
// =======================================
// Q6
let post;
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good
post.push("Elzero"); // Error => Cant Add
// Create Destructuring Here
let [id, title, state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
// =======================================
// Q7
// Create Enums + Function Here
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = getInsane(50)] = "Insane";
})(Game || (Game = {}));
function getInsane(num) {
    num = num - Game.Hard;
    return num;
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
