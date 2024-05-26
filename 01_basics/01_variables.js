//There are three ways to declare variables.
//1. let
//2. const
//3. var (outdated)

//------------------------------------------------------------------------
//The problem with var:
var hi="Hi";   //or var='Hi'. (there is no difference in using single or double quote)
//We can use quotes inside a string, as long as they don't match the quotes surrounding the string.
var hi="Hi again";
console.log(hi);  //Hi again
// Problem 1 (or say Property): Re-declaration is allowed

// console.log(hello);  //Reference error  ('hello' is not declared)
var greet;
console.log(greet);  //undefined (variable declared but not initialized)

console.log(bye);   //undefined
var bye="Bye";
//we get undefined for 'bye' because var is hoisted.
//i.e. the interpreter move the declaration to the top of their SCOPE, prior to execution of the code.


//--------------------------------------------------------------------------
//Let's have a look at different types of scope:
//Javascript variables have 3 types of scope:
//1. Block Scope  (accessible inside a block i.e. {})
//2. Function Scope
//3. Global Scope


//Let's look an example to understand the scope of var:
function myFunction(){
    if(1<2){
        var var1="this is var1";
        console.log(var1);  //this is var1
    }
    console.log(var1);  //this is var1
}
myFunction();  //function calling
// console.log(var1);  //Reference Error

// So, the conclusion is that var doesn't have block scope. It has only function and global scope.
// If the var is declared inside a function, (within or without a block), it has function scope.
// otherwise it has global scope.

// So far we have talked about var. It is just for understanding purpose, it is strongly recommended
// to not use var.

//-----------------------------------------------------------------------------------

//Now let's talk about the 'let':

// let:
// -> has all the three scopes.
//-> can't be re-declared in the same scope.
let name="Amit";
// let name="Aman";  //Syntax error
console.log(name);  //Amit
{
    let name="Sumit";
    console.log(name);  //Sumit
}
console.log(name); //Amit


// console.log(let1);  //reference error (let is not hoisted)
let let1="this is let1";
//-----------------------------------------------------------------------------------

//Now let's talk about the 'const':

//it is same as 'let'. The only difference is that once initialized, its value can't be changed.
// const userId;  //error ('const' variable without initializer is not allowed)
const userId=434;
// userId=534; //error
