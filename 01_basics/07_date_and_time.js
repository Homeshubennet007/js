//js date read mdn docs

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//run these methods - to date string,toISOS string,toJSON,toLocalDateString,toLocalString //comment section in output

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2024, 2, 3, 3, 9)
 let myCreatedDate = new Date("03-03-2024")
// console.log(myCreatedDate.toLocaleString());

//month start from 0 in js date object but not in string


//time stamp =

// let myTimeStamp = Date.now()
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);



newDate.toLocaleString('default',{
    weekday: "long",
    
})