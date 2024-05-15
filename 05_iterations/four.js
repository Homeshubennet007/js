const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
   // console.log(`${key} extensions is for ${myObject[key]}`);
}

const programming = ["js","ruby","python","java","c++"]

for (const key in programming) {
   ///console.log(programming[key]);
}


const map = new Map()
map.set('IN',"India")
map.set('USA',"united states of america")
map.set('FR',"France")

for (const key in map) {
    console.log(key);
}

//map is not iteratable but there are ways that's why code is not running