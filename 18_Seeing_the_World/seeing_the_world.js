"use strict";
// Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ['Saudi Arabia', 'Taj Mahal', 'South Korea', 'Japan', 'Switzerland'];
//print your array in its original order.
console.log('Orignal ' + places);
//print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + [...places].sort());
//show that your array is still in its original order by printing it.
console.log('Orignal ' + places);
//print your array in reverse alphabetical order without changing the order of the original list.
console.log('Copy ' + [...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log('Orignal ' + places);
//Reverse the order of your list. print the array to show that its order has changed.
console.log('Orignal ' + places.reverse());
//Reverse the order of your list again.ptint the list to show it's back to its original order.
console.log('Orignal ' + places.reverse());
//sort your array so it's stored in alphabetical order. print the array to show that its order has been changed.
console.log('Orignal ' + places.sort());
//Sort to change your array so it's stored in reverse alphabetical order. print the list to show that its order has changed.
console.log('Orignal ' + places.sort().reverse());
