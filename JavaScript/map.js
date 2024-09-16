// Map()

let num=[1,2,3,4];
let number = [2,8]

let sym = num.map( (temp)=>{
    // console.log(temp + );
    return temp + 10;
})

console.log(sym);
console.log(num);


num.forEach((temp) =>{
    console.log(temp + 1);
});


// filter
for(let i =0; i<num.length-1; i++)
{
    // if(num[i] %2 === 0)
    // {
    //     console.log('${num[i]} is even');
    // }

    // return temp = 
}

rem= num.filter((temp)=>{
    return temp%2 === 0
})


//reduce

number.reduce((currentvalue, nextvalue) => {
    console.log(currentvalue);
    console.log(nextvalue);
})


let nnnn= [1,2,4];

let res=nnnn.reduce((currentvalue, nextvalue) => {
  
    return currentvalue+nextvalue;
})

console.log(res);

// 1+2 =3
// 3+4=7
