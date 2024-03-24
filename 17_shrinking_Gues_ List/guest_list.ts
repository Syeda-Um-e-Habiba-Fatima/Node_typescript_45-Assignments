
let Guest_List :string[] = ['Afia','Hadia','Aisha'];
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absent_Guest :string = 'Afia' ;
let new_Guest :string = 'Farwa Unni' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

console.log(`Miss. ${absent_Guest} is not coming to the party.`)
console.log('Good News! We find Big Table So we are inviting 3 more guests.')

// array me 3 guest add kiye hain
Guest_List.unshift('Hira') ;
Guest_List.splice(2 , 0 , 'Jannat');
Guest_List.push('Anaya');

// yahan per meny 6 guest ke array o print karaya ha.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

// Sorry Messaage o guest for inviting
console.log('\nSorry we can not arrange big table, only Two peoples will be invited.');

// Yahan per mene Guest remove kiya hain.
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, you are not invited for Dinner.`);
}

// Hamare bachy 2 invited Guest.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')
}

// I remove all the guest from the array.
Guest_List.splice(0, 2);
console.log(Guest_List);
