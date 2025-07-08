// function shortenName(person) {
//   let findSpace = person.indexOf(" ");
//   if (findSpace === -1) {
//     return person;
//   } else if (findSpace > 0) {
//     let shortSurrname = findSpace + 2;
//     let cutSurrname = person.slice(0, shortSurrname);
//     let dot = ".";

//     let allTogether = cutSurrname + dot;
//     return allTogether;
//   }
// }
// console.log(shortenName("kuba kamilicki"));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function passwordStrength(password) {
//   if (password.length > 10 && password.match(/[!@#$%^&*]/)) {
//     return "hasło jest silne";
//   } else if (password.length > 6 && password.match(/\d/)) {
//     return "hasło jest medium";
//   } else if (password.length <= 6) {
//     return "masz weak hasło";
//   } else {
//     return undefined;
//   }
// }
// console.log(passwordStrength("Messi"));
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function repeatChar(char, times) {
//   let repeated = char.repeat(times);
//   return repeated;
// }

// console.log(repeatChar("x", 5));
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let phoneNumber = "123456789";

function maskPhoneNumber(phoneNumber) {
  let length = phoneNumber.length;
  let stars = "*".repeat(length - 4);
  let cutNumber = phoneNumber.slice(length - 4);
  let allTogether = stars + cutNumber;
  return allTogether;
}
console.log(maskPhoneNumber(phoneNumber));
