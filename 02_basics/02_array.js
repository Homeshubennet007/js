const marvel_heros = ["thor","ironman","hawkeye"]
const dc_heros = ["batman","superman","wonderwomen"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const newHero = marvel_heros.concat(dc_heros)
// console.log(newHero);


const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const solution_array = another_array.flat(Infinity)
//console.log(solution_array);



console.log(Array.isArray("homeshu"))
console.log(Array.from("homeshu"))
console.log(Array.from({name:"honey"})) //imp interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
