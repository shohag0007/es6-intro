
// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.


const numbers = [5, 6, 7, 8, 9, 10];

const double2 = numbers.map(n => n * 2);  // best arrow method

// const result = numbers.map(double2);


console.log(double2);

// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.
// function doubleIt(num){
//     console.log('Num Now', num);
//     return num * 3;
// }

//console.log(result);

// const doubled = [];
// for( const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);;