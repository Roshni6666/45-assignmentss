//Name Cases: Store a person's name in a variable, and then print that person's name in lowercase,uppercase, and titlecase.
var personName1 = "roshni";
// lowerCase
console.log(personName1.toLowerCase());
// upperCase
console.log(personName1.toUpperCase());
// titleCase
var firstletter = personName1.charAt(0).toUpperCase();
var restletter = personName1.slice(1).toLowerCase();
var titleCase = firstletter + restletter;
console.log(titleCase);
