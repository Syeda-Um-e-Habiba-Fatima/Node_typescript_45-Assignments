// Unchanged Magicians: Start with your work from Exercise 40. call the function make great() with a copy of the array of magicians names. Because the original array will be unchanged, return the new array and store it in a separate array, Call show magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician's name.

const magicians = ['Harry Houdini', 'David Copperfield', 'penn Jillette', 'Teller'];

function copyArray(arr: string[]): string[] {
    return [...arr];
}


function make_great(magicianArry: string[]) {

    for (let i = 0; i < magicians.length; i++) {

        magicianArry[i] = "The Great " + magicianArry[i];
        }
}

function show_magicians(magicians: string[]) {

    for (const magician of magicians) {
        console.log(magician);
    }
}

const copiedMagicians = copyArray(magicians);

make_great(copiedMagicians);

console.log("It's my Original Magicians:");
show_magicians(magicians);

console.log("It's my \nModified Magicians:");
show_magicians(copiedMagicians);