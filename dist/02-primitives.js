"use strict";
let Myname = 'poorna';
let age = 27;
let isMale = true;
let nullValue = null;
let undefValue = undefined;
let id = Symbol("id");
let bigValue = 735479824592874574583759375375n;
// Arrays
let nums = [1, 2, 3, 4];
let names = ['q', 'u', 'e', 'r', 't', 'y'];
// Tuple
let checkValues = ['poorna', 1];
// enum - Fixed set of named constant values - used for roles, order status, modes
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
})(Color || (Color = {}));
let fontColor = Color.Red;
console.log(fontColor); //0
//another example:
var Status;
(function (Status) {
    Status[Status["active"] = 0] = "active";
    Status[Status["pending"] = 1] = "pending";
    Status[Status["reject"] = 2] = "reject";
})(Status || (Status = {}));
let currentStatus = Status.active;
console.log(currentStatus); //0;
//function:
//void- if there is no return type.
function calculate(val) {
    console.log(val);
    //no return so we can use void
}
//any expected type then add that type
function cal(val) {
    return val; // return type is number 
}
