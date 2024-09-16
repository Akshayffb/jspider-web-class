var c=console.log.bind(document)


let btn = document.getElementById('on');
btn.addEventListener('click', ()=>{
   let b= window.prompt("Enter Something")
    let date =new Date();
   window.alert(date);
   document.write(`Todays date is ${date.toLocaleDateString()}`);
   document.write("</br>");
   document.write('Hey '+b+date.toLocaleDateString());
   //use backtick instead of single quote
})


let timedb=document.getElementById("timedb");
timedb.addEventListener('dblclick', ()=>{
    let date=new Date();
    document.write(`Current Time is ${date.toLocaleTimeString()}`);
})

//focus
let input=document.getElementById("inp");
input.addEventListener("focus", ()=>{
    input.style.cssText= "background-color: orange;"
})

//blur
// let d=document.getElementById("inp");
// b.addEventListener("blur", ()=>{
// b.style.cssText= "background-color: white;"
// })

//let input=document.getElementById("inp");


let confidential=document.getElementById("hide");

let inputEle=document.getElementById("inp");
inputEle.addEventListener("focus", ()=>{
    inputEle.style.cssText = "background-color: yellow; border: blue;"
    confidential.style.display = "inline"
})

//BLUR

inputEle.addEventListener("blur", ()=>{
    inputEle.style.cssText = "background-color: white; border: black: black 2px solid"
    confidential.style.display = "none"
})

//mouseover
let h1=document.getElementById("heading");
h1.addEventListener("mouseover", ()=>{
    h1.style.display = "none"
})

//mouseout
h1.addEventListener("mouseout", ()=>{
    h1.style.display = "block"
})


//keyup event writing text in box
let dat = document.getElementById("data");
let inpp = document.getElementById("something");
inpp.addEventListener("keyup", (e)=>{
    dat.innerHTML = `<b>${e.target.value}</b>`
    // c(e);
})


//on submit adding data in the console
let emmm = document.getElementById("input")
let formElement = document.querySelector("form");
formElement.addEventListener("submit", (e)=>{
    c(e.target.UserName.value);
    // c(e.target.EmailAddress.value);
    // emmm.innerHTML = `<br>${e.target.value}</b>`
    emmm.innerHTML = (e.target.UserName.value);
    formElement.reset();
    e.preventDefault()
  
})








































































































// ventListener("blur", ()=>{
//     input.style.cssText= "background-color: orange;"
// })
