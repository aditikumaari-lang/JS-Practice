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
