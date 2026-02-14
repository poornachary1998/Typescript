interface User{
    user: string,
    age: number,
    city?: string,
    readonly id: number
}
let user:User = {
    user:'name',
    age: 25,
    city:'knr',
    id: 10
}

// user.id=20 //gives error id is readonly property

interface Product{
    name: string,
    price: number,
    quantity: number,
    total (price:number, quantity:number) :number
}

const prod = {
    name: 'TV',
    price: 24,
    quantity: 4,
    total(price:number, quantity:number):number{
        return price *quantity
    }
}