const subjects=["OS","TOC","DSTL","DSA","COA"];
subjects.forEach((value,index,arr)=>{
    // console.log(value, index,arr );
})

// another way to write :
subjects.forEach(function (val){
    // console.log(val);
})
// function defined in forEach loop are without names, called as callback function.

// passing reference of an existing function to forEach:
let print=function (val){
    console.log(val);
}
// subjects.forEach(print);   // passing reference of print
// subjects.forEach(print());  //error (executing print function, not passing reference)
// forEach requires reference of a function

//--------------------------------------------------------------------------------


// using forEach loop on array of objects:
const courses=[
    {
        name: "JS Mastery",
        price: 1500,
    },
    {
        name: "Python in depth",
        price: 1000,
    },
    {
        name: "OOPs with Java",
        price: "free",
    }
]
courses.forEach((obj)=>{
    // console.log(`course: ${obj.name}; price: ${obj.price}`);
})

//-----------------------------------------------------------------------------------

// suppose we want to get subset of an array based on few conditions:
let numArr=[1,2,3,4,5,6,7,8,9];
let newNumArr=[];
// numArr.forEach((value)=>{
//     if(value>=5){
//         newNumArr.push(value);
//     }
// })
// // console.log(newNumArr);

// the same can be done easily using filter method:
newNumArr=numArr.filter((value)=> value>=5);
// console.log(newNumArr);

//------------------------------------------------------------------------------

// suppose we want to do some operation on each item and then store them in a new arr:
let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[];
// arr1.forEach((value)=>{
//     arr2.push(value*2);
// });
// console.log(arr2);

// the same can be done easily using map method:
arr2=arr1.map((value)=> value*2);
// console.log(arr2);

//------------------------------------------------------------------------------

// let's use both filter and map:
arr2=arr1.filter((value)=>value>=5)
         .map((val)=> val*20)
         .map((value)=>value/2);

console.log(arr2);  // 50,60,.....,100
