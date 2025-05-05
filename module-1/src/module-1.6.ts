//Learning functional programming with TypeScript
//Normal fuction
//arrow function

function addTwoNumbers(num1:number,num2:number):number{
    return num1+num2;
}

console.log(addTwoNumbers(5,10)); // Output: 15

//arrow function

const addTwooNumbers= (num1:number,num2:number):number=> num1+num2;
console.log(addTwooNumbers(7,6));  // Output: 13

//object --> function --> method

const person ={
    userName :"Tisha Dey",
    age : 21,
    isStudent : true,
    balance : 1000,
    addBalance (balance : number):number{
        // return `New Balance is ` + (this.balance + balance);
        // return `New Balance is ${this.balance + balance}`;
        return this.balance+balance;
    }
}


console.log(person.addBalance(100)); // Output: 1100


//calback function

const arr:number[] = [1,2,3,4,5];
const newArr:number[] = arr.map((num:number):number => num*num);
console.log(newArr); // Output: [1, 4, 9, 16, 25]


