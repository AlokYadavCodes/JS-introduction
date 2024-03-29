//JS is a weakly typed language
//here a variable does not have any data type untill it is assigned any value. Any data type can be assigned to the same variable

"use strict";  // Treat all the below codes as per new version which is better at handling errors and there is some changes in the meaning of few semantics. The browser must be supporting the newer version otherwise all the code will be treated like older version of JS

let hi="hello"   //1)string data type
console.log(hi)
console.log(typeof hi)
hi=3             //2)numbers data type
console.log(hi)
console.log(typeof hi)
hi=true          //3)boolean data type
console.log(hi)
console.log(typeof hi)
hi=BigInt(3434343343); //4) BigInt --> appends n to the end of the value
console.log(hi)
console.log(typeof hi)

console.log(typeof "Alok")

let bye  //5) undefined data type
console.log(bye)
console.log(typeof bye)

let data=null
console.log(data)         //6) null data type
console.log(typeof data)   //type of null is object

let newvariable=Symbol("hello world")
console.log(newvariable)        //7) symbol data type
console.log(typeof (newvariable))


//  ******************************DataType-Summary********************************

// 1)Primitive Data Types: Above 7 data types
// 2)Non-Primitive Data Types: 
                    // a). Arrays
                    // b). Objects (Functions are similar to objects but they are callable)

        
let myArray=["hi","hello", "brother"]
console.log(myArray)
console.log(typeof(myArray))   // type--> object

let myObject={
    name: "alok",
    surname: "yadav"
}
console.log(myObject)
console.log(typeof(myObject))   // type--> object

let myFunction=function(){
    console.log("This is written inside the myFunction")
    console.log("this is another line inside the function")
}
myFunction()    //calling of function
console.log(typeof(myFunction))   // type--> function

console.log(typeof(undeclared_var))   // undefined



