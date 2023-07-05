const work= ()=>{
    console.log('Lets work');
}

const reminder= ()=>{
    console.log('please attend the meeting');
}
setInterval(reminder,1000)
setTimeout(reminder,4000);//asynchronus

const takeBreak=()=>{
    console.log('please rest');
}
takeBreak()