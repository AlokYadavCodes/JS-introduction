// console.log("Converting string to Number: ");
// let str="43";
// let strNum=Number(str);
// console.log(strNum);  //43
// str="";
// strNum=Number(str);
// console.log(strNum);  //0
// str="abc";
// strNum=Number(str);
// console.log(strNum);  //Nan


// Result:
// "43"=> 43
// ""=>0
// "abc"=> Nan
// "abc123"=> Nan

//---------------------------------------------------------------------------------

// console.log("Converting Null to Number: ")
// let score=null;
// let scoreNum=Number(score);
// console.log(scoreNum); //0

// Result:
// null=> 0

//---------------------------------------------------------------------------------


// console.log("Converting undefined to Number:");
// let points;  //undefined
// let pointsNum=Number(points);
// console.log(pointsNum);  //Nan

// Result:
// undefined=>Nan

//---------------------------------------------------------------------------------


// console.log("Converting boolean to Number: ");
// let bool=true; //boolean
// let boolNum=Number(bool);
// console.log(boolNum); //1
// bool=false;
// boolNum=Number(bool);
// console.log(boolNum); //0

// Result:
// false=> 0
// true=> 1

//---------------------------------------------------------------------------------

// console.log("Converting null to boolean: ");
// let a=null;
// let aBool=Boolean(a);
// console.log(aBool);

// Result:
// null=>false

//---------------------------------------------------------------------------------


// console.log("Converting string to boolean: ");
// let isLoggedIn="";
// let isLoggedInBool=Boolean(isLoggedIn);
// console.log(isLoggedInBool); //false
// isLoggedIn="anytext123";
// isLoggedInBool=Boolean(isLoggedIn);
// console.log(isLoggedInBool);  //true

// Result:
// ""=> false
// "anytext123"=> true

//---------------------------------------------------------------------------------


// console.log("Converting number to boolean: ");
// let number=0;
// let numberBool=Boolean(number);
// console.log(numberBool); //false
// number=-32;
// numberBool=Boolean(number);
// console.log(numberBool);  //true

// Result:
// 0=> false
// other than 0=> true

//---------------------------------------------------------------------------------


// console.log("Converting undefined to boolean: ");
// let isRainy=undefined;
// let isRainyBool=Boolean(isRainy);
// console.log(isRainyBool);  //false

// Result:
// undefined=>false

//---------------------------------------------------------------------------------


// console.log("Converting number to string: ");
// let num=23;
// let numStr=String(num);
// console.log(numStr); //23
// console.log(typeof(numStr)); //string

// Result:
// all number are easily converted to string

//---------------------------------------------------------------------------------


// console.log("Converting null and undefined to string: ");
// let temperature=null;
// let temperatureStr=String(temperature);
// console.log(temperatureStr);  //null
//
// temperature=undefined;
// temperatureStr=String(temperature);
// console.log(temperatureStr); //undefined

// Result:
// null=> null
// undefined=> undefined

//---------------------------------------------------------------------------------


// *********************** Operations ***********************

// console.log(10%11)
// console.log(16/2*8)   //first divide then multiply
// console.log(8*2/16)   //first multiply then divide

let result = "3" + 2;
console.log(result, "-", typeof(result));

result = "3" + true;
console.log(result, "-", typeof(result));

result = "3" + null;
console.log(result, "-", typeof(result));

result= true + "hi";
console.log(result, "-", typeof(result));

result= true + 4;
console.log(result, "-", typeof(result));

result= undefined + 1;
console.log(result, "-", typeof(result));

result= undefined + null;
console.log(result, "-", typeof(result));

result= true + false;
console.log(result, "-", typeof(result));