//Easiest and common ways to define strings are:
let name="Alok";
const surName='Yadav';
console.log(name.length);  //4

//concatenation:

// console.log("My name is " + name + " and surname is " + surName);
// //a modern and recommended way to do concatenation is:
// console.log(`My name is ${name} and surname is ${surName}`);  //more readable and modern syntax
name+=surName;
console.log(name); //AlokYadav


//we have several function available with strings, such as:
// console.log(name.toUpperCase());
// console.log(name.charAt(1));
// console.log(name.substring(3,1));


//------------------ Exploring substring function -------------------------------
//                  012345678
const str = "Hello, world!";
console.log("exploring substring function: ");
console.log(str.substring(0));      // Hello, world!
console.log(str.substring(2));      // llo, world!
console.log(str.substring(-3));     // Hello, world!
console.log(str.substring(100));    // null string
console.log(str.substring(3,5));    // lo
console.log(str.substring(5,3));    // lo
console.log(str.substring(3,100));  // lo, world!
console.log(str.substring(-3,4));   // Hell
console.log(str.substring(100,200) + "there is a null string before me" );  // ""+there is...
console.log(str.substring(-5,-2) + "there is a null string before me");     // ""+there is...

// Conclusion:
// substring(start_index, end_index);
// start_index=> inclusive
// end_index=> exclusive
// if only one argument passed=> treated as start_index and substring contains string from start_index to the end of the string(i.e. length of the string).
// if start_index<0 => start_index is set to 0
// if end_index>length of the string => end_index is set to length of the string
// if start_index && end_index > length || start_index && end_index <0 => null string
// if start_index > end_index => both values are swapped


//------------------ Exploring slice function -------------------------------
//  0123456789   (for positive index)
//  Hello, world!
//      987654321   (for negative index)
console.log("exploring slice function: ");
console.log(str.slice(-6));     // world!
console.log(str.slice(-6,-2));  // worl
console.log(str.slice(5,3) + "there is a null string before me" );     // ""+there is...
console.log(str.slice(-3,-5) + "there is a null string before me");    // ""+there is...
console.log(str.slice(100,200) + "there is a null string before me");  // ""+there is...

// Conclusion:
// Same as substring function, the only differences are:
// 1. index with negative value are read from the end of the string.
// 2. here swapping is not done. (null string is returned).

//--------------------------------------------------------------------------

// There is also another function for sub string, i.e. substr: DON'T USE (Deprecated)
console.log(str.substr(3,2));  //lo
// substr(from_index, lengthOfSubstring);

//---------------------------------------------------------------------------

//trim function:
let greeting="   Hello    Sir       ";
console.log(greeting);
greeting=greeting.trim();  // removes the whitespaces from the beginning and end of the string. (not in-between)
console.log(greeting);


