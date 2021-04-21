'use strict';

// optional chaining (?)
// optional chaining and nullish coallescing operator are designed to work together

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
};

// console.log(restaurant.openingHours.mon.open);

// with optional chaining if certain property doesn't exist undefined is returned immediately
// with Optional Chaining(?)
console.log(restaurant.openingHours.mon?.open);
// if monday property exists then this open property will be read from there but if not, then immediately undefined will be returned
// and EXISTS here means the nullish concept. So, a property exists if its not null and not undefined. So if its 0 or the empty string then it still exists of course

// we can have multiple optional chainings
console.log(restaurant.openingHours?.mon?.open);

// Real life example
const days = ['mon','tue','wed','thu','fri','sat','sun'];
for(const day of days){
    // we cannot do restaurant.openingHours.day, because this is not an actual property name of the object.
    // if we want to use a variable name as the property name we need to use brackets notation so [day]
   const open = restaurant.openingHours[day]?.open ?? 'closed';
   console.log(`On ${day}, we open at ${open}`)
}

// Optional chaining on Methods. It works for calling methods
// we can check if a method actually exists before we call it
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

// Optional chaining works on Arrays
// we can use it to check if array is empty
const users = [
    {name: 'Nelson', email: 'nelson@gmail.com'}
];

console.log(users[0]?.name?? 'User array empty');
console.log(users[3]?.name?? 'User array empty');