//reduce js

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce ( (acc,currval) => acc+currval,0)

//console.log(myTotal);


const shoppingKart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 999
    },
    {
        itemName : "android course",
        price: 4999
    },
]

const priceToPay = shoppingKart.reduce( (acc,item) => acc + item.price,0)

console.log(priceToPay);