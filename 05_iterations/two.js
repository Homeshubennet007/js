let i = 0
while (i<=10) {
    //console.log(`value of i is ${i}`);
    i = i+2
}

let myArray = ["flash", "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}
//

let score = 7
do {
    console.log(`score is ${score}`);
    score++
} while (score <=10);
/*
we often refer to loops using two different control structures. 
The 'for' and 'while' loops are what we call 'entry control loops'
 because they check the condition before entering the loop.
  On the other hand, 'do-while' loops are known as 
  'exit control loops' 
  since they ensure that the loop body is executed
   at least once before checking the condition. */