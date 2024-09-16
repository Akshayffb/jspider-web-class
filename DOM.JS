// document.write("hello");

// // document.write(document.getElementById("sam"))


// var b =document.getElementById("an");
//     b.setAttribute("href", "https://www.spava.in")

    
//     function dark{
//         var c =document.querySelector("body")
//             c.classList.toggle("name");
//     }


document.getElementById("a").addEventListener("click", (event)=>{
    event.preventDefault()
})



    var d =document.getElementById("sam")
        // d.innerHTML = "Dom Working"
        // d.innerText = "Dom working with text"
        // d.textContent = "Working with content"

    function changeContent(){
        // d.innerHTML = "Dom Working"
        // d.innerText = "Dom working with text"
        // d.textContent = "Working with content"
        

        d.style.cssText = "color: blue;"
    }

    function changeStyle(){
        d.style.cssText = "font-style: italic;"
    }

    function darkMode(){
        let toggleBtn = document.getElementById("toggleBtn");
        let bodyElement = document.querySelector("body")
            bodyElement.classList.toggle("dark");

            if(bodyElement.classList.contains("dark")){
                toggleBtn.innerText = "❤️"
                bodyElement.style.backgroundColor = "#000"
                bodyElement.style.color = "#fff"

                
            }
            else {
                toggleBtn.innerText = "⚫"
                bodyElement.style.backgroundColor = "#fff"
                bodyElement.style.color = "#000"
            }
    }


    