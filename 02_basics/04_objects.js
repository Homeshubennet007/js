//singleton object
//const instaUser = new Object()

//non-singleton object
const instaUser = {}
instaUser.id = "124cv"
instaUser.name = "kat"
instaUser.isLoggedIn = false
//console.log(instaUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userFullName:{
            firstName:"homeshu",
            lastName:"bennett"
        }
    }
}

//console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);



const users = [
    {
        id: 1,
        email:"h@g.com"
    },
    {
        id: 1,
        email:"h@g.com"
    },
    {
        id: 1,
        email:"h@g.com"
    },
]

users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));


console.log(instaUser.hasOwnProperty('isLoggedIn'));