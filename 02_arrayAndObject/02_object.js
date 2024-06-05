// there are two ways to create objects:
// 1. Object Literal
// 2. Object Constructor

const mySymbol=Symbol("secretSymbol");
const student={   //object literal
    name: "Alok",
    "surname": "Yadav",
    // name: "aky",  //it changes the previous value of name key
    // full  name: "Alok Yadav",  // error due to space in key name
    "full name": "Alok Yadav",    // that's the correct way
    age: 20,
    // mySymbol:"this is not a symbol key",
    [mySymbol]:"this is a secret",
    course: {
        name: "JavaScript Mastery",
        instructor: "Hitesh",
        quality:"top-notch",
    },
    isGoodLearner: true,
    knownLanguages: ["C","Java","Python"],
}

// console.log(student);
// console.log(student.course.name);
console.log(student.name);
// // console.log(student[surname]);  // wrong syntax
// console.log(student["surname"]);
// console.log(student.knownLanguages);
// console.log(student.course);
// console.log(student.full name);  // keys with space(s) can not be accessed using dot operator
// console.log(student["full name"]);
// console.log(student["mySymbol"]);
// console.log(student[mySymbol]);

//verifying keys type:
// console.log(typeof student);  // objects
// console.log(typeof student.isGoodLearner);  // boolean
// console.log(typeof student.mySymbol);  // string
// console.log(typeof student[mySymbol]);  //string

const id=Symbol("secretId");
student[id]=112233;
// console.log(student);
// console.log(student.id);  //undefined
// console.log(student["id"]);  // undefined
// console.log(student.secretId); // undefined
// console.log(student["secretId"]);  // undefined
// console.log(student[id]);  //112233

// console.log(student.age);  //20
student.age=22;
// console.log(student.age);  //22
// Object.freeze(student);  // no further modification
student.age=40;
// console.log(student.age);  //22
student.greeting=function(){
    console.log(`hello sir, my name is ${this.name}`);
}
// student.greeting();

//---------------------------------------------------------------------------------------

// how to combine two objects to a single object
const obj1={
    1: "one",
    2: "two",
}
const obj2={
    2: "TWO",
    3: "three",
    4: "four",
}

// const obj3={obj1,obj2}; //object consisting of two objects. the name obj1 and obj2 are the name of the key for the two objects.
// console.log(obj3);

// Method 1: the correct way to combine: Object.assign(target,source1,source2,....);
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
// in case of same key in two or more sources, the value is retained of the last source in the Object.assign

// Method 2: this is a modern way combining two objects:
const obj3= {...obj1, ...obj2};
// console.log(obj3);

//---------------------------------------------------------------------------------

// how to extract key and values from object:

// console.log(Object.keys(student));  //symbol keys are not present
// console.log(Object.values(student));  // also symbol key's value are not present
// console.log(Object.entries(student)); // array of (arrays)-> key value pair


// to check if the object has a property:
console.log(Object.hasOwnProperty("name"));  //true
console.log(Object.hasOwnProperty("laptop"));  //false


//----------------------------------------------------------------------------------

// de-structuring objects:

// const name=student.name;
// console.log(name);  //Alok

// a better way to destructure object is:
const {name,age,}=student;
// console.log(name); //Alok
// console.log(age);

// we can also change the name of the variable other than key name:
const {name: StudentName}=student;
// console.log(StudentName); //Alok
const{"full name": fName}=student;
// console.log(fName);  // Alok Yadav

