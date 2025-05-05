{

// destructing 

// object destructing
const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const {name , age , address : {city,zip}} = person;
//console.log(name,age,city,zip); // Output: John 30 New York 10001


// array destructing

const myFriensds = ['John', 'Jane', 'Jack','Tisha' ,'Jill', 'Joe'];

const [,,,myLove,...rest] = myFriensds;
//console.log(myLove); //
//console.log(rest); // Output: ['Jill', 'Joe' ]

const [firstFriend, secondFriend, ...restOfFriends] = myFriensds;
//console.log(firstFriend); // Output: John
//console.log(secondFriend); // Output: Jane
//console.log(restOfFriends); // Output: [ 'Jack', 'Tisha', 'Jill', 'Joe' ]




}