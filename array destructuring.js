'use strict';

// the idea  of destructuring is to take an object or an Array and convert it into
// smaller objects/elements/variables
// array destructuring
// console.log('----------------Array destructuring---------------------');
// const alphabet= ['A','B','C','D','E','F'];
// const numbers = ['1','2','3','4','5','6'];

// // old way
// // const a = alphabet[0];
// // const b = alphabet[1];

// // destructuring
// // if we want the rest of the elemnt we use the spread operator ...

// const [a,,c,...rest] = alphabet;
// const newArray = [...alphabet, ...numbers];

// console.log(a,c);
// console.log(rest);
// console.log(newArray);

// function sumAndMultiply(a,b){
//     return [a+b, a*b, a/b];
// }

// // const arr = sumAndMultiply(2,3);
// const [sum, multiply, division = 'No division'] = sumAndMultiply(2,3);
// console.log(sum);
// console.log(multiply);
// console.log(division);

console.log('--------------------------Object destructuring--------------------------');

// Object destructuring
const personOne = {
    name: 'Nelson',
    age: 22,
    address: {
        city: 'Bhaktapur',
        province: 'Province 3'
    }
}

// const personTwo = {
//     age: 24,
//     favoriteFood: 'Watermelon'
// }

function printUser({ name, age, favoriteFood = 'Momo'}){
    console.log(`Name is ${name} and age is ${age}, and food i love is ${favoriteFood}.`);
}
printUser(personOne);
// const personTwo = {
//     name: 'Luffy',
//     age: 24,
//     address: {
//         city: 'Foosha',
//         province: 'Japan'
//     }
// }

// combining two objects. anything that was in person 1 will be overwritten by person two
// const personThree = { ...personOne, ...personTwo};



// const { name: firstName , ...other} = personTwo;
// destrucutre nested  object
// const { name: firstName , address: { city }} = personTwo;
// console.log(firstName);
// console.log(city);

// console.log(personThree);



