//primitive data type= call by value
// 7 types : String,Number,Boolean,null,undefined,Symbol.BigInt

const score = 100
const scoreValue =100.3
const isLoggedIn =false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 34567823456745678n

//Reference(Non-primitive data type) = reference can be directly allocated in the memory
    //-Array,objects,Functions


 //is javascript dynamically typed or statically typed language  
    
const heros = ["s", "d", "k"];
let obj = {
    name:"honey",
    age:26,
}

const myFunction = function(){
    console.log("baba bennett");
}

//console.log(typeof myFunction); //functionobject or objrctfunction  
console.log(typeof id);

//https://262.ecma-international.org/5.1/#sec-11.4.3