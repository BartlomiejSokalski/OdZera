// function shortenName(person) {
//   let findSpace = person.indexOf(" ");
//   if (findSpace === -1) {
//     return person;
//   } else if (findSpace > 0) {
//     let shortSurrname = findSpace + 2;
//     let cutSurrname = person.slice(0, shortSurrname);
//     let dot = ".";

// const js = require("@eslint/js");

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
// const userGiveId = 3;
// const userGiveCode = "QWE456";
// // uzytkownich wchodzi na strone i jest poproszony o podanie numeru id zamówienia
// function checkId(orders) {
//   if (
//     (userGiveId <= orders.length && userGiveId > 0) ||
//     (userGiveId >= orders.length && userGiveId <= 3)
//   ) {
//     console.log("podaj kod zamówienia");
//     return true;
//   } else {
//     console.log("nie mamy twojego zamówienia");
//     return false;
//   }
// }
// console.log(checkId(orders));

// // jesli zamówienie jest w systemie użytkownik zostaje poproszony o podanie kodu do zamówienia
// function checkCode(orders) {
//   let check =
//     userGiveCode === orders[userGiveId - 1].code
//       ? `poprawny kod. Oto zamówienie ${JSON.stringify(orders[userGiveId - 1])}`
//       : "błędny kod";
//   return check;
// }
// console.log(checkCode(orders));

// // jesli kod również się zgadza użytkownik dostaje swoje zamówienie i pytanie czy ma zostać wysłane
// function send(yes) {
//   yes == "yes"
//     ? console.log("zamowienie wysłane")
//     : console.log("czekamy na wysyłke");
// }
// console.log(send("yes"));

// const greetings = [
//   { id: 1, text: "Cześć", language: "pl" },
//   { id: 2, text: "Hello", language: "en" },
//   { id: 3, text: "Hola", language: "es" },
//   { id: 4, text: "Bonjour", language: "fr" },
//   { id: 5, text: "Hallo", language: "de" },
// ];

// const users = [
//   { id: 1, name: "Asia", isMember: true, code: "ASIA123" },
//   { id: 2, name: "Bartek", isMember: false, code: "BARTEK456" },
//   { id: 3, name: "Kasia", isMember: true, code: "KASIA789" },
//   { id: 4, name: "Michał", isMember: false, code: "MICHAŁ012" },
// ];

// const orders = [
//   {
//     id: 1,
//     userId: 1,
//     product: "Laptop",
//     price: 3000,
//     shippingCost: 50,
//     shipmentDate: "16/07/2025",
//     shipmentTime: "14:30",
//   },
//   {
//     id: 2,
//     userId: 2,
//     product: "Phone",
//     price: 1500,
//     shippingCost: 30,
//     shipmentDate: "",
//     shipmentTime: "14:30",
//   },
//   {
//     id: 3,
//     userId: 3,
//     product: "Tablet",
//     price: 2000,
//     shippingCost: 40,
//     shipmentDate: "16/07/2025",
//     shipmentTime: "14:30",
//   },
//   {
//     id: 4,
//     userId: 4,
//     product: "Headphones",
//     price: 500,
//     shippingCost: 20,
//     shipmentDate: "",
//     shipmentTime: "",
//   },
// ];

// const orderId = orders[2].id;
// const userCode = "KASIA789";
// const typicalUser = users[2];
// let valid;
// // po wejsciu na strone user zostaje przywitany grettings losowo wybranym
// function checkMyOrderStatus() {
//   function greetUser(array) {
//     let randomGretting = Math.floor(Math.random() * array.length);
//     return `${array[randomGretting].text}, ${typicalUser.name}!`;
//   }
//   function getIdAndCode(id, code) {
//     id == 3 && code == "KASIA789" ? (valid = true) : (valid = false);
//     return valid === true ? "poprawny kod" : "error";
//   }

//   function checkIfSend(array) {
//     const order = array[0];
//     return valid === true
//       ? order.shipmentDate === ""
//         ? `Prosze zapłącić za wysyłke ${order.shippingCost}$`
//         : `Paczka dostarczona: ${order.shipmentDate}, o godzinie ${order.shipmentTime}`
//       : "błędny kod";
//   }

//   function allTogether(array1, array2, id, code) {
//     let everything = `${greetUser(array1)} ${getIdAndCode(
//       id,
//       code
//     )} ${checkIfSend(array2)}`;

//     return everything;
//   }
//   return allTogether(greetings, orders, orderId, userCode);
// }

// console.log(checkMyOrderStatus());

// nastepnie uzytkownik jest proszony o podanie numeru id oraz personalnego kodu przypisanego do uzytkownika kazdy uzytkownik ma swoj kod

// jesli zamowienie jest wyslane czyli znajduje sie tam pusty string dostaje informacje kiedy zostało wyslane i kiedy będzie dostawa dane z data wysylki i proponowana data dostawy maja wyswietlac sie uzytkownikowi w postaci tablicy w formacie dd/mm/rrrr, hh/mm

// jesli zamowienie nie jest wyslane uzytkownik jest proszony o zaplacenie za wysylke kwota ma byc przypisana do sprzetu który zamowil

// wszystkie funckje muszą byc zamkniete wewnatrz funkcji ktora nazywa się checkMyOrderStatus,

// let questions = [
//   {
//     category: "school",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "memes",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "funny",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "vines",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "tiktok",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
// ];
// function getRandomQuestion(array) {
//   let randomNumber = Math.floor(Math.random() * array.length);
//   return array[randomNumber];
// }
// const randomQuestion = getRandomQuestion(questions); // === {category: "tiktok",    question: "what's 9 + 10?",    choices: ["19", "20", "21"],    answer: "21",  },

// function getRandomComputerChoice(choices) {
//   let randomNumber = Math.floor(Math.random() * choices.length);
//   return choices[randomNumber];
// }
// const randomAnswer = getRandomComputerChoice(randomQuestion.choices); // === choices: ["19", "20", "21"],
// function getResults(question, answer) {
//   if (answer == question.answer) {
//     return "The computer's choice is correct!";
//   } else {
//     return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
//   }
// }

// console.log(randomQuestion);
// console.log(randomAnswer);
// console.log(getResults(randomQuestion, randomAnswer));

// function getWordCount(sentence) {
//   let space = " ";
//   let count = 0;
//   let checkSpace = true;
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] !== space && checkSpace) {
//       count++;
//       checkSpace = false;
//     } else if (sentence[i] === space) {
//       checkSpace = true;
//     }
//   }
//   return count;
// }

// console.log(getWordCount(" "));
// console.log(getWordCount("s"));
// console.log(getWordCount("s s"));
// console.log(getWordCount("123 456"));
// console.log(getWordCount("When are you gonna start learning to code?"));

// let questions = [
//   {
//     category: "school",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "memes",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "funny",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "vines",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "tiktok",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
// ];
// function getRandomQuestion(array) {
//   let randomNumber = Math.floor(Math.random() * array.length);
//   return array[randomNumber];
// }
// const randomQuestion = getRandomQuestion(questions);

// function getRandomComputerChoice(choices) {
//   let randomNumber = Math.floor(Math.random() * choices.length);
//   return choices[randomNumber];
// }
// const randomAnswer = getRandomComputerChoice(randomQuestion.choices);

// function getResults(question, answer) {
//   if (question.answer == answer) {
//     return "The computer's choice is correct!";
//   } else {
//     return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
//   }
// }
// console.log(randomQuestion);
// console.log(randomAnswer);
// console.log(getResults(randomQuestion, randomAnswer));

// function getWordCount(sentence) {
//   let space = " ";
//   let count = 0;
//   let letter = true;
//   for (const word of sentence) {
//     if (word != space && letter == true) {
//       count++;
//       letter = false;
//     } else if (word == space) {
//       letter = true;
//     }
//   }
//   return count;
// }
// // console.log(getWordCount(" "));
// // console.log(getWordCount("s"));
// // console.log(getWordCount("s s"));
// console.log(getWordCount("213 456"));
// console.log(getWordCount("12 3 45 6"));

// // console.log(getWordCount("When are you gonna start learning to code?"));
// let num = 5;
// function factorialCalcutlator(num) {
//   for (let i = num - 1; i > 1; i--) {
//     if (num === 0) {
//       return 1;
//     } else {
//       num *= i;
//       // console.log(`I: ${i}`);
//       // console.log(`num: ${num}`);
//     }
//   }
//   return num;
// }
// console.log(factorialCalcutlator(num));

// const characters = [];
// const check = [];
// let validation = true;
// function mutation(array) {
//   let firstWord = array[0].toLowerCase();
//   let secondWord = array[1].toLowerCase();
//   for (const letter1 of firstWord) {
//     characters.push(letter1);
//   }
//   for (const letter2 of secondWord) {
//     check.push(letter2);
//   }
//   for (let i = 0; i < characters.length; i++) {
//     let matchFound = false; // to dodał chat
//     for (let j = 0; j < check.length; j++) {
//       if (characters[i] === check[j]) {
//         matchFound = true; // to dodał chat
//         break; // to dodał chat
//       }
//     }
//     if (!matchFound) {
//       // to dodał chat
//       validation = false;
//       break; // to dodał chat
//     }
//   }
//   return validation;
// }
// console.log(mutation(["hello", "wlleh"]));
// // if (characters[2] === characters[3]) {
// //     characters.splice(3, 1);
// //     console.log(`wywalem ${characters[2]}`);
// //

// let questions = [
//   {
//     category: "school",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "memes",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "funny",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "vines",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
//   {
//     category: "tiktok",
//     question: "what's 9 + 10?",
//     choices: ["19", "20", "21"],
//     answer: "21",
//   },
// ];
// function getRandomQuestion(array) {
//   let randomNumber = Math.floor(Math.random() * array.length);
//   return array[randomNumber];
// }
// const randomQuestion = getRandomQuestion(questions);

// function getRandomComputerChoice(choices) {
//   let randomNumber = Math.floor(Math.random() * choices.length);
//   return choices[randomNumber];
// }
// const randomAnswer = getRandomComputerChoice(randomQuestion.choices);

// // // console.log(randomAnswer);
// console.log(randomQuestion);
// console.log(randomAnswer);

// function getResults(question, answer) {
//   if (question.answer == answer) {
//     return "komputer ma racje";
//   } else {
//     return `komputer nie ma racji, to jest poprawna odpowiedz: ${question.answer}`;
//   }
// }
// console.log(getResults(randomQuestion, randomAnswer));

// function mutation(array) {
//   for (const word1 of array[0]) {
//     var firstWord = word1;
//   }
//   for (const word2 of array[1]) {
//     var secondWord = word2;
//   }
//   if (firstWord.includes(secondWord)) {
//     console.log("blad");
//   } else {
//     console.log("dobrze");
//   }
// }

// console.log(mutation(["hello", "he"]));

// function mutation(array) {
//   let firstWord = array[0].toLowerCase();
//   let secondWord = array[1].toLowerCase();

//   for (let letter of secondWord) {
//     if (!firstWord.includes(letter)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(mutation(["hello", "hey"]));

// function chunkArrayInGroups(array, num) {
//   const arr = [];
//   for (var i = 0; i < 1000; i++) {
//     var cut = array.splice(0, num);
//     if (cut.length != 0) {
//       arr.push(cut);
//     }
//   }
//   return JSON.stringify(arr);
// }

// // console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// //console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// //console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// //console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
// //console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
// //console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num);
// }

// const fruit = {
//   name: 'apple',
//   color: 'red',
//   price: 0.99
// };

// for (const prop in fruit) {
//   console.log(fruit[prop]);
// }

// let i = 5;

// while (i > 0) {
//   console.log(i);
//   i--;
// }

// let userInput;

// do {
//   userInput = prompt("Please enter a number between 1 and 10");
// } while (Number(userInput) < 1 || Number(userInput) > 10);

// alert("You entered a valid number!");

// // Example of break statement
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// // Output: 0, 1, 2, 3, and 4

// // Example of continue statement
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// // Output: 0, 1, 2, 3, 4, 6, 7, 8, and 9

// for (let i = 0; i < 25; i += 2) {
//   if (i % 5 === 0) {
//     continue;
//   }
//   if (i % 13 === 0) {
//     break;
//   }
//   console.log(i);
// }
// let newArray = [];
// function frankenSplice(array1, array2, index) {
//   newArray = [...array1];
//   for (let i = 0; i < index; i++) {
//     newArray.splice(i, 0, array2[i]);
//   }
//   for (let i = index; i < array2.length; i++) {
//     newArray.push(array2[i]);
//   }
//   console.log(array1);
//   console.log(array2);

//   return newArray;
// }
// console.log(frankenSplice([1, 2, 3], [4, 5], 1));
// console.log(frankenSplice([1, 2], ["a", "b"], 1));
// console.log(
//   frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
// );
// console.log(frankenSplice([1, 2, 3, 4], [], 0));

// function pyramid(star, int) {
//   for (let i = 0; i < int; i++) {
//     star += star;
//     for (let j = 0; j <= i; j++) {
//       star = star + "\n";
//     }
//   }
//   return star;
// }
// console.log(pyramid("o", 2));
// const space = " ";
// function pyramid(star, int) {
//   for (let i = 1; i < int; i++) {
//     console.log(space.repeat(int - i) + star.repeat(2 * i - 1));
//   }
//   return "    ||";
// }
// console.log(pyramid("*", 6));

// function getAverage(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = array[i] + sum;
//   }
//   sum = sum / array.length;
//   return sum;
// }
// function getGrade(grade) {
//   switch (true) {
//     case grade > 99 && grade <= 100:
//       return "A+";
//     case grade >= 90:
//       return "A";
//     case grade >= 80:
//       return "B";
//     case grade >= 70:
//       return "C";
//     case grade >= 60:
//       return "D";
//     default:
//       return "F";
//   }
// }

// function hasPassingGrade(grade) {
//   return getGrade(grade) != "F" ? true : false;
// }
// function studentMsg(array, grade) {
//   if (hasPassingGrade(grade)) {
//     return `Class average: ${getAverage(array)} Your grade: ${getGrade(
//       grade
//     )}. You passed the course.`;
//   } else {
//     return `Class average: ${getAverage(array)} Your grade: ${getGrade(
//       grade
//     )}. You failed the course.`;
//   }
// }

// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

// // console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97]));
// // console.log(getGrade(60));
// // console.log(studentMsg());
// let inventory = [{ name: "flour", quantity: 5 }];

// function findProductIndex(productName) {
//   let counter = -1;
//   for (const check of inventory) {
//     counter++;
//     if (check.name.includes(productName)) {
//       return counter;
//     }
//   }
//   return "nie ma tkaiego produtku";
// }
// function addProduct(product) {
//   product.name = product.name.toLowerCase();
//   for (const check of inventory) {
//     if (check.name.includes(product.name)) {
//       check.quantity += product.quantity;

//       return JSON.stringify(inventory);
//     }
//   }
//   inventory.push(product);
//   return JSON.stringify(inventory);
// }

// function removeProduct(product) {
//   for (let check of inventory) {
//     if (check.name.includes(product.name)) {
//       check.quantity -= 1;
//       if (check.quantity <= 0) {
//         inventory.splice(check, 1);
//       }
//       return JSON.stringify(inventory);
//     }
//   }
//   return "błąd";
// }

// console.log(findProductIndex("bird"));
// console.log(addProduct({ name: "FLOUR", quantity: 5 }));
// console.log(removeProduct({ name: "dog", quantity: 1 }));
// function xd(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// function xddd(array) {
//   for (const letter in inventory) {
//     console.log(letter.name);
//   }
// }
// function xdd(array) {
//   for (const letter of inventory) {
//     console.log(letter.name);
//   }
// }

// console.log(xdd(inventory));
// let alphabet =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
// function generatePassword(num) {
//   let randomLetter;
//   let password2 = [];
//   for (let i = 0; i < num; i++) {
//     let randomNumber = Math.floor(Math.random() * alphabet.length);
//     randomLetter = alphabet[randomNumber];
//     password2.push(randomLetter);
//   }
//   let password = password2.join("");
//   return password;
// }
// console.log(`Generated password: ${generatePassword(7)}`);

// function sumAll(array) {
//   let newArray = [];
//   let sum = 0;
//   let finalSum = 0;
//   let firstNumber = array[0];
//   let secondNumber = array[1];
//   if (secondNumber > firstNumber) {
//     for (let i = firstNumber; i < secondNumber; i++) {
//       newArray.push(i);
//     }
//     for (let i = 0; i < newArray.length; i++) {
//       sum += newArray[i];
//       finalSum = sum + secondNumber;
//     }
//   } else if (firstNumber > secondNumber) {
//     for (let i = secondNumber; i < firstNumber; i++) {
//       newArray.push(i);
//     }

//     for (let i = 0; i < newArray.length; i++) {
//       sum += newArray[i];
//       finalSum = sum + firstNumber;
//     }
//   } else if (firstNumber == secondNumber) {
//     finalSum = firstNumber;
//   }

//   return finalSum;
// }
// console.log(sumAll([7, 3]));

// function getMax(array) {
//   let max = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//     } else if (array[i] < 0 && max == 0) {
//       max = array[i];
//     }
//   }
//   return `najwieksza liczba to ${max}`;
// }

// console.log(getMax([-1, -3, -11, -1, -2]));
// function charFrequency(string) {
//   const result = {};

//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];

//     if (result[char]) {
//       result[char] += 1;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }
// console.log(charFrequency("hello"));

// const people = [
//   { name: "Ola", age: 17 },
//   { name: "Jan", age: 22 },
//   { name: "Ewa", age: 18 },
// ];

// function filterAdults(array) {
//   let adults = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].age >= 18) {
//       adults.push(array[i]);
//     }
//   }
//   return JSON.stringify(adults);
// }
// console.log(filterAdults(people));
// const data = {
//   a: 5,
//   b: {
//     b1: 10,
//     b2: {
//       b21: 3,
//     },
//   },
//   c: 2,
// };

// function sumValues(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       sum += obj[key];
//     } else if (typeof obj[key] === "object") {
//       sum += sumValues(obj[key]);
//     }
//   }
//   return sum;
// }
// console.log(sumValues(data));

// const cart = [
//   { name: "Banana", price: 2.5, quantity: 3 },
//   { name: "Milk", price: 3, quantity: 1 },
//   { name: "Bread", price: 4, quantity: 2 },
// ];

// function checkout(cart) {
//   let multipleProducts = 0;

//   for (const item of cart) {
//     multipleProducts = item.price * item.quantity + multipleProducts;
//   }

//   return multipleProducts;
// }

// console.log(checkout(cart));
// const user = {
//   name: "Bartek",
//   age: 24,
//   country: "Polska",
// };

// function countKeys(obj) {
//   let counter = 0;
//   for (let key in obj) {
//     if (key) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(countKeys(user));

// const stats = {
//   views: 150,
//   likes: 20,
//   author: "Bartek",
//   shares: 10,
// };

// function doubleNumbers(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] = obj[key] * 2;
//     } else if (typeof obj[key] == "string") {
//       continue;
//     }
//   }
//   return obj;
// }
// console.log(doubleNumbers(stats));

// const scores = {
//   bartek: 120,
//   kasia: 95,
//   ola: 130,
//   michal: 150,
// };

// function totalPoints(array) {
//   let sum = 0;
//   for (let key in array) {
//     sum += array[key];
//   }
//   return sum;
// }

// console.log(totalPoints(scores));

// function charFrequency(str) {
//   let counter = 1;
//   let obj = {};
//   for (let letter of str) {
//     if (obj[letter]) {
//       obj[letter] = counter + 1;
//     } else {
//       obj[letter] = counter;
//     }
//   }
//   return obj;
// }

// console.log(charFrequency("hello"));

// const users = [
//   { name: "Bartek", age: 24 },
//   { name: "Ola", age: 19 },
//   { name: "Kasia", age: 31 },
// ];

// function showUsers(arr) {
//   let human = "";
//   for (let person of arr) {
//     human += `${person.name} ma ${person.age} lata. \n`;
//   }
//   return human;
// }
// console.log(showUsers(users));

// const data = {
//   title: "nowość",
//   views: 1200,
//   category: "tech",
// };

// function uppercaseStrings(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "string") {
//       obj[key] = obj[key].toUpperCase();
//     }
//   }
//   return obj;
// }

// console.log(uppercaseStrings(data));

// const cart = [
//   { name: "Laptop", price: 3000 },
//   { name: "Mouse", price: 100 },
//   { name: "Pad", price: 50 },
// ];
// function getTotalPrice(cart) {
//   let sum = 0;
//   for (let key of cart) {
//     if (typeof key.price == "number") {
//       sum += key.price;
//     }
//   }
//   return sum;
// }
// console.log(getTotalPrice(cart));

// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(5));

// function maxOfThree(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }
// console.log(maxOfThree(6, 3, 5));

// function reverseString(str) {
//   let word = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     word += str[i];
//   }
//   return word;
// }
// console.log(reverseString("hello"));

// function countChar(str, char) {
//   let counter = 0;
//   for (let letter of str) {
//     if (letter == char) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(countChar("hellllo", "l"));

// function sumArray(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(sumArray([-1, 2, 3, 4]));

// function filterEvenNumbers(arr) {
//   const array = [];
//   for (let num of arr) {
//     if (num % 2 == 0) {
//       array.push(num);
//     }
//   }
//   return array;
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// function getFrequency(arr) {
//   let obj = {};
//   for (let letter of arr) {
//     if (obj[letter]) {
//       obj[letter] += 1;
//     } else {
//       obj[letter] = 1;
//     }
//   }
//   return obj;
// }
// console.log(getFrequency(["a", "b", "a", "c", "b", "b"]));

// function findLongestWord(sentence) {
//   let countableWords = sentence.split(" ");
//   let biggestWord = "";
//   let biggestWord1 = 0;

//   for (let word of countableWords) {
//     if (biggestWord.length < word.length) {
//       biggestWord = word;
//       biggestWord1 = word.length;
//     }
//   }
//   let result = `najdłuższe słowo to "${biggestWord}" i ma: ${biggestWord1} znaków `;
//   return result;
// }

// console.log(
//   findLongestWord(
//     "Ala ma kota i ogromneg12312312312312312312o 12312312312312312312 hipopotama"
//   )
// );

// function isAnagram(str1, str2) {
//   let counter = 0;
//   let str11 = str1.split("");
//   let str22 = str2.split("");
//   for (let letter of str11) {
//     if (str22.includes(letter)) {
//       counter++;
//     } else {
//       return false;
//     }
//   }
//   if (counter) {
//     return true;
//   } else return false;
// }
// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("wello", "world"));

// const data = {
//   user1: { age: 22 },
//   user2: { age: 30 },
//   user3: { age: 25 },
// };

// function sumAges(arr) {
//   let sum = 0;
//   for (let key in arr) {
//     sum += arr[key].age;
//   }
//   return sum;
// }
// console.log(sumAges(data));

// const users = [
//   { id: 1, name: "Anna" },
//   { id: 2, name: "Bartek" },
// ];

// function chagneArray(arr) {
//   let counter = 0;
//   let obj = {};
//   for (let key in arr) {
//     counter++;
//     obj[counter] = arr[key];
//   }
//   return JSON.stringify(obj);
// }
// console.log(chagneArray(users));

// let cart = [
//   { id: 2, name: "Pen", price: 5 },
//   { id: 3, name: "Pen", price: 5 },
//   { id: 4, name: "Pen", price: 5 },
// ];

// function addToCart(cart, item) {
//   cart.push(item);
//   return JSON.stringify(cart);
// }
// console.log(addToCart(cart, { id: 1, name: "Book", price: 20 }));

// function removeFromCart(cart, id) {
//   cart.splice(id, 1);
//   return JSON.stringify(cart);
// }
// console.log(removeFromCart(cart, 1));

// function getTotal(arr) {
//   let sum = 0;
//   for (let item of arr) {
//     sum += item.price;
//   }
//   return sum;
// }
// console.log(getTotal(cart));

// napisz funkcje która jako argument ma cos a zwróci wyraz napisany od tyłu

// function reverse(str) {
//   str = str.split("").reverse().join("");
//   return str;
// }
// console.log(reverse("hello"));

// function reverse2(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }
// console.log(reverse2("hello"));

// napisz funckcje ktora przyjmie jakąkolwiek liczbe na wejsciu i zwróci liczbe która będzie zformatowana w ten sposó że bedzie zawierałą spacje jako separator tyśieciy i dwa miejsca po przecinku 1 000,00 tysiac

// function coolNumber(num) {
//   let counter = 0;
//   const arr = [];
//   num = num.toFixed(2);
//   num = num.toString();

//   for (let i = 0; i < num.length; i++) {
//     arr.push(num[i]);
//     if (num[i] == ".") {
//       arr.splice(i, 1, ",");
//     }
//   }

//   for (let i = num.length - 3; i >= 0; i--) {
//     if (arr[i] != ",") {
//       counter++;
//       if (counter == 3 && i != 0) {
//         arr.splice(i, 0, " ");
//         counter = 0;
//       }
//     }
//   }

//   let strArr = arr.join(" ");

//   return strArr;
// }
// console.log(coolNumber(1000));

// const arr = [1, 2, 3, 4, 5];

// function double(arr) {
//   return arr.map((x) => x * 2);
// }
// console.log(double(arr));

// const arr = [
//   { name: "A", age: 20 },
//   { name: "B", age: 25 },
// ];

// function names(arr) {
//   return arr.map((item) => item.name);
// }
// console.log(names(arr));

// const arr = [17, 22, 15, 30];

// function checkAge(arr) {
//   return arr.map((x) => {
//     if (x < 18) {
//       return x + 1;
//     } else {
//       return x;
//     }
//   });
// }

// console.log(checkAge(arr));

// const arr = ["foo", "bar", "baz"];

// function checkLength(arr) {
//   return arr.map((x) => {
//     return x.length;
//   });
// }
// console.log(checkLength(arr));

// const arr = [[1, 2], [3, 4], [5]];

// function flatten(arr) {
//   return arr.map((x) => x * 1);
// }
// console.log(flatten(arr.flat()));

// const arr = [1, 2, 3, 4, 5, 6];

// function square(arr) {
//   return arr.map((x) => x * x);
// }
// console.log(square(arr));

//--------------------------------
// const prices = [10, 20, 30, 40];

// function add(arr) {
//   return arr.map((x) => x + 5);
// }
// console.log(add(prices));

// const names = ["anna", "bartek", "ola"];
// function goBig(arr) {
//   return arr.map((x) => x.toUpperCase());
// }
// console.log(goBig(names));
// -----------------------------------------
// const numbers = [5, 10, 15];

// function zl(arr) {
//   return arr.map((x) => x + " zł");
// }
// console.log(zl(numbers));

// const users = [
//   { name: "Anna", city: "Warszawa" },
//   { name: "Tomek", city: "Poznań" },
// ];
// const cityCase = {
//   Warszawa: "Warszawie",
//   Poznań: "Poznaniu",
// };

// function concat(arr) {
//   return arr.map((x) => {
//     const miasto = cityCase[x.city] || x.city;
//     return `${x.name} mieszka w ${miasto}`;
//   });
// }
// console.log(concat(users));
// -----------------------------------------
// const ids = [1, 2, 3];

// function convertToObj(arr) {
//   return arr.map((x) => {
//     return { id: x };
//   });
// }
// console.log(JSON.stringify(convertToObj(ids)));

// const list = ["jablko", "banan", "pomarancza"];

// function addIndex(arr) {
//   return arr.map((x, index) => `${index + 1}. ${x}`);
// }
// console.log(addIndex(list));
// ---------------------------------------------
// const names = ["Anna", "Bartek", "Ola"];

// function convertToObj(arr) {
//   return arr.map((x) => {
//     return { name: x };
//   });
// }
// console.log(convertToObj(names));

// const letters = ["a", "b", "c"];

// function repeat(arr) {
//   return arr.map((x) => x.repeat(3));
// }
// console.log(repeat(letters));
// -----------------------------------------------
// const data = [
//   { name: "Anna", age: 20 },
//   { name: "Tomek", age: 25 },
// ];

// function convertToString(arr) {
//   return arr.map((x) => `${x.name} (${x.age} lat)`);
// }
// console.log(convertToString(data));

// const numbers = [1, 2, 3];

// function convertToObj(arr) {
//   return arr.map((x) => {
//     return { id: x, value: `wartość ${x}` };
//   });
// }
// console.log(JSON.stringify(convertToObj(numbers)));

//-----------------------------------

// const nums = [1, 2, 3, 4, 5, 6];

// function isEven(arr) {
//   return arr.filter((x) => x % 2 == 0);
// }
// console.log(isEven(nums));

// const words = ["kot", "pies", "słoń", "a"];

// function long(arr) {
//   return arr.filter((x) => x.length > 2);
// }
// console.log(long(words));

// const users = [
//   { name: "Anna", active: true },
//   { name: "Tomek", active: false },
// ];

// function isTrue(arr) {
//   return arr.filter((x) => x.active == true);
// }
// console.log(JSON.stringify(isTrue(users)));

// const temperatures = [18, 22, 29, 15, 30];

// function isHot(arr) {
//   return arr.filter((x) => x > 20);
// }
// console.log(isHot(temperatures));

// const products = [
//   { name: "Mleko", price: 5 },
//   { name: "Chleb", price: 3 },
//   { name: "Kawa", price: 20 },
// ];

// function expensive(arr) {
//   return arr.filter((x) => x.price > 5);
// }
// console.log(JSON.stringify(expensive(products)));

// const names = ["Anna", "Bartek", "Ania", "Tomek"];

// function isA(arr) {
//   return arr.filter((x) => x[0] == "A");
// }
// console.log(isA(names));

// ------------------------------------------------------
// const numbers = [1, 3, 5, 6];

// function isEven(arr) {
//   return arr.some((x) => x % 2 == 0);
// }
// console.log(isEven(numbers));

// const words = ["kot", "pies", "słoń"];

// function moreLetters(arr) {
//   return arr.every((x) => x.length > 2);
// }
// console.log(moreLetters(words));

// const users = [
//   { name: "Anna", active: true },
//   { name: "Tomek", active: false },
// ];

// function isActive(arr) {
//   return arr.some((x) => (x.active == true ? true : false));
// }
// console.log(isActive(users));

// const temperatures = [21, 25, 30, 10];

// function isHot(arr) {
//   return arr.every((x) => x > 20);
// }
// console.log(isHot(temperatures));

// const products = [
//   { name: "Mleko", price: 5 + "zł" },
//   { name: "Chleb", price: 3 },
// ];

// function expensive(arr) {
//   return arr.every((x) => x.price > 2 + "zł");
// }
// console.log(expensive(products));

// const names = ["Anna", "Bartek", "Ania", "Tomek"];

// function startsWithB(arr) {
//   return arr.some((x) => x.toLowerCase().startsWith("b"));
// }
// console.log(startsWithB(names));

// ------------------------------------------------------

// const arr = [3, 6, 9, 12];

// function div(arr) {
//   return arr.find((x) => x % 4 == 0);
// }
// console.log(div(arr));

// const arr = ["Ola", "Anna", "Bartek"];

// function startsWithA(arr) {
//   return arr.find((x) => x.toLowerCase().startsWith("a"));
// }
// console.log(startsWithA(arr));

// const people = [
//   { name: "Anna", age: 25 },
//   { name: "Tomek", age: 17 },
// ];

// function isAdult(arr) {
//   return arr.find((x) => x.age > 18);
// }
// console.log(isAdult(people));

// const animals = ["pies", "kot", "słoń", "koń"];

// function hasFourLetters(arr) {
//   return arr.find((x) => x.length == 4);
// }
// console.log(hasFourLetters(animals));

// const ids = [
//   { id: 1, active: false },
//   { id: 2, active: false },
//   { id: 3, active: true },
// ];

// function isActive(arr) {
//   return arr.find((x) => x.active == true);
// }
// console.log(isActive(ids));

// const price = [10, 15, 20, 25];

// function isCheap(arr) {
//   return arr.find((x) => x > 18 && x < 24);
// }
// console.log(isCheap(price));

// ------------------------------------------------
// const numbers = [4, 1, 7, 3];

// function sort(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(sort(numbers));

// const letters = ["d", "a", "c", "b"];
// // wynik: ["a", "b", "c", "d"]

// function sort(arr) {
//   return arr.sort();
// }
// console.log(sort(letters));

// const numbers = [2, 9, 1, 6];
// // wynik: [9, 6, 2, 1]

// function sort(arr) {
//   return arr.sort((a, b) => b - a);
// }
// console.log(sort(numbers));

// const names = ["Bartek", "Tomek", "Anna", "Zosia"];
// // wynik: ["Anna", "Bartek", "Tomek", "Zosia"]

// function sort(arr) {
//   return arr.sort();
// }
// console.log(sort(names));

// const people = [
//   { name: "Ola", age: 25 },
//   { name: "Ania", age: 19 },
//   { name: "Tomek", age: 30 },
// ];
// // wynik: wiek rosnąco

// function sort(arr) {
//   return arr.sort((a, b) => a.age - b.age);
// }
// console.log(sort(people));

const products = [
  { name: "Kawa", price: 20 },
  { name: "Mleko", price: 5 },
  { name: "Chleb", price: 3 },
];
// wynik: cena od najwyższej

function sort(arr) {
  console.log(arr);
}
console.log(JSON.stringify(products));
