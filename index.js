// var expect = function (val) {
//   return {
//     toBe: (expected) => {
//       if (val === expected) {
//         return true;
//       } else {
//         throw "Not Equal";
//       }
//     },
//     notToBe: (expected) => {
//       if (val !== expected) {
//         return true;
//       } else {
//         throw "Equal";
//       }
//     },
//   };
// };

// // true
// // expect(5).notToBe(5); // throws "Equal"

// // console.log(expect(5).toBe(1));
// // console.log(expect(5).notToBe(5));

// /**
//  * expect(5).toBe(5); // true
//  * expect(5).notToBe(5); // throws "Equal"
//  */

// var createCounter = function (init) {
//   let number = init;

//   return {
//     increment: () => {
//       number++;
//       return number;
//     },
//     decrement: () => {
//       number--;
//       return number;
//     },
//     reset: () => {
//       return (number = init);
//     },
//   };
// };

// /**
//  * const counter = createCounter(5)
//  * counter.increment(); // 6
//  * counter.reset(); // 5
//  * counter.decrement(); // 4
//  */

// const counter = createCounter(0);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// // console.log(
// //   counter.increment(),
// //   counter.increment(),
// //   counter.decrement(),
// //   counter.reset(),
// //   counter.reset(),
// // );




