let arr = [10,2,5,9,"abc", true]

console.log(arr);

console.log(typeof arr);


let arr1 = new Array('apple', 'bannabna', 'orange')
console.log(arr1);
console.log(typeof arr1);

//length of array

console.log(arr.length);

//index of values

console.log(arr[0]);
console.log(arr1[0]);
console.log(arr1[arr1.length-1]);



//iteration of array using for loop

for(let i=0; i<arr1.length-1; i++)
{
    console.log(arr1[i]);
}

let oddArray = [1,3,5,7,9]
let evenArray = [2,4,6,8,10]

console.log(oddArray.concat(evenArray));

console.log(oddArray.concat(evenArray,["a","b"]));


//indexOf()
console.log(evenArray.indexOf(6));


//includes()

console.log(oddArray.includes(3, 2)); //flase
console.log(oddArray.includes(7, 2)); //true



//slice()

console.log(evenArray.slice(0,4)); //[2,4,6,8,10]
console.log(evenArray.slice(1,3));  //empty value


// push()
let tech=["jsva",'react',"node","express"]
console.log(tech);
tech.push("html","css")
console.log(tech); 


// pop()
tech.pop()
console.log(tech);

