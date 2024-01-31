// Primitive data types are stored in stack memory.       copy
// Non-Primitive data types are stored in heap memory.    reference

//Primitive example
let myName="Alok"
let YourName=myName
console.log(YourName)  //Alok
YourName="Hitesh"
console.log(YourName)  // Hitesh
console.log(myName)    //Alok


//Non-Primitive example
let Alok={
    userId:123,
    surname: "Yadav"
}
let Hitesh=Alok
console.log(Hitesh.surname) //yadav

Hitesh.surname="Choudhary"
console.log(Alok.surname)  //choudhary


