const balance=23.48;
console.log(balance.toFixed(1));
// toFixed(): round the decimal part upto the given argument.  (23.48).toFixed(1)=> 23.5

const id=3894320;
const idHex=id.toString(16);
console.log(idHex);
// toString(): convert the number to string in specified base (commonly 2,8,10,16).

const preciseId=id.toPrecision(2);
console.log(preciseId);
console.log(typeof preciseId);  //string
// toPrecise(): returns a string representation of the number, rounded to the specified precision.

console.log((32343232).toLocaleString("en-IN"));


// ------------------------------- Maths ------------------------------------

// most commonly used math methods are:

// Math.abs(x): Returns the absolute value (positive version) of a number.
// Math.ceil(x): Rounds a number up to the nearest integer.
// Math.floor(x): Rounds a number down to the nearest integer.
// Math.round(x): Rounds a number to the nearest integer (closer to zero rounds to zero).
// Math.pow(x, y): Raises a number x to the power of y.
// Math.sqrt(x): Calculates the square root of a number.
// Math.min(x1, x2, ...): Returns the smallest number among the provided arguments.
// Math.max(x1, x2, ...): Returns the largest number among the provided arguments.
// Math.random(): Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

//to generate random numbers between a fixed interval:
const lowerLimit=20;
const upperLimit=50;
let randomNumber=Math.floor(Math.random()*(upperLimit-lowerLimit+1))+lowerLimit;  //generates a number from 20 to 50
console.log(randomNumber);



// Trigonometric Functions (for working with angles in radians):
// Math.sin(x): Sine of an angle.
// Math.cos(x): Cosine of an angle.
// Math.tan(x): Tangent of an angle.


// Other Useful Functions:
// Math.PI: The mathematical constant pi (approximately 3.14159).
// Math.E: The mathematical constant e (approximately 2.71828).
// Math.exp(x): Calculates the exponent of a number (e raised to the power of x).
// Math.log(x): Calculates the natural logarithm (base-e) of a number.
// Math.trunc(x): Returns the integer part of a number (truncation towards zero).