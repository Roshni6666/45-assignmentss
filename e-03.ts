//Name Cases: Store a person's name in a variable, and then print that person's name in lowercase,uppercase, and titlecase.

const personName1: string = "roshni";

// lowerCase
console.log(personName1.toLowerCase());


// upperCase
console.log(personName1.toUpperCase());


// titleCase
let firstletter: string = personName1.charAt(0).toUpperCase();
let restletter: string = personName1.slice(1).toLowerCase();

let titleCase = firstletter + restletter;

console.log(titleCase);
