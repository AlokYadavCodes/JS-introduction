let userName="Ramesh Yadav"
// let userName="Mukesh"   Re-declaration is not allowed
console.log(userName)
const userId=121 //change not allowed
let userStatus="Approved";
userType="New"
// userId=3233    It will give error

// for string: use ""   
// for numbers: just write it
// a variable can be declared using 1) let--> perferred    2) var--> never use {scope problem}  3) just write variable name --> not recommended

console.table([userName,userId,userStatus,userType]);