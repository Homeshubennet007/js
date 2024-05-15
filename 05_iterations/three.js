//for of loop
//[" "," "," "]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const i of arr) {
    //console.log(i);
}

const greetings = "Hello world!"
for( const greet of greetings){
   // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"united states of america")
map.set('FR',"France")
//map.set('IN',"India")

//console.log(map);

for (const [key,value] of map) {
       // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key, ':-', value);
}
