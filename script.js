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
// let phoneNumber = "123456789";

// function maskPhoneNumber(phoneNumber) {
//   let length = phoneNumber.length;
//   let stars = "*".repeat(length - 4);
//   let cutNumber = phoneNumber.slice(length - 4);
//   let allTogether = stars + cutNumber;
//   return allTogether;
// }
// console.log(maskPhoneNumber(phoneNumber));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function calculateGrade(grade) {
//   switch (true) {
//     case grade >= 90:
//       return "A";
//     case grade >= 80:
//       return "B";
//     case grade >= 70:
//       return "C";
//     case grade >= 60:
//       return "D";
//     case grade >= 0:
//       return "F";
//     default:
//       return "Nieprawidłowa liczba punktów";
//   }
// }

// console.log(calculateGrade(86));

// function dayToActivity(day) {
//   switch (true) {
//     case day === "monday":
//       return "Praca";
//     case day === "saturday":
//       return "relaks";
//     case day === "sunday":
//       return "rodzina";
//     case day === "friday":
//       return "impreza";
//     default:
//       return "workday";
//   }
// }
// console.log(dayToActivity("saturday"));
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



------------------- ZDANIE DO POWTÓRKI wersja chat gpt ---------------------//

let questions = [
  {
    category: "school",
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Rome"],
    answer: "Paris",
  },
  {
    category: "school",
    question: "What is H₂O more commonly called?",
    choices: ["Hydrogen", "Oxygen", "Water"],
    answer: "Water",
  },
  {
    category: "school",
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: ["William Sakespeare", "Jane Austen", "Charles Dickens"],
    answer: "William Shakespeare",
  },
  {
    category: "school",
    question: "What is 7 × 8?",
    choices: ["54", "56", "64"],
    answer: "56",
  },
  {
    category: "school",
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
];

function getRandomQuestion(questions) {
  let randomNumber = Math.floor(Math.random() * questions.length);
  return questions[randomNumber];
}
function getRandomComputerChoice(question) {
  const idx = Math.floor(Math.random() * question.choices.length);
  return question.choices[idx];
}

function getResults(rQ, rA) {
  if (rA == rQ.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${rQ.answer}`;
  }
}

const question = getRandomQuestion(questions);
const computerAnswer = getRandomComputerChoice(question);

console.log(question.question);
console.log("Computer answered:", computerAnswer);
console.log(getResults(question, computerAnswer));

------------- wersja coderslab ---------------------
let questions = [
  {
    category:"biology",
    question:"what is dog?",
    choices:["cat","dog","fish"],
    answer:"dog"
  },
  {
    category:"school",
    question:"what is 8 x 7?",
    choices:["55","56","57"],
    answer:"56"
  },
  {
    category:"life",
    question:"what is life?",
    choices:["yes","no","noodles"],
    answer:"noodles"
  },
  {
    category:"food",
    question:"what is noodles?",
    choices:["cat","dog","noodles"],
    answer:"noodles"
  },
  {
    category:"gaming",
    question:"what is lol?",
    choices:["cat","dog","nightmare"],
    answer:"nightmare"
  },
];
function getRandomQuestion  (questions) {
let randomNumber = Math.floor(Math.random() * questions.length)
return questions[randomNumber]
}


function getRandomComputerChoice (choices) {
  let randomAnswer = Math.floor(Math.random() * choices.length)
  return choices[randomAnswer]
}

function getResults (randomQ, randomA) {
if (randomA === randomQ.answer) {
  return "The computer's choice is correct!"
} else {
  return `The computer's choice is wrong. The correct answer is: ${randomQ.answer}`
}
}

console.log(getRandomComputerChoice(questions))

console.log(getResults(questions))









------------------ tego bardzo nie czaje -------------------------

function getResults (randomQ, randomA) {
if (randomA === randomQ.answer) {
  return "The computer's choice is correct!"
} else {
  return `The computer's choice is wrong. The correct answer is: ${randomQ.answer}`
}
}

-------------------- tego troche nie czaje -----------------------
function getRandomComputerChoice (choices) {
  let randomAnswer = Math.floor(Math.random() * choices.length)
  return choices[randomAnswer]
}