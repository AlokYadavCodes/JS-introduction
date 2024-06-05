// In JavaScript, truthy/falsy define how non-boolean values act like true/false in conditions (if statements) and logic (&&, ||)

// there are only 6 falsy values:

// 1. false (boolean)
// 2. 0 (in any form: 0,+0,-0, BigInt 0n, 0+0, 0.0, 0*0)
// 3. empty string (no space: "" );  (with space(s): " "=> true)
// 4. null
// 5. undefined
// 6. NaN

// all the other values are considered as truthy.

// few confusing examples of truthy values are: (below all are truthy values)
// [] (empty array)
// {} (empty object)
// "false"  (string)
// "0" (string)
// " " (string with spaces)
// function(){}

//----------------------------------------------------------------------------------

// nullish coalescing operator (??):

let val1=null;
console.log(val1);
let val2=val1??10;
// if value of val1 is 1. null or 2. undefined, then 10 is assigned to val2
console.log(val2);


// we can use it multiple time as:
val3=val1??val2??20
// it first checks for val1, if it is null or undefined then checks for val2 and so on.
console.log(val3);
