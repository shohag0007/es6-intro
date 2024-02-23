class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sleep (){
        console.log(`Sleeping Now ${this.name}`)
    }

    activity (){
        this.sleep();
    }
}

const kodom = new Person('Parvez Masud', 25);
console.log(kodom);
//kodom.sleep();

const vaja = new Person('vaja badam');
vaja.sleep();

//
const lazy = kodom.sleep;
