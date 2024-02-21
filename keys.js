const glass= {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
}
//console.log(glass); // output property and values
const keys = Object.keys(glass); // property name
// [ 'name', 'color', 'price', 'isCleaned' ] got output
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ] got output
//console.log(values); // only output property name

const entries = Object.entries(glass);
//console.log(entries);

// array of array, two dimentional array
    
// [ 
//     [ 'name', 'glass' ],
//      [ 'color', 'golden' ],
//      [ 'price', 12 ],
//      [ 'isCleaned', true ]   
// ] 

delete glass.isCleaned; // delete property from object array.
// Object.freeze(glass);
// glass.source = 'Bangladesh'; // will not add or remove anything

console.log(glass);