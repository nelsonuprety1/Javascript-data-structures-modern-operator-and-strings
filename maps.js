// maps : map is a data strucutre that we can use to map values to keys

const rest = new Map();
rest.set('name', 'Classico italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon portugal');

// chaining the set method
rest.set('categories', ['Italian', 'Pizzeria','Vegeterian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed');

// In order to read data from a map we use the get method
console.log(rest.get('name'))
console.log(rest.get(true))

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// checking if a map contains a certain key
console.log(rest.has('categories'));

// we can also delete elements
rest.delete(2);
console.log(rest);

// maps also has size property
console.log(rest.size);

// remove all elements from map
// rest.clear();

// we can use arrays or objects as map keys
// rest.set([1,2], 'Test');
// to get data based on that array
// if we do this
// console.log(rest.get([1,2]));
// we get undefined because those two arrays [1,2] are not the same object in the heap

// We have to do this
const arr = [1,2];
rest.set([arr, 'Test']);
console.log(rest.get(arr));


// Populating map without using set method, set method is a bit cumbersome when there are a lot of values to set
// we can create a new map like this
// [key, value]
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);
// but when we keep adding new elements programmatically using code, then set method is still the way to go

// for loop is available for maps because they are iterables

console.log(question.get('question'));

for(const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}
const answer = Number(prompt('Your answer'));
// if the below code question.get('correct') === answer results true then true will be mapped to correct if false then false map
console.log(question.get(question.get('correct') === answer));

// same as above
// if(answer === 3) {
//   console.log(question.get(true)); 
// }else {
//   console.log(question.get(false));
// }

// Sometimes we need to convert map back to an array 
// convert map to array
// we can do by simply building a new array
console.log([...question]);
// and then unpacking the map using destructuring