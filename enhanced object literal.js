'use strict';




  const openingHours = {
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
  };
   

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  // 1
  openingHours,
 
//  2. writing methods. in es6 we no longer have to create a property and then set it to a function expression
// previously we did name:function(){}
// enhanced way
  order(starterIndex, mainIndex){

  },
}

// Enhanced object literals. 3rd enhancement
// we can now compute property names instead of having to write them manually and literally
const weekDays = ['sun','mon','tue','wed','thu','fri','sat','sun'];
const enhanceThird = {
  [weekDays[3]]:{
    open: 10,
    close: 5,
  },
  [weekDays[5]]: {
    open: 12,
    close: 7
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

console.log(enhanceThird);