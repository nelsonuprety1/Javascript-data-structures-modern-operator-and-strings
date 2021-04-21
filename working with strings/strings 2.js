'use strict';

const airline = 'TAP Air Portugal';
// string methods
// 1) case changing (lower upper)
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name 
const passenger = 'nElSoN';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = 'hello@nelson.io';
const loginEmail = '  Hello@Nelson.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// same as above but in a shorter way
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replace parts of string. replace method is case sensitive
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door','gate')); this works

// using regex (regular expression) g is global
console.log(announcement.replaceAll(/door/g, 'gate'));

// There are 3 simple methods that return Booleans
// 1)includes
// 2)starts with
// 3)ends with
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus Family');
}

// Practice exercise
const checkBaggage = function (items) {
    // whenever we take any input from user it is always best to change it into lowercase
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on board');
    }else{
        console.log('Welcome Aboard');
    }
};
checkBaggage('I have a Laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');