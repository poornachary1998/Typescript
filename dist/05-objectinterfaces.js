"use strict";
let user = {
    user: 'name',
    age: 25,
    city: 'knr',
    id: 10
};
const prod = {
    name: 'TV',
    price: 24,
    quantity: 4,
    total(price, quantity) {
        return price * quantity;
    }
};
