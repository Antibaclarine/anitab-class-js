function Person(name,age,height){
    this.name=name
    this.age=age
    this.height=height
    this.greet=function(){
        console.log("hello");
    }
    this.greet()
};
let person= new Person('Agnes',23,'4ft');
console.log({person});
let person2=new Person('Ann',20,'6ft');
console.log(person);
console.log(Person.prototype);
Person.prototype.weight=50;
console.log(person.weight);
person2.weight=60
console.log(person2);
console.log(person2 instanceof Person);