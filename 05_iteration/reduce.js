// .reduce -> reduce the elements of the array to a single value.

const myNums=[1,2,3,4,5,6,7,8,9,10];

// working of reduce method:

// reduce method accepts two parameters: first required and second optional
// first parameter is a callback function called as reducer function.
// second parameter is initialValue. (set the accumulator value as initialValue at the start of the execution of reduce method.)

// the reducer function accepts four parameters: (accumulator, currentValue, index, originalArray)
// the first two parameters are required and other two are optional.

// working of reducer function:

// if the initialValue is not passed in the reduce method, then the first element of the array is assigned to the accumulator
// and no other execution takes place in first iteration.
// the reduce method calls reducer function for each element in the array.
// the value returned by the reducer function is passed as the first argument to the next called reducer function.
// if the reducer function does not return any value then only in the first iteration, accumulator has a value(either initialValue or value of first element)
// and the value of accumulator for all the other iteration is undefined.

// at the end of the iterations, the accumulator value of the last called reducer function is returned by the reduce method.


let total=myNums.reduce(sum);

function sum(acc,curVal,index,arr){
    console.log(`accumulator: ${acc}; curVal: ${curVal}; index: ${index}, arr: ${arr}`);
    arr[index]=curVal*3;
    return acc+curVal;
}
console.log(total);
console.log(myNums); // original array modified