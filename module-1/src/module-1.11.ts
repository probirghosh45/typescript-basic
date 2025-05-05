
// ternary operator

let age = 25;
if (age >= 18) {
    // console.log("You are an adult.");
}
else {
    // console.log("You are a minor.");
}

const isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
// console.log({isAdult});


// nullish coalescing operator
const isAuthenticated = ""; // null, undefined, 0, false, NaN
const userName = isAuthenticated ?? "Guest";
const userName2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({userName}, {userName2});


type User = {
    name: string;
    age: number;
    email?: string; // optional property
    address : {
        city: string;
        state: string;
        country: string;
    }
}

const user: User = {
    name: "John Doe",
    age: 30,
    address: {
        city: "New York",
        state: "NY",
        country: "USA"
    }
}

const country: string = user?.address?.country ?? "Country not found";
console.log({country})