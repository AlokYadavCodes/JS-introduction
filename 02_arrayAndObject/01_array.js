let myArray = [11,22,33,44,55];
// console.log(myArray);
// console.log(myArray.length);  //4
let mixArray=[2,5,"alok",true,null,"any data type"]
// console.log(mixArray[2]);

// Array methods:
myArray.push(6,7);
// console.log(myArray);
let popped=myArray.pop();
// console.log(popped);
// console.log(myArray);

myArray.unshift(7,8);
// console.log(myArray);
popped=myArray.shift();
// console.log(popped);
// console.log(myArray);

// Conclusion:
//     Push and unshift for adding one or more element: push to the end, unshift to the beginning.
//     Pop and shift for removing: pop from the end, shift from the beginning.

//-------------------------------------------------------------------------------------

// Other methods:
// console.log(myArray.includes(3));  // true
// console.log(myArray.includes(5));  // false
// console.log(mixArray.indexOf("alok"));  //2
// console.log(mixArray.indexOf("not present")); //-1

//join(separator): Joins all elements of an array into a string,
// separated by the specified separator (optional comma by default).

let newArr=myArray.join("=>");
// console.log(newArr);
// console.log(typeof newArr);  //string

//-------------------------------------------------------------------------------------

// slice and splice method:

// slice syntax: myArray.slice(start_index, end_index)
// Purpose: Creates a copy of a portion of an array into a new array.
// start_index=> optional (by default 0)                 (inclusive)
// end_index=> optional (by default length of the array) (exclusive)
// Returns: A new array containing the extracted elements.
// it DOES NOT modify the original array

let slicedArray=myArray.slice();
// console.log(`sliced array: ${slicedArray}`);
// console.log(`myArray: ${myArray}`);
slicedArray=myArray.slice(2,5);
// console.log(`sliced array: ${slicedArray}`);
// console.log(`myArray: ${myArray}`);

// splice syntax: myArray.splice(start_index, no_of_elements_to_delete, item1, ..., itemN);
// Purpose: Removes elements from an array and/or inserts new elements in place.
// start_index=>required
// no_of_elements_to_delete=> optional (by default 0)
// item1,...,itemN=>(optional) elements to add at from start_index after deleting the (no_of_elements_to_delete) elements.
// Returns: An array containing the removed elements (if any).
// MODIFIES the original array.



//inserting elements in between of the array:
// console.log(myArray[2]);
myArray.splice(2,0,100,200,"added using splice");
// console.log(myArray);


//---------------------------------------- Part 2 -------------------------------------

const compiledLang=["C", "Go", "Rust", "Java"];
const interpretedLang=["JavaScript", "Python", "Ruby", "PHP"];

//const: When we declare an array with const, the variable itself cannot be reassigned to a new array.
// However, we can still modify the elements within the array.
// compiledLang.push("pushedItem");  //works
// // compiledLang=["reassigning","item2"];  //error
//
// console.log(compiledLang);
//
// let copyOfCompiledLang=compiledLang;
// copyOfCompiledLang[0]="CPP";   //changes both arrays (both have same reference)
//
// console.log(copyOfCompiledLang);
// console.log(compiledLang);



// Concatenating two arrays:

// compiledLang.push(interpretedLang);
// console.log(compiledLang);
// console.log(compiledLang[4][2]);
//the whole array (interpretedLang) is pushed as a single item in the compiledLang.

// we have passed a reference to push method, that means any modification in interpretedLang
// will be reflected in compiledLang


// Let's see a better way to concatenate multiple arrays:

const allLang=compiledLang.concat(interpretedLang);
// all elements are pushed to 'allLang' array as individual item. No modification to original arrays.
// concatenated array is not affected by changes in original arrays after concatenation.
// console.log(`allLang: ${allLang}`);
// console.log(`compiledLang: ${compiledLang}`);
// console.log(`interpretedLang: ${interpretedLang}`);


// multiple arrays concatenation:
const tempArr=[11,22,33,44];
let multipleConcat=tempArr.concat(compiledLang,interpretedLang,"addedUsingConcat",101);
// console.log(multipleConcat);


// Here's a modern way to concatenate arrays:
//Spread Operator:
const OS=["Windows","Linux","MacOS",["nested array","item1",2]];
multipleConcat=[...OS, ...compiledLang, ...interpretedLang];
// console.log(multipleConcat);

// How to flatten array:
const nestedArr=[11,22,[33,44],[55,[66,[77,88]]]];
// console.log(nestedArr);
// console.log(JSON.stringify(nestedArr,));  // in case if the above line does not show elements after a depth of 2

let flatArr=nestedArr.flat();    //flat(depth);
// console.log(flatArr);
flatArr=nestedArr.flat(Infinity);
// console.log(flatArr);


// --------------------------------------------------------------------------------
// Array Object methods:

// 1. Array.isArray()

// console.log(Array.isArray(compiledLang));  // true
// console.log(Array.isArray([1,2,3]));   // true
// console.log(Array.isArray("hello"));   // false


// 2. Array.from()
const createdArr=Array.from("hello");
// console.log(createdArr);
const numArr=[1,2,3,4,5];
// console.log(numArr);
const newNumArr=Array.from(numArr,(x)=>x*3);
// console.log(newNumArr);


// 3. Array.of()
const arrOfNums=Array.of(1,2,"three",4,"five");
console.log(arrOfNums);


