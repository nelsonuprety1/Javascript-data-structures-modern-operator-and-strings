'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// get character of a string at certain position
console.log(plane[0]);
// reading length properties
console.log(airline.length);

// Strings also have methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
// it is case sensitive 
console.log(airline.indexOf('Portugal'));

// one good use case is to extract part of string using the slice method. A slice method needs indexes as arguments
// slice(). in example slice(4) is the begin parameter.So its the position at which the extraction will start
console.log(airline.slice(4));
// the result we get from above is a substring, because its just the part of the original string. This splice doesnt change the underlying
// string because it's actually impossible to mutate strings. If we want to use this substring we have to store it in a variable or some data structure

// we can also specify end parameter
console.log(airline.slice(4, 7));
// what this means is that the end value is actually not included in the string.
// So basically it stops extracting before reaching index number 7.
// Side Note: The length of the extracted sring is always going to be end minus beginning

console.log(airline.slice(0, airline.indexOf(' ')));
// +1 to remove the whitespace 
console.log(airline.slice(airline.lastIndexOf(' ')+1));

// we can even define a negative begin argument. then it will start extracting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
    // B and E are middleseats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E'){
        console.log('You got the middle seat.😪');
    }else{
        console.log('You got lucky 😎');
    }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');