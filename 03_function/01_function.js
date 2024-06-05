// syntax:

// Method 1:  hoisted
// console.log(addTwoNum(3,1));  //works (because of hoisting)
function addTwoNum(num1, num2) {
    return num1+num2;
}
// console.log(addTwoNum(5,10));  //15

function greeting(name="Sir"){  //default value to name is Sir
    return `Good Morning ${name}`;
}
// console.log(greeting("Alok"));


// Method 2: (not hoisted)

// console.log(addOne(11));  //error (not hoisted)
const addOne=function(num){
    return num+1;
}
// console.log(addOne(15));


// Method 3:  (not hoisted)

console.log(addTwo(55)); //error (not hoisted)
const addTwo=(num)=>{
    return num+2;
}
// console.log(addTwo(31));
//------------------------------------------------------------------------

// rest parameter:
function sum(val1,val2, ...nums){
    return nums;  //returns array of values passed in parameter
}
// console.log(sum(1,2,3,4,5));