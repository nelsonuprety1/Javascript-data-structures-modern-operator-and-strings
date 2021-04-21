'use strict';

// we use spread operator ... to expand an array into all its elements. Unpacking all the array elements at one. 
// spread operator takes all the elements from the array and it also doesnt create new variables, and as a  consequence, we can only use it in 
// a place where we would otherwise write values separated by commas

const arr = [7,8,9];
// old way . if we wanted to add new elements
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

// using spread operator ... . taking values of arr array and writing them individually
const newArr = [1 , 2, 3, ...arr];
// will log the array
console.log(newArr);
// it will log individual elements to the console
console.log(...newArr);

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
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta: function(ing1, ing2, ing3){   
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)

  }
};
// restaurant.orderDelivery({
//     time: '22.30',
//     address: 'Bhaktapur',
//     mainIndex: 2,
//     starterIndex: 2
// })

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// we are creating a completely new array 👆👆
console.log(newMenu);

// use case of spread operator
// 1) to create a shallow copy of arrays and objects
const mainMenuCopy = [...restaurant.mainMenu];

// 2) join or merge two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// spread operator works on all iterables (iterables: arrays , strings, sets, maps and from ES6 on objects too)
const str = 'Nelson';
const letters = [...str,' ', 'U'];
console.log(letters);
console.log(...str);

// but this wont work on template literals
// console.log(`${...str} Nelson`);
// because this is not a place that expects multiple values separated by commas
//multiple values separated by commas are only expected when we pass arguments into the function or when we build a new array

// using spread operator on functions
// real world example

const ingredients = [prompt("lets make a pasta! Ingredient 1?"), prompt('Ingredient2?'), prompt('Ingredient3')];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// using spread operator on objects
const newRestaurant = {foundingYear: 1997, ...restaurant, founder: 'Nelson'};
console.log(newRestaurant);

// copying objects

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante';
console.log(restaurantCopy.name);
console.log(restaurant.name);