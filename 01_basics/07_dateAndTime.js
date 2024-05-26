const today = new Date();
console.log(today);
    // 2024-05-26T08:04:05.277Z
    // YYYY-MM-DDTHH:mm:ss.sssZ
// sss: milliseconds
// Z: represent UTC time

// Conclusion: new Date() returns UTC time.

// -------------------------------------------------------------------------------------

console.log(today.toISOString());
// toISOString(): to get the UTC time in string format. (so that we can manipulate the string as per our need)

// -------------------------------------------------------------------------------------

console.log(Date.now());
console.log(new Date().getTime());
// both returns number of milliseconds since epoch.
// the difference is that in first one we are calling a static method of Date Object
// and in second one, getTime is instance method.

// -------------------------------------------------------------------------------------

let timeZoneOffset=today.getTimezoneOffset();
console.log(timeZoneOffset);  //-ve 330 for india
// localtime + timeZoneOffset = UTC time

// -------------------------------------------------------------------------------------

console.log(today.toLocaleDateString("en-IN"));
//  26/5/2024

// -------------------------------------------------------------------------------------

let myCreatedDate=new Date(2024,0,24);
console.log(myCreatedDate);
myCreatedDate=new Date("2024-1-24");  // YYYY-MM-DD
console.log(myCreatedDate);
myCreatedDate=new Date("1-24-2024");  //MM-DD-YYYY
console.log(myCreatedDate);

// all the above ways of creation of date object returns the same result.

// myCreatedDate=new Date(year, month, date, hours, minutes, seconds, milliseconds)

// console.log(myCreatedDate.getDay());
// console.log(myCreatedDate.getHours());
// console.log(myCreatedDate.getFullYear());

let myFormattedDate=myCreatedDate.toLocaleString("default",{
    // weekday: "long",
    // year: "2-digit",
    // month: "2-digit",
    timeStyle: "full"
})
console.log(myFormattedDate);

// -------------------------------------------------------------------------------------
