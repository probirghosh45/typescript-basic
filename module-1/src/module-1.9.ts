{
// type alias 

type UserData = {
    name: string;
    age: number;
    isStudent: boolean;
    email: string;
    phoneNumber: number;
    city: string;
    country: string;
} 


const userData : UserData = {
    name :  "Tisha Dey",
    age : 21,
    isStudent : true,
    email : "tishadey2025@gmail.com",
    phoneNumber : 1234567890,
    city : "Bhola",
    country : "Bangladesh",
}


const userData2 : UserData = {
    name : "Probir Ghosh",
    age : 22,
    isStudent : false,
    email : "probirghosh2025@gmail.com",
    phoneNumber : 1234567890,
    city : "Bhola",
    country : "Bangladesh"
}

type UserName = string;
type IsAdmin = boolean;
type UserId = number;

const userName: UserName = "Tisha Dey";
const isAdmin: IsAdmin = true;
const userId: UserId = 1234567890;
const userName2: UserName = "Probir Ghosh";
const isAdmin2: IsAdmin = false;
const userId2: UserId = 1234567890;

// function alias
type Add = (num1 : number , num2 : number) => number;

const add : Add = (num1,num2) => num1 + num2;
const result = add(5,10);
//console.log(result); // Output: 15
const result2 = add(10,20);
//console.log(result2); // Output: 30














}