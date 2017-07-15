"use strict";
// Su dung this trong ES6 - lesson 9
var employee = {
    id: 1,
    greet: function () {
        // setTimeout(() => console.log("use this: " + this.id), 1000); // Su dung arrow function
    }
};
employee.greet();
console.log("abc: 123 asdf ahihi");
// default funtion - lesson 10
let getNum = () => 3;
let getBonus = function (value = 10, tax = value * 0.2 + getNum()) {
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus();
getBonus(undefined, 30);
// Rest parameter - lesson 11
console.log("Rest parameter - lesson 11 - Khoa Pham Hihi");
let displayColor = function (...colors) {
    colors.forEach(element => {
        console.log("Color is :" + element);
    });
    console.log(colors);
    console.log(arguments.length);
};
displayColor("Red");
displayColor("Red", "Green");
displayColor("Red", "Green", "Blue");
// Spread pramater - lesson 12
// Chuc nang nguoc lai cua rest paramater
// Boc tach Array
let abc = ['a', 'b', 'c'];
let [char1, ...char2] = abc;
console.log(char1);
console.log(char2);
// Boc tac object - lesson 14
console.log("Lesson 14 - Boc tach object");
let hs = {
    name: "Khoa",
    fullname: "Dep Trai",
    age: 20
};
let { name: f, fullname: fn, age: a } = hs;
console.log(f);
console.log(fn);
console.log(a);
// String templates - lesson 15
console.log("Lesson 15 - String template");
var hihi = "Khoa";
var message = `
                     
     Wellcome ${hihi} to Abc;
    
`;
console.log(message);
//# sourceMappingURL=lesson9.js.map