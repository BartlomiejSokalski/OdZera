function shortenName(person) {
  let findSpace = person.indexOf(" ");
  if (findSpace === -1) {
    return person;
  } else if (findSpace > 0) {
    let shortSurrname = findSpace + 2;
    let cutSurrname = person.slice(0, shortSurrname);
    let dot = ".";

    let allTogether = cutSurrname + dot;
    return allTogether;
  }
}
console.log(shortenName("kuba kamilicki"));
