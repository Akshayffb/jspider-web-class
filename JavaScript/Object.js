var name = prompt("Enter the name");

var age = prompt("Enter the age");

let Student = {
    name : name,
    age : age,
    myName : function(){
        return "my Name is "  + this.name + " and my age is " + this.age;
    }
}

document.write(Student.name);
document.write("</br>");
document.write(Student.age);
document.write("</br>");
document.write(Student.myName());

document.write("</br>");
document.write("</br>");




            class Person{
              constructor(firstName , lastName){
              this.firstName=firstName;
              this.lastName=lastName;
                                             }

               fullname(){
               return this.firstName + " " +this.lastName;
                  }
            }

    let Person1 = new Person(name, age);

    document.write(Person1);
    document.write("</br>");
    document.write(Person1.fullname());
    document.write("</br>");
    

    let Person2 = new Person("John", " Div");
    document.write("</br>");
    document.write(Person2 + " \n  Object 2");
    document.write("</br>");
    document.write(Person2.fullname());
    




    //day saturday 3/12/2022

    document.write("</br>");
    document.write("</br>");
    document.write("</br>");

    function chair(color, material){
        this.color=color;
        this.material=material;
        this.act= function(){
            return "Material is " + this.material;
        }
    }

    let x = new chair("blue", "Plastic")
    
    document.write(x);
    document.write("</br>");
    document.write("Color is "+x.color);
    document.write("</br>");
    document.write(x.act());
    





    document.write("</br>");

    var obj=new Object()
    // console.log(obj);
    obj.name="salman";
    obj.age=23;
    obj.myfunc=function(){
        return "HELLO WORLD"
    }

    document.write("</br>");
    document.write(obj);
    document.write("</br>");

    document.write(obj.myfunc());





    function fun(){

    console.log(document.head);
    let b = document.querySelector("body");
    
    
    let c= document.querySelector("head");

    c.setAttribute("title", "Changed");

    b.style.color = "#fff";
    b.style.backgroundColor = "Black";

    let h2 = document.querySelector("h2")
    h2.innerText = "Changed through js";

}


    let h2 = document.querySelector("h2")
    console.log(h2);
    console.log(typeof h2);
    




    let d =document.getElementById("sam");

    d.setAttribute("href", "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute");

    

