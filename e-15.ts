// You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations.
// you'll have to think of someone else to invite.
// * Start withyour program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can't make it.
// * Modify your list, replacing the name of the guest who can't make it with the name of the new person you are inviting.
// * Print a second set of invitation messages, one for each person who is still in your list.

const myFriends: string [] = ["Roshni", "Kiran", "Muskan", "Areeba"];

console.log(`due to some personal reasons Ms. ${myFriends[1]} will not come on my dinner`);
myFriends[1] = "Kiran";

console.log(`New list of my friends who are comming to my dinner\n`)
for(let i = 0; i < myFriends.length; i++){
    console.log(`${i + 1}. ${myFriends[i]}`);
}

