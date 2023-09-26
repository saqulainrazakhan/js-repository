const marvel_heroes = ['thor', 'Ironman', 'spiderman']
const dc_heroes = ['superman', 'flash', 'batman']

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes= marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // it is spread operator which spreads the each element as individual 
// console.log(all_new_heroes);

const nested_array = [1,2,3,[4,5,6], 7,8, [4,5,6, [8,9,10]]]
const real_array = nested_array.flat(Infinity); // it spreads the nested array as individual element
// console.log(real_array);


console.log(Array.isArray('Saqulain')); // it returns a bool value if it is an array
console.log(Array.from('Saqulain')); // it converts to an array but if it is object like value pair then implicitely we have tell that to which have to convert in an array else it will return empty array

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)); // A set of elements to include in the new array object.
// Returns a new array from a set of elements.