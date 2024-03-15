// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// * Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// * Add one new guest to the beginning of your array.
// * Use appead() to add one new guest to the end of your list.
// * Print a new set of invitation messages, one for each person in your list.
var MyFriends = ["Roshni", "Kiran", "Muskan", "Areeba",];
console.log(MyFriends);
console.log("we have 3 more friends to invite on dinner\n");
// addind three more friends
// add at beginning
MyFriends.unshift("Hina");
// ["Hina", "Roshni", "Kiran", "Muskan","Areeba"]
console.log(MyFriends);
// add at middle
MyFriends.splice(2, 0, "maha");
console.log(MyFriends);
// add at last
MyFriends.push("Iqra");
console.log(MyFriends);
// print all friends alongwith message
for (var i = 0; i < MyFriends.length; i++) {
    console.log("Ms.".concat(MyFriends[i], " you are invited to my dinner"));
}
