var x = "Akshay";

document.write(x);
document.write("</br>")
document.write(typeof x)


x= 'mone'
document.write(x)

x =new String("Hello")
document.write(x) 


let lname = "Smithh"

document.write(lname.length)

//index  x value
document.write("</br>")

document.write("</br>")


document.write(lname[1])

document.write("</br>")

for (let i = 0; i <=lname.length-1; i++) {
    const element = lname[i];
    // document.write(i)
    document.write(element)
    
}

//methods of string
//concat()
//charAt()
//charCodeAt()
//slice()
//substring()
//indexOf()
//includes()
//split()
//replace()
//repeat()
//toUpperCase()
//toLowerCase()



// concat()

document.write("</br>")

document.write(lname.concat(x))
document.write("</br>")

document.write(lname.concat(" Its my name "," asdfgn"))

// alert("adsfgh".charCodeAt(1))