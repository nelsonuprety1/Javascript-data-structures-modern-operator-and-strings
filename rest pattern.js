'use strict';

// rest pattern looks exactly like spread operator. So it has the same syntax with the three dots. but it actually does the opposite of the
// spread operator
// Rest pattern is used to collect multiple elements and condense them into an array.
// rest pattern always must be the last element

// Rest because its on the left side of the equal sign

// 1) Destrucutring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

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
        }

        },
         orderPizza: function(mainIngredient, ...otherIngredients){
            console.log(mainIngredient);
            console.log(otherIngredients);
    }
};



const [pizza, , risotto, ...otherFood ] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const  {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

// Functions
// ...numbers is a rest parameter
const add = function(...numbers){ 
    let sum = 0;
    for( let i = 0; i <numbers.length; i++)
        sum += numbers[i];
        console.log(sum);
}

add(2,3);
add(5,3,7,2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');