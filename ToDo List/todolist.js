var c = console.log.bind(document);

var onename=document.getElementById("name");


//creating a div 
var div =document.createElement("div");




//taking input from user and assigning and printing on the web page
(function (){
    var name = String(prompt("Enter Your Name"));

    if(name!=null){
        document.getElementById("name").innerHTML =name;
    }else{
        document.getElementById("name").innerHTML = 'idiot';
    }
    onename.style.cssText = "color: blue;"
    

    //creating p tag 
    var pEle=document.createElement("h2");
    var head=document.createTextNode("TODO APP")


    var text = document.createTextNode("Write down your ToDo List");


    // pEle.style.cssText = "padding-top: 30px;"
    //end



    //creating form 
    const form =document.createElement("form");
    form.setAttribute("method", "post");



        //creating a input field to take note
        const textArea = document.createElement("textarea");
        textArea.style.cssText = "width: 430px; height: 130px; margin-top: 30px; resize: none; font-family:'Times New Roman', Times, serif; font-size: 1.6rem; outline: none; border-radius: 8px;"
        textArea.setAttribute("id", "fetchInput");
        textArea.setAttribute("name", "fetching");
        textArea.setAttribute("required", true);



    

    
    //creating submit button
    const btn = document.createElement("button");
        btn.innerHTML = 'Add';
        btn.style.cssText = "position: absolute; top: 45%; left: 47%; height: 45px; width: 90px; border-radius: 10px; border: none; cursor: pointer; color: #fff;  background-image: linear-gradient(to right, rgb(143 147 145 / 0%) 0%, #158de5 51%, #2669d0 100%)"
        

        div.appendChild(head)
    div.appendChild(pEle);

 
    div.appendChild(text);
    // document.body.appendChild(pEle);

    form.appendChild(textArea);
        // form.appendChild(textArea1);
        form.appendChild(btn); 
        div.appendChild(form);

        document.getElementsByTagName("body")[0].appendChild(div);
                 

    
}())
//end 





//styling background 
var back = document.querySelector("body");
    back.style.cssText = "background: linear-gradient(to top, #202022f4, #1e1d1ffc) no-repeat top center; height: 100vh; width: auto; color: #fff; text-align: center;"

    
//end  





//keyup show text while typing
// var show=document.getElementById("storeInput");
// var takeInput=document.getElementById("fetchInput");
//     takeInput.addEventListener("keyup", (e)=>{
//         show.innerHTML = (e.target.value)
//     })






//on submit
var formEle = document.querySelector("form");
        formEle.addEventListener("submit", (e)=>{
          

            
             //creating another input tag to store & display the data
            const textArea1 = document.createElement("textarea");
            textArea1.setAttribute("id", "storeInput");
            textArea1.setAttribute("disabled", true)
            textArea1.style.cssText = "width: 370px; height: 100px; font-family:'Times New Roman', Times, serif; font-size: 1.6rem; color: #fff; background-color: transparent; outline: none; left: 38%; top: 56%; position: absolute; border-radius: 15px;"
            

            //creating a delete button
            const deleteBtn=document.createElement("button");
            deleteBtn.style.cssText = "position: absolute; top: 60%; left: 64%; height: 45px; width: 90px; border-radius: 10px; border: none; cursor: pointer; color: #fff; background-color: #cf2525a6;"
            deleteBtn.setAttribute("id", "deleteBtnn")
            deleteBtn.setAttribute("onclick", "remove()")
            deleteBtn.innerHTML = 'Delete';
    
            document.body.appendChild(textArea1);
            document.body.appendChild(deleteBtn); //adding or appending both tag to html document
            


            var show=document.getElementById("storeInput");

            show.innerHTML = (e.target.fetching.value);

            formEle.reset(); //to reset the input box after submit
            e.preventDefault(); //to not reload the page on submit
        

        })



    function remove(){
        const removing =document.getElementById("storeInput");
        const removeBtn =document.getElementById("deleteBtnn");
        removing.remove();
        removeBtn.remove();
    }

    