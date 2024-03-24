"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// current_users array
const current_users = ['Habiba', 'Hoorain', 'Hadia', 'Alishba', 'Ayesha'];
// new_users array
const new_users = ['Sana', 'Habiba', 'Jannat', 'Irha', 'Hoorain'];
// Loop through new_users list
for (let new_user of new_users) {
    // Convert new_user to lowercase for case insensitivity
    const lowercase_new_user = new_user.toLowerCase();
    // Checking username already exists in current_users or not
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        // Username already exists
        console.log(`The username '${new_user}' is not available. Please choose a different username.`);
    }
    else {
        // Username is available
        console.log(`The username '${new_user}' is available.`);
    }
}
