// EXAMPLE 1 - Get the Previous day of a Date (or yesterday) in JavaScript

function getPreviousDay(date = new Date()) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return previous;
}

console.log(getPreviousDay()); // 👉️ yesterday

// 👇️ Fri Dec 23 2022
console.log(getPreviousDay(new Date('2022-12-24')));

// 👇️ Sat Dec 31 2022
console.log(getPreviousDay(new Date('2023-01-01')));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get yesterday's Date formatted as YYYY-MM-DD in JavaScript

// const yesterday = new Date();
// yesterday.setDate(yesterday.getDate() - 1);

// console.log(yesterday); // 👉️ "Mon Jul 24 2023"

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//   return [
//     date.getFullYear(),
//     padTo2Digits(date.getMonth() + 1),
//     padTo2Digits(date.getDate()),
//   ].join('-');
// }

// console.log(formatDate(yesterday)); // 👉️ "2023-07-24"
