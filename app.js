"use strict";

// const bogstaver = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// const etBogstav = bogstaver[4];
// const etAndetBogstav = bogstaver[7];

// console.log(bogstaver);
// bogstaver[4] = '*';
// console.log(bogstaver);

// const newArr = bogstaver;
// console.log(newArr[4]);

// bogstaver[6] = "€";
// console.log(newArr[4]);

// console.log(bogstaver.length);

// bogstaver.length = 4;
// console.log(bogstaver);

// bogstaver.length = 42;
// console.log(bogstaver);

// bogstaver[231] = '😊'
// console.log(bogstaver);

// console.log(bogstaver[43]);

// function log(bogstav) {
//     console.log(bogstav);
// }

// bogstaver.forEach(log);

// The push() method adds new items to the end of an array

// The pop() method removes (pops) the last element of an array.

// The unshift() method adds new elements to the beginning of an array.

// The shift() method removes the first item of an array.

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.push("Draco");
// console.log(result);
// console.log(people);

// result = people.pop();
// console.log(result);
// console.log(people);

// result = people.push("Neville");
// console.log(result);
// console.log(people);

// result = people.push("Luna");
// console.log(result);
// console.log(people);

// result = people.slice(0, 3);
// console.log(result);
// console.log(people);

// result = people.splice(1, 0, "Cho"); // 1 betyder at det er på 1'ts plads hvor "Cho" bliver puttet ind og 0 betyder at der er ingenting som blier fjernet
// console.log(result);
// console.log(people);

// people[1] = "Ginny";
// console.log(result);
// console.log(people);

// result = people.push("Fred", "George");
// console.log(result);
// console.log(people);

// result = people.indexOf("Fred");
// console.log(result);
// console.log(people);

// result = people.splice(result, 1);
// console.log(result);
// console.log(people);


// const alfabet = "abcdefghijklmnopqrstuvxyzæøå";
// console.log(alfabet);
// const bogstaver = alfabet.split();
// console.log(bogstaver);
// const bogstaver2 = Array.from(alfabet);
// console.log(bogstaver2);

// const alfa2 = bogstaver2.toString();
// console.log(alfa2);
// const alfa3 = bogstaver2.join();
// console.log(alfa3);
// const alfa4 = bogstaver2.join("");
// console.log(alfa4);
// const alfa5 = bogstaver2.join(" ");
// console.log(alfa5);

const sameAs = ["Potter", "Weasley", "Granger"];
console.log(sameAs);
const [harry, ron, hermione] = sameAs
console.log([harry, ron, hermione]);