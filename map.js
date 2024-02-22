const numbers = [5, 6, 7, 8, 9, 10];
// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.
function doubleIt(num){
    return num * 3;
}

const result = numbers.map(doubleIt);
console.log(result);





// const doubled = [];
// for( const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);;