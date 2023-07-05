const add=(a)=>{
    let num=20;
    const subract= (b)=>{
        return num-a +b;
    }
    return subract;
}

let nums=add(50);
console.log({nums});
console.log(nums(25));