"use strict";
// pass in a person to start the search for a mango seller in that person's friend list, look through their friends friends list if necessary.
function isMangoSeller(name) {
    return name.at(-1) === "m";
}
const graph = {
    you: ["Bob", "Alice", "Claire"],
    Bob: ["Anuj", "Peggy"],
    Alice: ["Peggy"],
    Claire: ["Thom", "Jonny"],
    Anuj: [],
    Peggy: [],
    Thom: [],
    Jonny: [],
};
function searchMangoSellerFrom(name) {
    let searchQueue = graph[name];
    while (searchQueue.length) {
        if (isMangoSeller(searchQueue[0])) {
            console.log(`${searchQueue[0]} is a mango seller!`);
            return true;
        }
        else {
            searchQueue = searchQueue.concat(graph[searchQueue[0]]);
            searchQueue.shift();
        }
    }
    return false;
}
searchMangoSellerFrom("you");
