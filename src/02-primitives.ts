let Myname: string = 'poorna';

let age: number = 27;

let isMale: boolean = true;

let nullValue:null = null;

let undefValue:undefined = undefined;

let id:symbol = Symbol("id");

let bigValue: bigint = 735479824592874574583759375375n;

// Arrays

let nums:number[] = [1,2,3,4];

let names:string[] = ['q','u','e','r','t','y'];

// Tuple
let checkValues:[string, number] = ['poorna', 1];

// enum - Fixed set of named constant values - used for roles, order status, modes
enum Color{
    Red,
    Green,
    White
}

let fontColor:Color = Color.Red;
console.log(fontColor); //0


//another example:
enum Status{
    active,
    pending,
    reject
}

let currentStatus:Status = Status.active;

console.log(currentStatus); //0;



//function:

//void- if there is no return type.

function calculate(val: number): void{
    console.log(val);
    //no return so we can use void
}

//any expected type then add that type

function cal(val:number):number{
    return val; // return type is number 
}
