type User1 = {
    id: number;
    name: string;
    age: number;
}

interface User2 {
    id: number;
    name: string;
    age: number;
}

type UserWithRole = User1 & {
    role: "admin";
}

interface UserWithRole2 extends User2 {
    role: "admin";  
}

const user1 : User1 = {
    id: 1,
    name: "John",
    age: 30,
}

const user2 : User2 = {
    id: 2,
    name: "Jane",
    age: 25,
}
const userWithRole1 : UserWithRole = {
    id: 3,
    name: "Jack",
    age: 28,
    role: "admin",
}


type Add1 = (num1 : number , num2 : number) => number;
interface Add2 {
    (num1 : number , num2 : number) : number ;
}

const add1 : Add1 = (num1,num2) => num1 + num2; 
const add2 : Add2 = (num1,num2) => num1 + num2;


