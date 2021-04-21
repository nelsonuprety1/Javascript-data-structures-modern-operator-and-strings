'use strict';
// looping over arrays for of loop

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

// for loop will automatically loop over the entirearray
// and in each iteration, it will give access to the
// current array element which we can specify here (item)
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);

// we can use continue and break in this loop

// getting the current index
for (const [i,j] of menu.entries()){
    console.log(`${i +1}: ${j}`);
}

// console.log([...menu.entries()]);