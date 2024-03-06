//singleton
//object.create
//object literal -->
//object have keys and value

    const mySym = Symbol("key1")

const JsUser = {
    name:"Homeshu H Bennett",
    age: 21,
    location:"jaipur",
    [mySym]:"mykey1",
    email:"honey@google.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(typeof JsUser.mySym);
//console.log(JsUser[mySym]);

//values overwrite
JsUser.email = "honey@bmw.com"
//Object.freeze(JsUser)
JsUser.email = "honey@audi.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello how r u user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());