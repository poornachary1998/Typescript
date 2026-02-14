"use strict";
// basic function
function test(a, b) {
    return a + b;
}
//optional parameters
function greetings(wish, name) {
    if (wish) {
        return `${wish},${name}`;
    }
    return `${name}`;
}
//Default parameters
function add(a, b = 1) {
    return a + b;
}
//rest parameters
function calll(...numbers) {
    return numbers.reduce((acc, item) => acc + item, 0);
}
//Arrow functions
const call = (a, b) => {
    return a + b;
};
