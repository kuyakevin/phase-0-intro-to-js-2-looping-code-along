// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);

const cards = [];
//create a new empty array to populate with info

function writeCards(thanks, event) {
    for (let i = 0; i < thanks.length; i++) {
        cards.push(`Thank you, ${thanks[i]}, for the wonderful ${event} gift!`);
        //take info from parameters, push them through the message for each parameter, and populate the new array with these messages
    }
    return cards;
    //cards array returns with newly populated messages from writeCards 
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number-=1;
    }
}