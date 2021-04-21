'use strict';
// Looping objects: object keys, values and entries

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
// Looping objects: object keys, values and entries
// We can loop over objects which is not iterable but in an indirect way
// We have different options depending on what exactly we want to loop over
// do we want to loop over the object Property names, property values or both together

// Looping over Property names(they are also called keys)
for (const day of Object.keys(openingHours)){
    console.log(day);
}
