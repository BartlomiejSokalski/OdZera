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

// ------------------- ZDANIE DO POWTÓRKI wersja chat gpt ---------------------//

// let questions = [
//   {
//     category: "school",
//     question: "What is the capital of France?",
//     choices: ["Paris", "London", "Rome"],
//     answer: "Paris",
//   },
//   {
//     category: "school",
//     question: "What is H₂O more commonly called?",
//     choices: ["Hydrogen", "Oxygen", "Water"],
//     answer: "Water",
//   },
//   {
//     category: "school",
//     question: "Who wrote the play 'Romeo and Juliet'?",
//     choices: ["William Sakespeare", "Jane Austen", "Charles Dickens"],
//     answer: "William Shakespeare",
//   },
//   {
//     category: "school",
//     question: "What is 7 × 8?",
//     choices: ["54", "56", "64"],
//     answer: "56",
//   },
//   {
//     category: "school",
//     question: "Which planet is known as the Red Planet?",
//     choices: ["Mars", "Venus", "Jupiter"],
//     answer: "Mars",
//   },
// ];

// function getRandomQuestion(questions) {
//   let randomNumber = Math.floor(Math.random() * questions.length);
//   return questions[randomNumber];
// }
// function getRandomComputerChoice(question) {
//   const idx = Math.floor(Math.random() * question.choices.length);
//   return question.choices[idx];
// }

// function getResults(rQ, rA) {
//   if (rA == rQ.answer) {
//     return "The computer's choice is correct!";
//   } else {
//     return `The computer's choice is wrong. The correct answer is: ${rQ.answer}`;
//   }
// }

// const question = getRandomQuestion(questions);
// const computerAnswer = getRandomComputerChoice(question);

// console.log(question.question);
// console.log("Computer answered:", computerAnswer);
// console.log(getResults(question, computerAnswer));

// ------------- wersja coderslab ---------------------
// let questions = [
//   {
//     category:"biology",
//     question:"what is dog?",
//     choices:["cat","dog","fish"],
//     answer:"dog"
//   },
//   {
//     category:"school",
//     question:"what is 8 x 7?",
//     choices:["55","56","57"],
//     answer:"56"
//   },
//   {
//     category:"life",
//     question:"what is life?",
//     choices:["yes","no","noodles"],
//     answer:"noodles"
//   },
//   {
//     category:"food",
//     question:"what is noodles?",
//     choices:["cat","dog","noodles"],
//     answer:"noodles"
//   },
//   {
//     category:"gaming",
//     question:"what is lol?",
//     choices:["cat","dog","nightmare"],
//     answer:"nightmare"
//   },
// ];
// function getRandomQuestion  (questions) {
// let randomNumber = Math.floor(Math.random() * questions.length)
// return questions[randomNumber]
// }

// function getRandomComputerChoice (choices) {
//   let randomAnswer = Math.floor(Math.random() * choices.length)
//   return choices[randomAnswer]
// }

// function getResults (randomQ, randomA) {
// if (randomA === randomQ.answer) {
//   return "The computer's choice is correct!"
// } else {
//   return `The computer's choice is wrong. The correct answer is: ${randomQ.answer}`
// }
// }

// console.log(getRandomComputerChoice(questions))

// console.log(getResults(questions))

// ------------------ tego bardzo nie czaje -------------------------

// function getResults (randomQ, randomA) {
// if (randomA === randomQ.answer) {
//   return "The computer's choice is correct!"
// } else {
//   return `The computer's choice is wrong. The correct answer is: ${randomQ.answer}`
// }
// }

// -------------------- tego troche nie czaje -----------------------
// function getRandomComputerChoice (choices) {
//   let randomAnswer = Math.floor(Math.random() * choices.length)
//   return choices[randomAnswer]
// }

// function getVowelCount(sentence) {

//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let ch of sentence) {
//     if (vowels.includes(ch)) {
//       count++;
//     }
//   }

//   return count;
// }

// let lunches = ["apples", "bananas"];

// --------------------------- JESZCZE RAZ DO POWTÓRKI --------------------------------------------------------------

// let questions = [
//   {
//     category: "school",
//     question: "what is 10 + 9",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "memes",
//     question: "what is 10 + 9",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "vines",
//     question: "what is 10 + 9",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "funny",
//     question: "what is 10 + 9",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "tiktok",
//     question: "what is 10 + 9",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
// ];

// function getRandomQuestion(array) {
//   let randomNumber = Math.floor(Math.random() * array.length);
//   return array[randomNumber];
// }

// function getRandomComputerChoice(choices) {
//   let randomNumber2 = Math.floor(Math.random() * choices.length);
//   return choices[randomNumber2];
// }

// function getResults(question, answer) {
//   if (answer === question.answer) {
//     return "The computer's choice is correct!";
//   } else {
//     return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
//   }
// }
// const question = getRandomQuestion(questions);
// const computerAnswer = getRandomComputerChoice(question.choices);
// const result = getResults(question, computerAnswer);

// console.log(`Question: ${question.question}`);
// console.log(`Choices: ${question.choices.join(", ")}`);
// console.log(`Computer's answer: ${computerAnswer}`);
// console.log(result);

// const questions = [
//   {
//     category: "animals",
//     question: "Which animal barks?",
//     choices: ["Dog", "Cat", "Cow"],
//     answer: "Dog",
//   },
//   {
//     category: "animals",
//     question: "Which animal meows?",
//     choices: ["Dog", "Cat", "Sheep"],
//     answer: "Cat",
//   },
//   {
//     category: "animals",
//     question: "Which animal moos?",
//     choices: ["Goat", "Cow", "Horse"],
//     answer: "Cow",
//   },
// ];
// function playAnimalQuiz(questions) {
//   let randomNumber = Math.floor(Math.random() * questions.length);
//   let randomQuestion = questions[randomNumber];
//   let randomNumber2 = Math.floor(Math.random() * randomQuestion.choices.length);
//   let randomAnswer = randomQuestion.choices[randomNumber2];

//   if (randomAnswer == randomQuestion.answer) {
//     console.log(`pytanie: ${randomQuestion.question}`);
//     console.log(`odpowiedź ${randomAnswer}`);
//     console.log("dobra odpowiedź");
//   } else {
//     console.log(
//       `zła odpowiedź, poprawna odpowiedź to ${randomQuestion.answer}`
//     );
//   }
// }

// console.log(playAnimalQuiz(questions));

// const books = [
//   { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
//   { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 },
//   { title: "You Don't Know JS", author: "Kyle Simpson", year: 2014 },
// ];

// function getBookInfo(books, index) {
//   let bookIndex = books[index];
//   // let randomNumber = Math.floor(Math.random() * books.length);
//   // let randomBook = books[randomNumber];
//   console.log(
//     `tytuł: ${bookIndex.title} author: ${bookIndex.author} year: ${bookIndex.year}`
//   );
// }
// console.log(getBookInfo(books, 0));

// const orders = [
//   { id: 1, product: "Laptop", price: 3000, code: "ABC123" },
//   { id: 2, product: "Phone", price: 1500, code: "XYZ789" },
//   { id: 3, product: "Tablet", price: 2000, code: "QWE456" },
// ];

// function getProduct(index) {
//   return orders[index].product;
// }

// function getCode(index) {
//   let orderIndex = orders[index].code;
//   return orderIndex;
// }

// function trufal(index) {
//   let check = getCode(index);
//   return Boolean(check);
// }

// function summ(index) {
//   let isCorrect = trufal;
//   if (isCorrect) {
//     console.log(
//       `Zamówienie ${getProduct(index)}, ${
//         orders[index].price
//       } zł - kod poprawny `
//     );
//   } else {
//     console.log("kod nie poprawny nie chce mi sie pisac tego");
//   }
// }
// console.log(summ(2));

// uzytkownik musi podac id jesli id znajduje sie na liscie orders to zostaje zapytany o code w id jesli oba sie zgadzaja pokazuje sie zamowienie, jesli uzytkownik w odpowie zgadza sie to w console logu ma sie pojawic informacje o wysylce
// const orders = [
//   { id: 1, product: "Laptop", price: 3000, code: "ABC123" },
//   { id: 2, product: "Phone", price: 1500, code: "XYZ789" },
//   { id: 3, product: "Tablet", price: 2000, code: "QWE456" },
// ];

// // uzytkownich wchodzi na strone i jest poproszony o podanie numeru id zamówienia

// const idZamówienia = 2;

// const kodZamówienia = "XYZ789";
// const potwierdzenieZamówienia = true;
// function checkId(id) {
//   if (id >= 0 && id <= orders.length) {
//     return "proszę podać kod zamówienia";
//   } else {
//     return `nie mamy takiego zamówienia`;
//   }
// }
// console.log(checkId(idZamówienia));
// // jesli zamówienie jest w systemie użytkownik zostaje poproszony o podanie kodu do zamówienia

// function checkIdCode() {
//   // dołożyć propsy
//   if (orders[idZamówienia - 1].code === kodZamówienia) {
//     return orders[idZamówienia];
//   } else {
//     return `${false} zły kod`;
//   }
// }

// console.log(checkIdCode(kodZamówienia));

// // jesli kod również się zgadza użytkownik dostaje swoje zamówienie i pytanie czy ma zostać wysłane

// function send() {
//   // dołożyć propsy
//   if (potwierdzenieZamówienia) {
//     return "twoja paczka została wyslana";
//   } else {
//     return "czekamy na wysyłke twojej paczki";
//   }
// }
// console.log(send(potwierdzenieZamówienia));
let questions = [
  {
    category: "school",
    question: "what's 9 + 10",
    choices: ["21", "20", "19"],
    answer: "21",
  },
  {
    category: "memes",
    question: "what's 9 + 10",
    choices: ["21", "20", "19"],
    answer: "21",
  },
  {
    category: "tiktok",
    question: "what's 9 + 10",
    choices: ["21", "20", "19"],
    answer: "21",
  },
  {
    category: "funny",
    question: "what's 9 + 10",
    choices: ["21", "20", "19"],
    answer: "21",
  },
  {
    category: "vines",
    question: "what's 9 + 10",
    choices: ["21", "20", "19"],
    answer: "21",
  },
];
function getRandomQuestion(questions) {
  let randomQuestion = Math.floor(Math.random() * questions.length);
  return questions[randomQuestion];
}
const randomQuestion = getRandomQuestion(questions);

function getRandomComputerChoice(choices) {
  let randomAnswer = Math.floor(Math.random() * choices.length);
  return choices[randomAnswer];
}
const randomAnswer = getRandomComputerChoice(randomQuestion.choices);

function getResults(question, answer) {
  if (answer == question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

console.log(randomQuestion);
console.log(randomAnswer);
console.log(getResults(randomQuestion, randomAnswer));
