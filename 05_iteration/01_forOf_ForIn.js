// while, do-while, for loop -> same as in C
// break and continue -> same as in C
// switch case -> same as in C
//-------------------------------------------------------------------------------------------

// all loops works on iterable objects (don't confuse object with object{}).
// examples of iterable objects are:
// Arrays
// Strings
// Sets
// Maps
// Arguments Object (Function Arguments)
// TypedArrays (e.g., Uint8Array, Float64Array)
// String Iterator
// Custom Iterables

//--------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7];

// for loop:
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
}

// while loop:
let i=0;
while(i<numbers.length){
    // console.log(numbers[i]);
    i++;
}

// do-while loop: (executes at-least one time, irrespective of the condition)
let j=0;
do {
    // console.log(numbers[j]);
    j++;
}while(j<numbers.length);

//-----------------------------------------------------------------------------------

// for of loop:
for (const num of numbers) {
    // console.log(num);
}
// no need to initialize another variable for iteration, checking condition, doing increment.
// all these are handled by "for of" loop implicitly.

// for of loop on map

const myMap = new Map();
myMap.set('name','Alok');
myMap.set('age',10);
myMap.set('key','value');

for (const val of myMap) {
    // console.log(val);
}
// we get an array of key-value pair

// let's see how to get key and values separately:
for (const [key, value] of myMap){
    // console.log(`Key is: ${key} ; Value is: ${value}`);
}

// let's try for of loop on objects:
const obj1={
    a:1,
    b:2,
    c:3,
}
// for (const [key, value] of obj1){
//     console.log(`Key is: ${key} ; Value is: ${value}`);
// }
// error: obj1 is not iterable
// By default, objects ({}) in JS are not directly iterable using a for...of loop or methods like map() and filter()

//-------------------------------------------------------------------------------------
// there is also a loop named: for in loop

// it gives the key of the object
for (const key in obj1){
    // console.log(`key is: ${key} ; Value is: ${obj1[key]}`);
}

// it works with objects ({}) also

// let's try for in loop on arrays

let newArr=["hello","world",11,22,true];
for (const key in newArr){
    // console.log(`key is: ${key} ; Value is: ${newArr[key]}`);
}

// let's try for in loop on maps
for (const key in myMap){
    console.log(`key is: ${key}`);
    console.log("hi");
}
// no output for the above loop
// for in loop is not used with maps.
// Maps and for in loops don't work together smoothly for two reasons:
// 1) Maps don't inherit properties from other objects
// 2) for in loops iterate over property names (keys) of an object, not necessarily the key-value pairs themselves.