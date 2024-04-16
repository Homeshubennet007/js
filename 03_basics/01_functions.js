function sayMyName() {
    console.log("H");
    console.log("o");
    console.log("N");
    console.log("E");
    console.log("Y");
}

//sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
    //let result = num1 + num2
    //console.log("honey");
    //return result
    return num1 + num2
}

const result = addTwoNumbers(3,4)
//console.log(result);

function loginUserMessage(username = "sam"){
    if(!username){       //username === undefined
            console.log("please enter a username");
            return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("honey"))
//console.log(loginUserMessage())  //if values not passed output will be shown as undefined



function calculateCartPrice(val1,val2,...num1){        //... --> rest or spread
        return num1
}

//console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "honey",
    age : 25
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and user age is ${anyObject.age}`);
}

//handleObject(user)

handleObject({
    username:"sania",
    age: 28
})

const myNewArray = [200,400,500,400]

function returnSecondVal(getArray){
    return getArray[1]
}

//console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([200,400,500,400]));

