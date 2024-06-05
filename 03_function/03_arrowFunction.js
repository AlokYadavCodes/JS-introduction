let greeting=()=>{
    console.log("Hello World");
}
greeting();

// let SumTwoNum=(num1,num2)=>{
//     return num1+num2;   //explicit return
// }
// console.log(SumTwoNum(2,5));

// implicit return in arrow function:
let SumTwoNum=(num1,num2)=> num1+num2 //or (num1+num2)
// console.log(SumTwoNum(2,5));

// both function are same;
// when we use curly braces after arrow, we have to explicitly write return keyword, otherwise not


//----------------------------------------------------------------------------------
//let's return an object using arrow function by implicit return:
// let returnObj=()=>{name:"Alok"};   //not the correct way to return object
// console.log(returnObj());    //undefined

// here's the correct way:
let returnObj=()=>({name:"Alok"});
console.log(returnObj());
