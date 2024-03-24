

let Guest_List :string[] = ['Afia','Hadia','Aisha'];

// for(let i=0; i<Guest_List.length; i++){

//    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

// }

let absent_Guest :string = 'Afia' ;

let new_Guest :string = 'Farwa Unni' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

}

console.log(`Miss. ${absent_Guest} is not coming to the party.`)

console.log('Good News! We find Big Table So we are inviting 3 more guests.')

Guest_List.unshift('Hira') ;
Guest_List.splice(2 , 0 , 'Jannat');
Guest_List.push('Anaya');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

}
