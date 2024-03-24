// Magicians: Make a array of magician's names. Pass the array to a function called show magicians(), which prints the name of each magician in the array.

let magician : string[] = ['Harry Houdini', 'David CopperField', 'Pen Jillette', 'Teller'];

function make_great(magicianArray:string[] ){

    for(let i=0; i<magicianArray.length; i++){

            magician[i] = 'The Great ' + magicianArray[i]
    }

}

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
