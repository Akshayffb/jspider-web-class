//doublequote string
    let x="abhishek"
    console.log(x);
    console.log(typeof x);

//singlequote string
x='apple'
console.log(x);
console.log(typeof x);

//backtick string
x=`hi`
console.log(x);
console.log(typeof x);

//using object
x=new String("hello world")
console.log(x);
console.log(typeof x) ;

//string interpolation in js
//interpolation operator ${ }

let fname=`abhishek`;
let lname=`neelakanta`;

console.log("my name is "+fname+" "+lname);//using concatenation

console.log(`my name is ${fname} ${fname}`);//using string interpolation

//length of a String:
console.log(fname.length);


//index value: using this index value we can identify individual chars
//index=length-1..
//starting index will be 0..
//End index will be length-1..
//negative index values starts from -1..

let fruit=`apple`
console.log(fruit[0]);
console.log(fruit[4]);
//alert(fruit[3])
for(let i=0;i<fruit.length;i++){
    //console.log(i);
    //console.log(fruit);
    //console.log(fruit[i]);
}

//methods of String
//1.concat():
    // it used to cancatination of two or more strings
    //it will accept n number of args
    //it returns concatinated string result
    let car="alto"
    console.log(car.concat(` benz `,`audi`));

//2.charAt():
    //it is used to find the character at specified index position.
    //it will accept 1 argunment.
    //it returns character of the specified index position.
    let flower="rose"
    console.log(flower.charAt(1));
    console.log(flower.charAt(3));

//3.charCodeAt()
    //it is used to find the ascii value of a character at aspecified index position.
    //it will accept 1/no argunment.
    //it returns Ascii value of the character specified by index position
 let vege="potato"
 console.log(vege.charCodeAt(1));

//4.slice():
//it extracts a part of a string.
//it accepts 2 arguments(start position and end position) 2nd position is optional.
//it returns the extracted part in new String.
let bike="pulsar"
console.log(bike.slice(1,5));
//alert(bike.slice(3,5))


//5.substring():
//it will select the characters from a string based on index positions and create a new string
//it will not affect original string
//it return a string
//if start index is greater then end index then it will swap the argunments and gives proper result.
//it will not work for neagtive indexes
//syntax: string.substring(start,end(optional))
//end index will be ommitted
let ins=`institute`
console.log(ins.substring(1,5))

//6.indexof()
    //it is used to find the index position of specified char in the string.
    //it will accept 2 argunment,but 2nd is optional(to start the search)
    //it returns index position of the character specified  char in the string.
    //if the specified char is not present then it returns -1. 

let cycle="hercusless"
console.log(cycle.indexOf(`s`,5));

//7.includes()
    //it is used to find weather the char is present in the String.
    //it accepts 2 arguments.the second one is optional.
    //it returns true/false.
let n="vinu"
console.log(n.includes(`v`));

//8.split():
//it is used to convert a string into a array.
//it accepts 2 parameters
let j=`javascript is loosely`
console.log(j.split());
console.log(j.split(` `).reverse());//reverse the string
console.log(j.split(``).reverse());//reverse the charatcers

//9.replace():
//it will replace a character or a word or a string
//it will acccept 2 arguments()

console.log("java and javaScript".replace("java","sql"));
console.log("iam a good boy".replace("i","a"));

//10.toUpperCase():
//it will convert lowercase to luppercase.
//it will accept 1 arg.
//it returns a string.

//11.toLowerCase()
//it will convert uppercase to lowercase.
//it will accept 1 arg.
//it returns a string.


//repeat():
//it is used to repeat a string based on arguments.
//it accepts 1 argument.
//it returns a repeated string.

console.log("good ".repeat(3));





