// basic function

function test(a:number, b:number):number{
    return a+b;
}

//optional parameters

function greetings(wish: string, name?: string):string{
    if(wish){
        return `${wish},${name}`
    }
    return `${name}`
}

//Default parameters

function add(a:number, b:number = 1):number{
    return a+b
} 

//rest parameters

function calll(...numbers:number[]){
    return numbers.reduce((acc,item) =>acc+item, 0)
}

//Arrow functions

const call = (a:number, b:number):number => {
    return a+b
}