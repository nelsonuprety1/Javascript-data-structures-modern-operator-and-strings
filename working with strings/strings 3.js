'use strict';
// Split Method - split()
// One of the mose powerful methods. 
// Split allows us to split the string into multiple parts based on a divider string
console.log('a+very+nice+string'.split('+'));
console.log('Nelson Uprety'.split(' '));

const [firstName, lastName] = 'Nelson Uprety'.split(' ');

// the join method
// combination of split and join is really powerful
const newName = ['Mr.', firstName,lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
const names = name.split(' ');
const namesUpper = [];

for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
}
console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('nelson uprety');


// Padding a string
// padding a string means to add a number of characters to the string until a string has a certain desired length
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
console.log('Nelson'.padStart(20, '+').padEnd(30, '+'));
console.log('Nelson'.padEnd(20, '+'));

const maskCreditCard = function(number){
    const str = number + '';
    // the result of above code will be the number but as a string
    // because when one of the operands of the plus sign is a string it will convert all the operands to a string.
    // and so this number will become a string
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}
console.log(maskCreditCard(2773273274377));
console.log(maskCreditCard(19291933737372));
console.log(maskCreditCard(24898234789787));

// Repeat method
// allows us to repeat the same string multiple times
const message2 = 'Bad Weather........ all departures delayed  ';
console.log(message2.repeat(5));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5);
planesInLine(2);
planesInLine(7);