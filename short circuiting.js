'use strict';

// short circuiting &&(and) and || (or)
// the result of OR operator doesnt have to be always boolean
// 3 properties about logical operators: 
// 1)use any data type
// 2)return any data type
// 3) do short circuiting or short circuit evaluation

console.log('--------------------------OR operator------------------');
console.log(3 || 'Nelson');
// in the case of OR operator short circuiting means that if the first value is a truthy value, it will immediately return that first value
console.log('' || 'Nelson');
console.log(true || 0);
// undefined is a falsy value
console.log(undefined || null);
// in OR operator result is true if at least one operand is true
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
}

// instead of doing this 
// restaurant.numGuests = 11;
const guests1 = restaurant.numGuests ? restaurant.numGuests :10;
console.log(guests1);

// both the above solution will not work when the numGuests is 0
// use short circuiting
 const guests2 = restaurant.numGuests || 10;
 console.log(guests2);

//  and operator
 console.log('--------------------------AND operator------------------');
//  in short circuit evaluation and operator works exactly opposite of OR operator
// the and operator short circuits when the first value is falsy and then immediately returns that falsy value without even evaluating the second operand
// using falsy value
console.log(0 && 'Nelson');
// using truthy value
console.log(8 && 'Nelson');
// multiple operators
console.log('Hello' && 23 && null && 'nelson');

// practical exaxmple
if (restaurant.orderPizza){
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');