const actor = {
    name: 'Shohag',
    age: 35,
    phone: '01915952995',
    money: 327832933959383,
}

// if right side is an object left side of destructuring will be object as well.
// use property name as a variable that contains a property value.

const {age: boyos, phone, money, name} = actor;
console.log(boyos);
console.log(money);

// array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);




