'use strict';

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
  }
};
restaurant.orderDelivery({
    time: '22.30',
    address: 'Bhaktapur',
    mainIndex: 2,
    starterIndex: 2
})

console.log('------------------DESTRUCTURING---------------------');

// destructuring
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

console.log('------------------SETTING DEFAULT VALUES');
// setting default values

const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

console.log('-----------MUTATING OR SWITCHING VARIABLES--------------------------');
// mutating or switching variables
let a = 111;
let b = 999;
const obj= {a:23, b:7, c:14};

// if we do this
// {a, b} = obj;
// we get error saying unexpected token = . because when we start a line with a curly brace
// javascript expects a code block. and we cannot assign anything to a code block like we did here with the equal sign then we get that error
// to solve this we wrap {a, b} = obj; in parenthesis
({a, b} = obj);
console.log(a,b);

console.log('------------------NESTED OBJECTS--------------------');
// Nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);
