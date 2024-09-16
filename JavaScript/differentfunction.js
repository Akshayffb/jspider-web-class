function pro(x,y){
    return x+y;
}
document.write("General Function \n "+pro(2,6));
document.write("</br>");
document.write()
// document.write(pro(2,6));



var pro1 = function(x,y,z){
    return x*y*z;
}
document.write("</br>");
document.write("Annonomus function \n"); 
document.write("</br>");
document.write("</br>");
document.write(pro1(2,4,6))


document.write("</br>");
document.write("</br>");


document.write("Arrow function");

var pro2 = (x,y) =>{
 return x/y;
}
document.write("</br>");
document.write("</br>");
document.write(pro2(8,2));
document.write("</br>");

document.write("</br>");




document.write("Self Invoking function");
document.write("</br>");
document.write("a%b");
document.write("</br>");


(function (a,b) {
   document.write(a%b);
}(2,9)
)
document.write("</br>");
document.write("</br>");


document.write("function hositing \n ");
document.write("</br>");

call()
function call(){
    document.write("Calling....");
}
