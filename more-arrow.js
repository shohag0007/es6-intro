const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;
// single parameter
const getAge = (person) => person.age;
const student = { name: 'shohag', age: 45};
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5, 9, 88, 2, 13]);
console.log(third);
// no parameter
const getPI = () => Math.PI;
console.log(getPI()) ;

