console.log("start");
function call(){
    console.log("calling....");
}


setTimeout(call,5000)
console.log("end");

let count = 0
let z = setInterval(()=>{
    console.log(count++)
    
})