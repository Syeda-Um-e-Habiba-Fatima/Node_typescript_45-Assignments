"use strict";
let Guest_List = ['Afia', 'Hadia', 'Aisha'];
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest = 'Afia';
let new_Guest = 'Farwa Unni';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
console.log(`Miss. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So we are inviting 3 more guests.');
Guest_List.unshift('Hira');
Guest_List.splice(2, 0, 'Jannat');
Guest_List.push('Anaya');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log('\nSorry we can not arrange big table, only Two peoples will be invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, you are not invited for Dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
