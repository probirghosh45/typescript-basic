{
// type assertion

const info: any = "hello world";
const strLength : number = (info as string).length;
console.log(strLength); // 11

// type narrowing

function getLength (input : string | number | boolean) {
    if(typeof input === "string"){
        return input.length;
    }
        else if (typeof input === "number"){
            return input.toString().length;
        }
    
}

console.log(getLength("hello world")); // 11
console.log(getLength(12345)); // 5
console.log(getLength(true)); // undefined


const printId = (id : string | number) => {
    if (typeof id === "string"){
        console.log(`string id: ${id}`);
    }
    else if (typeof id === "number"){
        console.log(`number id: ${id}`);
    }
    else {
        console.log(`id: ${id}`);
    }
}

printId("123"); // string id: 123
printId(123); // number id: 123
printId("Hi") // id: Hi



// interface

interface User {
    id : number;
    name : string;
    age : number;

}

interface Admin extends User  {
    role : "admin",
}

const user : User = {
    id: 1,
    name : "John",
    age : 30,
}

const admin : Admin = {
    id: 2,
    name : "Jane",
    age : 25,
    role : "admin",
}

type ID = string | number ;

interface UserInfo {
    id : ID;
    name : string;
    age : number;
}

interface AdminInfo extends UserInfo {
    role : "admin",
}

type UserType = User | Admin;


// generic 

// without generic

function indentity(value : any) : any {
    return value ;
}

const str = indentity("hello world");  // "hello world"
const num = indentity(12345); // 12345

// with generic

function indentityGeneric<T>(value : T): T {   // T is a generic type parameter , we can use any letter or word
    return value ;
}

const strGeneric = indentityGeneric<string>("hello world");  // "hello world"
const numGeneric = indentityGeneric<number>(12345); // 12345 

// generic with interface

interface GenericWithInterface<T>{
    value : T;
}

const strGenericWithInterface : GenericWithInterface<string> = {
    value : "hello world",
}

const numGenericWIthInterface : GenericWithInterface<number> = {
    value : 12345
}

// interface with multiple generic types

interface Pair<P,T,R>{
    bf : P;
    gf : T;
    balance : R;
}

const pair : Pair <string,string,number> = {
    bf : "Probir",
    gf : "Tisha",
    balance : 1000,
}


// generic with function

function getPair<P,T,R>(bf : P , gf : T , balance : R) : [P,T,R] {
    return [bf,gf,balance];
}

function getPair2<P,T,R>(bf : P , gf : T , balance : R) : Pair<P,T,R> {
    return {
        bf,
        gf,
        balance,
    }
}

const pair2 = getPair("Probir","Tisha",1000); // ["Probir","Tisha",1000]
const pair3 = getPair2("Probir","Tisha",1000); // {bf: "Probir", gf: "Tisha", balance: 1000}
const pair4 = getPair2<string,string,number>("Probir","Tisha",1000); // {bf: "Probir", gf: "Tisha", balance: 1000}


// generic with arrow function

const getPairArrow = <A,B,C>(bf:A , gf : B , balance : C) : [A,B,C] =>{
    return [bf,gf,balance];
}  

const pair5 = getPairArrow<string,number,string>("Probir",1000,"Tisha"); // ["Probir",1000,"Tisha"]



// generic with constraints
function logLength<T  extends {length : number}>(value : T) : number{
    return value.length;
}


const strLength2 = logLength("hello world"); // 11
const arrLength = logLength([1,2,3,4,5]); // 5
const objLength = logLength({length : 10}); // 10 

// constraint using keyof

function getValue<T,K extends keyof T>(obj : T , key : K) : T[K] {
    return obj[key];
} 

const obj = {
    nameInfo : "Probir",
    ageInfo : 25,

}

// const nameInfo = getValue(obj,"nameInfo"); // "Probir"
// const ageInfo = getValue(obj,"ageInfo"); // 25
// const nameInfo = getValue<typeof obj,"nameInfo">(obj,"address"); // Error: Type '"address"' is not assignable to type '"nameInfo" | "ageInfo"'


}


//async function interface
interface UserAsync {
    id : number;
    name : string;
    age : number;
}   

async function getUserInfo():Promise<UserAsync>{
  const user = await fetch("https://jsonplaceholder.typicode.com/users/1")
  const data = await user.json();
    return data;
}

getUserInfo().then((user)=>{
    console.log(user) // {id: 1, name: "Leanne Graham", age: 30}
})


// condiotional types

type conditionalType <T> = T extends string ? "string" : T extends number ? "number" : "other";
const strType : conditionalType<string> = "string"; // "string"
const numType : conditionalType<number> = "number"; // "number"

type notNullable <T>  =  T extends null | undefined ? never : T;
const strNotNullable : notNullable<string> = "Hi" // "Hi"
const numNotNullable : notNullable<number> = 123; // 123
const nullNotNullable : notNullable<null> = null; // Error: Type 'null' is not assignable to type 'never'
const undefinedNotNullable : notNullable<undefined> = undefined; // Error: Type 'undefined' is not assignable to type 'never'
const objNotNullable : notNullable<{name : string}> = {name : "Probir"}; // {name: "Probir"}

