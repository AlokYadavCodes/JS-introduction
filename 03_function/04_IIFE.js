// IIFE-> Immediately invoked function expression
let check="hello";
(function greeting(){   //named IIFE
    check="bye";  //accessible
    console.log("Good Morning");
})();  // ; is needed if two IIFE functions are in a row

((name)=>{
    console.log(`Mr. ${name}, this is arrow function`);
})("Rob")

console.log("Hello World!");
// greeting();  //reference error
console.log(check);

