"use strict";
// Magicians: Make a array of magician's names. Pass the array to a function called show magicians(), which prints the name of each magician in the array.
let magician = ['Harry Houdini', 'David CopperField', 'Pen Jillette', 'Teller'];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
