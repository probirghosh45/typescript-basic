// Basic Types : string,number,boolean,any,void,null,undefiend

let userName: string = "Tisha Dey";
let age: number = 21;
let isStudent: boolean = true;
let hobbies: string[] = ["Reading", "Writing", "Traveling"];

age = "moniram"; // Error: Type 'string' is not assignable to type 'number'
// age = 21; // Correct: Type 'number' is assignable to type 'number'

// userName = 123; // Error: Type 'number' is not assignable to type 'string'
// userName = "Tisha Dey"; // Correct: Type 'string' is assignable to type 'string'
// isStudent = 1; // Error: Type 'number' is not assignable to type 'boolean'
// isStudent = true; // Correct: Type 'boolean' is assignable to type 'boolean'
// hobbies = 123; // Error: Type 'number' is not assignable to type 'string[]'

let data: any = "Hi Tisha Dey";
data = 123; // Correct: Type 'number' is assignable to type 'any'
data = true; // Correct: Type 'boolean' is assignable to type 'any'
data = null; // Correct: Type 'null' is assignable to type 'any'
data = undefined; // Correct: Type 'undefined' is assignable to type 'any'

function logMessage(): void {
  console.log("I Love You, Tisha");
}

// Union Types
let userId: string | number;
userId = "Tisha Dey"; // Correct: Type 'string' is assignable to type 'string | number'
userId = 123; // Correct: Type 'number' is assignable to type 'string | number'
// userId = true; // Error: Type 'boolean' is not assignable to type 'string | number'
// userId = null; // Error: Type 'null' is not assignable to type 'string | number'
// userId = undefined; // Error: Type 'undefined' is not assignable to type 'string | number'
// userId = []; // Error: Type 'never[]' is not assignable to type 'string | number'
// userId = {}; // Error: Type '{}' is not assignable to type 'string | number'
// userId = Symbol(); // Error: Type 'symbol' is not assignable to type 'string | number'
// userId = BigInt(123); // Error: Type 'bigint' is not assignable to type 'string | number'

// Literal Types
let userStatus: "active" | "inactive" | "pending";
userStatus = "active"; // Correct: Type '"active"' is assignable to type '"active" | "inactive" | "pending"'
userStatus = "inactive"; // Correct: Type '"inactive"' is assignable to type '"active" | "inactive" | "pending"'
// userStatus = "deleted"; // Error: Type '"deleted"' is not assignable to type '"active" | "inactive" | "pending"'
// userStatus = 123; // Error: Type 'number' is not assignable to type '"active" | "inactive" | "pending"'

//tuple types

let user: [string, number, boolean];
user = ["Tisha Dey", 21, true]; // Correct: Type '[string, number, boolean]' is assignable to type '[string, number, boolean]'
// user = [21, "Tisha Dey", true]; // Error: Type '[number, string, boolean]' is not assignable to type '[string, number, boolean]'
// user = ["Tisha Dey", 21]; // Error: Type '[string, number]' is not assignable to type '[string, number, boolean]'

// enum types
enum UserStatus {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}
let myStatus: UserStatus.Active;

enum UserRole {
  "Admin",
  "User",
  "Guest",
}

let myRole: UserRole.Guest;
// myRole = UserRole.Admin; // Correct: Type 'UserRole.Admin' is assignable to type 'UserRole.Guest'
// myRole = UserRole.User; // Correct: Type 'UserRole.User' is assignable to type 'UserRole.Guest'
// myRole = "Admin"; // Error: Type '"Admin"' is not assignable to type 'UserRole.Guest'

//type alias

type ID = string | number;
let userId1: ID = "Tisha Dey"; // Correct: Type 'string' is assignable to type 'ID'
let userId2: ID = 123; // Correct: Type 'number' is assignable to type 'ID'
// userId1 = true; // Error: Type 'boolean' is not assignable to type 'ID'

// intersection types

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  email: string;
};

type Address = {
  city: string;
  country: string;
};

// type User = Person & Address;

const userData: Person & Address = {
  name: "Tisha Dey",
  age: 21,
  isStudent: true,
  email: "tishadey2025@gmail.com",
  city: "Monirambari,Moniram,Bhola",
  country: "Bangladesh",
};
