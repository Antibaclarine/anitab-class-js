let a=20

function add(b){
    console.log(a+b);
    let c=30
    console.log(a+b+c);
}
add(20);
// console.log(c);

function greet(){
    let hello='hey';
    function talk(){
        let greeting="hello there";
        console.log(`${hello} ${greeting}`);
    }
    talk()
    
}
greet()
