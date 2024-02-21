
// For Of use on array or string not on object.
const numbers = [1, 6, 8, 4];

for(const num of numbers){
   // console.log(num);
}

const nobab = 'Siraj ud Doula';

for(const char of nobab){
    //console.log(char);
}

const glass= {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
};

for(const key in glass){
    const value = glass[key];
    console.log(key,value);

}