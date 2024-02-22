// data access

const data = [{id: 1, name: 'abul', address: 'kochu khet'}];
console.log(data[0].id); // get output object from array


const products = {
    count: 5000,
    data: [
        { id: 1, name: 'Lenovo Laptop', price: 65000},
        { id: 2, name: 'Macbook Laptop', price: 165000},

    ]
}

// second product price

console.log(products.data[1].price);



const user = {
    id: 5001,
    name: 'Md Delowar Hossain Shohag',
    address: {
        street: {
            first: '1/1 Dulabala',
            second: 'kaligonj Satkhira',
            third: 'Dulabala',
        },
        
        city: 'Satkhira',
    }
}

//console.log(user.address.street.second); // street second output


const user2 = {
    id: 5002,
    name: 'potenga sea beach',
    address: {
        city: 'chittagong',
        country: 'Bangladesh',
    }
}

console.log(user.address.street.second);
console.log(user2.address.street?.second);