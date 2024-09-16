
var c=console.log.bind(document);
// I have stored console.log into c variable for shortcut use

c("All Functions")
//general Function or named 
function generalFunction(a,b){
    return a+b;
}
c("General "+generalFunction(10,20));


//anonymous function

let anonymous = function(a,b){
    return a-b;
}
c("anonymous "+anonymous(15,5));


//arrow function

let arrow= (a,b)=>{
    return a*b;
}
c("arrow "+arrow(12,8));


//Self Invoking function

let selfInvokingFunction = (function (a,b,c){
    return a*b/c;
})
c("selfInvokingFunction "+selfInvokingFunction(15,20,100))