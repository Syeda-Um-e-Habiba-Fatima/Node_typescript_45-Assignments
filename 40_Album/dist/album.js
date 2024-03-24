"use strict";
// Album: Write a function called make_album() that builds a object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album's Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
make_album('Artist number 1', 'Album title 1');
const album1 = make_album('Artist 1', 'Album Title 1');
console.log(album1);
const album2 = make_album('Artist 2', 'Album Title 2');
console.log(album2);
const album3 = make_album('Artist 3', 'Album Title 3', 12);
console.log(album3);
