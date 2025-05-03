// normal function
function greet(name:string , amount : number): string {
    return `Hi ${name} Good Morning , I have only ${amount} taka in my wallet`;
}

console.log(greet("Tisha", 1000)); //output: Hi Tisha Good Morning , I have only 1000 taka in my wallet

// arrow function

const propose =(name : string , answer : string , willYouMarryMe : boolean , answer2: string) : string => {
    return `Hi ${name} , will you marry me? , ${name} says ${answer} & It's ${willYouMarryMe} , ${answer2}`;
}

console.log(propose("Tisha","Yes", true, "I really really love you,Probir"));
//output: Hi Tisha , will you marry me? , Tisha says Yes & It's true , I really really love you,Probir



// function with default parameter
function add(a: number, b: number = 10): number {
    return a + b;
}
console.log(add(5)); //output: 15

// optional parameter   

const gfname =(firstName : string , lastName ?: string , address:string = "Monirambari,Moniram,Bhola"): string =>{
    return `Miss ${firstName}  ${lastName ??"Sweet Heart"} , Born in ${address}`;
}
console.log(gfname("Tisha","Dey")) //output: Miss Tisha  Dey , Born in Monirambari,Moniram,Bhola
console.log(gfname("Tisha")) //output: Miss Tisha  Sweet Heart , Born in Monirambari,Moniram,Bhola
console.log(gfname("Tisha","Dey","Dhaka")) //output: Miss Tisha  Dey , Born in Dhaka
console.log(gfname()) //output: Miss undefined  Sweet Heart , Born in Monirambari,Moniram,Bhola


// function with rest parameter
const addAll = (...numbers:number[]):number =>{
    return numbers.reduce((acc : number , curr : number) => acc + curr,0);
}   

console.log(addAll(125,225,035,474,547)); //output: 1406
console.log(addAll(125,225,0o35)); //output: 385
console.log(addAll(125,225)); //output: 350
console.log(addAll(125)); //output: 125
console.log(addAll()); //output: 0

// spread oprator
const numbers = [1,2,3,4,5];
const numbers2 = [6,7,8,9,10];
const allNumbers = [...numbers, ...numbers2,100,110,120];
console.log(allNumbers); 
// output: [1,2,3,4,5,6,7,8,9,10,100,110,120]

const userName = {name : "Tisha", age: 21, address: "Monirambari,Moniram,Bhola"};
const userName2 = {phone: 454679, email: "tishadey2025@gmail.com"};
const userData = {...userName,lover: "Probir"};
console.log(userData);
// output: { name: 'Tisha', age: 21, address: 'Monirambari,Moniram,Bhola', lover: 'Probir' }
const userData2 = {...userName, ...userName2, lover: "Probir"};
console.log(userData2);
// output: { name: 'Tisha', age: 21, address: 'Monirambari,Moniram,Bhola', phone: 454679, email: '


// array destructuring
const fruits = ["Apple", "Banana", "Orange", "Mango","Grapes","Guava"];
const [fruits1,fruits2,...restfruits] = fruits;
console.log(fruits1); //output: Apple
console.log(fruits2); //output: Banana
console.log(restfruits); //output: [ 'Orange', 'Mango' ]
console.log(restfruits); //output: [ 'Orange', 'Mango', 'Grapes', 'Guava' ]
console.log(restfruits.length); //output: 4
console.log(fruits.length); //output: 6
console.log(fruits[0]); //output: Apple
console.log(fruits[1]); //output: Banana


// object destructuring
const user = {
    userName: "Tisha",
    age: 21,
    address: "Monirambari,Moniram,Bhola",
    phone: 454679,
    email: "tishadey2025@gmail.com",
    lover: "Probir",
    hobbies: ["Reading", "Writing", "Traveling"],
    education: {
        school: "Monirambari High School",
        college: "Bhola Govt. College",
        university: "Dhaka University",
    },
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js"],
    isMarried: false,
    isEngaged: true,
}

const {userName: userFullName, age, address, phone, email, lover, hobbies, education, skills, isMarried, isEngaged} = user;
console.log(userName); //output: Tisha
console.log(age); //output: 21
console.log(address); //output: Monirambari,Moniram,Bhola

//Ternary operator
const ageInfo = 25;
const canVOte = ageInfo >= 18 ? "You can vote" : "You can't vote";
console.log(canVOte); //output: You can vote

// optional chaining
const userInfo = {
    userName: "Tisha",
    age: 21,
    address: "Monirambari,Moniram,Bhola",
    phone: 454679,
    email: "tishadey2025@gmail.com"
}

console.log(userInfo?.userName); //output: Tisha
console.log(userInfo?.age); //output: 21
console.log(userInfo?.address); //output: Monirambari,Moniram,Bhola
console.log(userInfo?.phone); //output: 454679
console.log(userInfo?.email); //output: 
console.log(userInfo?.lover); //output: undefined
console.log(userInfo?.lover?.name); //output: undefined



// nullish coalescing operator ("??")
// The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand.
// It is similar to the logical OR operator (||), but it only considers null and undefined as "nullish" values, while || considers any falsy value (like 0, "", false, NaN) as "false".
// This means that if the left-hand operand is null or undefined, the right-hand operand will be returned. Otherwise, the left-hand operand will be returned.
// The nullish coalescing operator is useful for providing default values for variables or function parameters when the value is null or undefined, but not when it is a falsy value like 0 or "".

const inputValue = null;
const defaultValue = "Default Value";
const finalValue = inputValue ?? defaultValue;
console.log(finalValue); //output: Default Value
const inputValue2 = 0;
const defaultValue2 = "Default Value";
const finalValue2 = inputValue2 ?? defaultValue2;
console.log(finalValue2); //output: 0
const inputValue3 = undefined;
const defaultValue3 = "Default Value";
const finalValue3 = inputValue3 ?? defaultValue3;
console.log(finalValue3); //output: Default Value
const inputValue4 = "Hello";
const defaultValue4 = "Default Value";
const finalValue4 = inputValue4 ?? defaultValue4;
console.log(finalValue4); //output: Hello
const inputValue5 = "";
const defaultValue5 = "Default Value";
const finalValue5 = inputValue5 ?? defaultValue5;
console.log(finalValue5); //output: ""
const inputValue6 = false;
const defaultValue6 = "Default Value";
const finalValue6 = inputValue6 ?? defaultValue6;
console.log(finalValue6); //output: false
const inputValue7 = NaN;
const defaultValue7 = "Default Value";
const finalValue7 = inputValue7 ?? defaultValue7;
console.log(finalValue7); //output: NaN


// never types

function myCrush(name : string) : never {
    throw new Error("My Crush is " + name);
}

console.log(myCrush("Tisha")); //output: Uncaught Error: My Crush is Tisha


// The never type is a special type in TypeScript that represents values that never occur.
// It is used to indicate that a function will never return a value, either because it always throws an error or because it has an infinite loop.
// The never type is a subtype of every type, meaning that you can assign any value to a variable of type never.
// However, you cannot assign a value of type never to any other type, because it indicates that the value will never occur.
// The never type is useful for functions that are expected to throw an error or have an infinite loop, as it allows you to indicate that the function will never return a value.
// For example, the following function has an infinite loop and will never return a value:
function infiniteLoop() : never {
    while (true) {
        console.log("This is an infinite loop");
    }
}
// The never type is also useful for functions that are expected to throw an error, as it allows you to indicate that the function will never return a value.
function throwError(message: string): never {
    throw new Error(message);
}
// The never type is also useful for functions that are expected to throw an error, as it allows you to indicate that the function will never return a value


// unknown type

// The unknown type is a special type in TypeScript that represents any value, but is safer than the any type.
// It is used to indicate that a value can be of any type, but you cannot perform any operations on it without first checking its type.
// The unknown type is a supertype of all types, meaning that you can assign any value to a variable of type unknown.
// However, you cannot assign a value of type unknown to any other type without first checking its type.
// The unknown type is useful for functions that can accept any value, but you want to ensure that the value is of a specific type before performing any operations on it.


let value: unknown;
value = 42; // OK
value = "Hello My Love,Tisha Rani"; // OK
value = true; // OK
value = null; // OK
value = undefined; // OK
value = {}; // OK
value = []; // OK
value = () => {}; // OK
value = Symbol(); // OK
value = BigInt(42); // OK
value = new Date(); // OK
value = /regex/; // OK
value = new Error("Error"); // OK
value = new Map(); // OK
value = new Set(); // OK
value = new WeakMap(); // OK

if (typeof value === "string") {
    console.log(value.toUpperCase()); //output: HELLO MY LOVE,TISHA RANI
}
if (typeof value === "number") {
    console.log(value.toFixed(2)); // output: 42.00
}


// nullable types
// The nullable type is a special type in TypeScript that represents a value that can be null or undefined.
// It is used to indicate that a value can be null or undefined, and you can perform operations on it without checking its type.
let userNameInfo: string | null = null;
let userAgeInfo: number | null = null;
let userAddressInfo: string | null = null;
let userPhoneInfo: number | null = null;
let userEmailInfo: string | null = null;
let userLoverInfo: string | null = null;

userNameInfo = "Tisha";
userAgeInfo = 21;
userAddressInfo = "Monirambari,Moniram,Bhola";
userPhoneInfo = 454679;
console.log(userNameInfo); //output: Tisha

//example of nullable type
function getUserInfo(userName: string | null, userAge: number | null): string {
    if (userName === null || userAge === null) {
        return "User not found";
    }
    return `User name is ${userName} and age is ${userAge}`;
}
console.log(getUserInfo("Tisha", 21)); //output: User name is Tisha and age is 21
console.log(getUserInfo(null, 21)); //output: User not found
console.log(getUserInfo("Tisha", null)); //output: User not found
console.log(getUserInfo(null, null)); //output: User not found 