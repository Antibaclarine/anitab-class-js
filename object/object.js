// creat an object

let person ={
    name:"Ann",
    age:20,
    friend:{
        name:"Amanda",
        age:25,
        myFriend:{
    name:"susan",
    age:21
        }
    }
}

let person2=new Object();
// adding properties
person2.name="Ann";  
person2['age']=30;
console.log({person2});
person.age=56;
console.log({person});
console.log(person.name);
console.log(person.friend.myFriend.name);
console.log(person['friend']['myFriend']['name']);

delete person.age
console.log({person});
// clone
let person3=Object.assign(person)
console.log({person3});
let keys=Object.keys(person3);
console.log({keys});
