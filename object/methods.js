let student={
    name:"Steven",
    age:19,
    greet:function(){
        console.log("Hello");
        console.log(`Hello my name is ${student.name} and I am ${student.name} years old`);
        console.log(`Hello my name is ${this.name} and I am ${this.name} years old`);
    }
};
student.greet();

student.talk=function(){
    console.log("Hello There");
};
student.talk();