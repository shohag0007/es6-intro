const products = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'Dell', price: 45000},
    {id: 3, name: 'Hp', price: 40000},
    {id: 4, name: 'Macbook', price: 1050000},
   ]
   
   // has some properties, method

   class Products{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`Talking about ${talk}`)

    }
   }

   const lenovo = new Products('Le Le Lenovo');
//    console.log(lenovo);
//    lenovo.speak('hello everyone');

 class Teacher( ) {
    Constructor(name, subject){
        this.name = name;
        this.subject = subject;


    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}

const kabir = new Teacher('Kabir Sir', 'English');
console.log(kabir);

const rashid = new Teacher('rashid', 'math');
console.log(rashid);