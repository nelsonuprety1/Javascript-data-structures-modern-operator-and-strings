'use strict';
// Set is a collection of unique values. it can never have duplicates. Sets are iterables
// set is different from array because elements are unique. and order of elements is irrelevant

const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta']);
console.log(ordersSet);

// we can pass in strings, because strings are also iterables
console.log(new Set('Nelson'));

// we can get the size (length) of a set
console.log(ordersSet.size);

// check if certain element is in a set
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// add new elements to set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

// we can also delete elements
ordersSet.delete('Risotto');

// to delete all elements
// ordersSet.clear();

console.log(ordersSet);

// Important
// To retrieve values out of set
// we cannot use index like in arrays. because in sets there are actually no indexes.
// in fact there is no way of getting values out of a set. because there is no need of getting values out of set. That is because if all values are
// unique and if there order does not matter then there is no point of retrieving values out of a set. All we need to know is whether the value is 
// in a set or not.

// Sets are also iterables so we can loop over them
for(const order of ordersSet) console.log(order);

// In a normal code base the main use case of sets is actually to remove duplicate values of arrays
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager','Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set('nelsonuprety').size);

// Conclusion 
// Sets are not made to replace arrays at all
// So whenever you need to store values in order, and that might contain duplicates , always just use arrays
