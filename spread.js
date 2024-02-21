const max = Math.max(16, 23 ,22, 10, 15, 76);
// console.log(max);
const numbers =[3, 2, 5, 7, 8, 70, 90,34];
const arrayMax = Math.max(...numbers);
//console.log(...numbers);
console.log(arrayMax);

// Use spread operator to copy
const friends = [12, 13 , 14, 15];
const bondhu = friends;
const dosto = [...friends]; // copy

friends.push(100);
console.log(dosto);
console.log(friends);

// advance
const sonkha = [...friends, 999]; // add extra element
console.log(sonkha);