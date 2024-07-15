//Program-1
for(let i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else
        console.log(i);
// }



//Program-2
let str=prompt();
let reverse="";
for(i=str.length-1;i>=0;i--)
{
    reverse+=str.charAt(i);
}
function check(str,reverse)
{
    if(str==reverse){
        return("Yes,It is a Pallindrome");
    }
    else
        return("no");
}
console.log(check(str,reverse));



//Program-3
let arr=[2,3,4,1,6,9];
let max=-100000;
function large(arr1,max)
{for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]>max)
        max=arr1[i];
    }
    return max;
}
console.log(large(arr,max));


//program-5
let sen="this is programming language";
function long(str) {
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > largest.length) {
            largest = str[i];
        }
    }
    return largest;
}
console.log("The longest word is "+long(sen));


//Program-6
let n=5;
let fact=1;
for(i=1;i<=n;i++){
    fact=fact*i;
}
console.log("The factorial is "+fact);



//Program-7
function converter(c)
{
    let fahr=(1.8*c)+32;
    return fahr;
}
console.log(converter(32)+" fahrenheit");



//Program-8
let arr=[0,1,2,3,4,6];

function missing(arr){
    let n;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i]!=j)
            {
              n=j;
            }
        }
    }
    return n;
}
console.log("The missing number is "+missing(arr));