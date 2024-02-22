   

   const products = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'Dell', price: 45000},
    {id: 3, name: 'Hp', price: 40000},
    {id: 4, name: 'Macbook', price: 1050000},
   ]
   

   // map

   const names = products.map(product => product.name);
   //console.log(names);
   const newPrice = products.map(price => price.price);
   console.log(newPrice);

   // forEach
   products.forEach(p => console.log(p.id));

   // Filter

   const expensive = products.filter(p => p.price > 50000);
   //console.log(expensive);

   // Find
   const lessFifty = products.find(p => p.price < 50000);
  // console.log(lessFifty);

  // Reduce
  const total = products.reduce((acum, curr) => acum + curr.price, 0);
  console.log(total);



   