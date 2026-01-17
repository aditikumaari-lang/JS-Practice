// for loop

for (let i = 0; i < 5; i++) {
    console.log("Hello" +i);
}

// Program to add first n natural number 
let sum = 0;
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i +1)
}

console.log("Sum of first" + n + "natural number is" +sum )

// Enter the value of n "54"
// Sum of first54natural number is 1485 

// Example of for-in loop in Javascript
// Iska use object ki properties ko iterates(to repeat) karne ke liye karte hai. 

const person = {
    name: "Aditi",
    age: 21,
    city: "Uttar Pradesh" 
};

for (let key in person) {
    console.log(key + ":" + person[key]);
}
// OUTPUT 
// name: Aditi
// age: 21
// city: Uttar Pradesh