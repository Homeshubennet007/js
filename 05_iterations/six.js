//const coding = ["js","ruby","java","python","rust"]

// const values  = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

//for each doesnt return values


//const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

//if we are using scope{} we need to use return if not then return not needed



const books = [
    {title: 'Book one', genre:'Fiction', publish: 1982, edition:2004},
    {title: 'Book two', genre:'non-Fiction', publish: 1983, edition:2005},
    {title: 'Book three', genre:'action-horror', publish: 1985, edition:2006},
    {title: 'Book four', genre:'action-drama', publish: 1986, edition:2007},
    {title: 'Book five', genre:'kids', publish: 1987, edition:2009},
    {title: 'Book six', genre:'horror', publish: 1988, edition:2010},
    {title: 'Book seven', genre:'action-comedy', publish: 1989, edition:2011},
    {title: 'Book eight', genre:'non-Fiction', publish: 1990, edition:2012},
    {title: 'Book nine', genre:'comedy', publish: 1991, edition:2024},
    {title: 'Book ten', genre:'drama', publish: 1980, edition:2000},
    {title: 'Book eleven', genre:'romance', publish: 1999, edition:2007},
    {title: 'Book twelve', genre:'action', publish: 1998, edition:2006},
];


let userBooks = books.filter( (bk) => bk.genre === 'action')

userBooks = books.filter( (bk) => {
   return bk.publish <= 2000 && bk.genre === "comedy"
})
console.log(userBooks);

