// Referenece Type --> Object

type TuserInfo ={
    name: string;
    age: number;
    isStudent: boolean;
    email: string;
    readonly city: string;
    country: string;
    cellPhone?: string; // Optional property
    address?: string; // Optional property
    readonly lover: "Probir Ghosh" // Literal type

} 

const userInfo : TuserInfo = {
    name: "Tisha Dey",
    age: 21,
    isStudent: true,
    email: "tishadey2025@gmail.com",
    address: "Monirambari,Moniram,Borhanuddin",
    city: "Bhola",
    country: "Bangladesh",
    lover: "Probir Ghosh",
}

console.log(userInfo); // Output: { name: 'Tisha Dey', age: 21, isStudent: true, email: 'tishadey2025@gmail.com', city: 'Bhola', country: 'Bangladesh' }

userInfo.lover ="PK" // Error: Cannot assign to 'lover' because it is a read-only property
userInfo.name = undefined  // Error: Type 'undefined' is not assignable to type 'string'
userInfo.name = "CSK" // Correct: Type 'string' is assignable to type 'string'
userInfo.city = "Dhaka" // Error: Cannot assign to 'city' because it is a read-only property




