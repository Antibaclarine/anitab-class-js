let items=[2,5,"sweet",false,45];
// Array Method
items.push(62);
console.log(items);
items.unshift(6.5);
console.log(items);
items.pop()
console.log(items);
items.shift()
console.log(items)
let num=[1,9,34,12,25,30];
 let sorted=num.sort((a,b)=> a-b);
console.log(num)

// given an array of x element, return an array of each element in x multiply by 2
const result=num.map(
    (items)=>{
        return items*2
    }
)
console.log(result);


let a =[1,2,3];
let b =[4,5,6];
let joined1=a.concat(b);
console.log({joined1});
let c=[1,40,...a,...b];
console.log({c});
// destructuring
let [z,x,...e]=c;
console.log({z});
console.log({x});
console.log({e});