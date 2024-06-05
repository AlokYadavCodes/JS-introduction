const student={
    name: "Alok",
    age: 23,
    thisFunction: function(){
        console.log(this);
    },
}
// student.thisFunction();
// console.log(student);  // both are same

// console.log(this);  //{}

function hello(){
    console.log("inside hello:");
    let myName="alok";
    console.log(this.myName);  //undefined
    console.log(this);
}
// hello();

const hello1= function(){
    console.log("inside hello1:");
    let myName="alok";
    console.log(this.myName);  //undefined
    console.log(this);
}
// hello1();
// both hello and hello1 gives same output

const hello3=()=>{
    console.log("inside hello3:");
    let myName="alok";
    console.log(this.myName);  //undefined
    console.log(this);  // {}
}
hello3();
//hello3 behaves differently from the above two functions on: console.log(this)