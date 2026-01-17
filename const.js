//Q1.Create a vaiable of type string and try to add a numbers to it
  let str = "Hello ";
  let num = 10;

  let result = str + num;
  console.log(result);
// Output Hello 10


//Q2. Create a const object in JavaScript can you change it to hold a number later?

     const person = {
      name: "Aditi",
      age: 25
    };

   console.log(person);
//Output //{ name: 'Aditi', age: 25 }


//change the object 
person.age = 26;      // property change 
person.city = "Delhi"; // new property ad 

console.log(person);

//(node const.js) write the terminal

//{ name: 'Aditi', age: 26, city: 'Delhi' }

//Q3. Try to add a new key to the const object in problem 3 were you able to do it?
   const person = {
   name: "Aditi",
   age: 25
 };

//Ham isme new key add kar rahe hain
person.city = "Delhi";

console.log(person);
//Output { name: 'Aditi', age: 25, city: 'Delhi' }
//Answer :-- Yes, hum const object mein new key add kar sakte hain.


//Q4. Wite a JS program to create a word-meaning dictionary of 5 words. 
   const dictionary = {
      apple: "A sweet red or green fruit",
      book: "A set of written or printed pages",
      computer: "An electronic machine that processes data",
      river: "A natural flowing water body",
      happy: "Feeling or showing pleasure and contentment"
  
};

// Print the dictionary
console.log(dictionary);

// Print individual meanings
console.log("Meaning of apple:", dictionary.apple);
console.log("Meaning of book:", dictionary.book);

                        //Chapter 2.... Practice 2

// Q1. Use logical operator to find whether the age of a person lies between 10 and 20?
   let age = 15; 

   if (age >= 10 && age <= 20) { // (age >= 10) age 10 se zyada ya barabar hai? or (age >=20) age 20 se kam ya barabar hai?  && means dono condition true hone chahiye
    console.log("Age is between 10 and 20");
  } else {
  console.log("Age is NOT between 10 and 20");
}

//  OUTPUT :-- Age is between 10 and 20

// Q2. Demonstrate the use of switch case statements in JavaScript
let num1 = 20;
let num2 = 4;
let operator = "+";

switch (operator) { // operator ki value check hogi  
  case "+":
    console.log(num1 + num2);
    break; // ye switch statement ko yahi pe stop kar dega or agar break na ho to program next case ko bhi chala deta hai, jise fall-through bolte hai
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid operator"); // Agar operator inmein se koi bhi na ho to, to "invalid operator" print hoga
}

// OUTPUT :-- 24


// Q3. Write a JavaScript program to find whether a number is divisible by 2 and 3?
 let number = 12;
 if (number % 2 === 0 && number % 3 === 0) {
  console.log("Number is divisible by both 2 and 3");
  } else {
  console.log("Number is NOT divisible by both 2 and 3");
 }
 //OUTPUT :-- Number is divisible by both 2 and 3


// Q 4. Write a JavaScript program to find whether a number is divisible by either 2 and 3?
let number = 9;

if (number % 2 === 0 || number % 3 === 0) {
  console.log("Number is divisible by either 2 or 3");
} else {
  console.log("Number is NOT divisible by 2 or 3");
}
// OUTPUT :-- Number is divisible by either 2 or 3


// Q 5. Print "You Can Drive" or "You Cannot Drive" based on age being greater than 18 using ternary operator.
 let age = 21;

 let result = age > 18 ? "You Can Drive" : "You Cannot Drive"; // (age > 18)Condition hai// (?)Ternary operate ka use kiya hai
 console.log(result);
 //OUTPUT:-- You Can Drive
