
// Functions in JavaScript

// Function Statement

// Function functionName(){
//     //Statement
// }

// eg addition

// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }
// sum();  //NaN
// sum(20,30);
// sum(50,50);


// Why Function?


// You can resue code:Define the code once ,and use it many times.
// You can use the Same code many times with diiferent arguments;
// to preduce different results.


// or

// Functio n Expression: 
// Comparing

// var funExp=function(a,b){
//     return total =a+b;
// }
// var sum=funExp(15,89);
// var sum1=funExp(20,899);
// console.log(sum>sum1);  //it will return true or false



// Default parameters:

// function mult(a,b=9){
//     return a*b;
// }
// console.log(mult(5));


// Arrow Function:

// const sum=()=>`sum of two numbers is ${(a=5)+(b=10)}`;
// console.log(sum());

// sum=(a,b)=>`sum of two numbers is ${(a)+(b)}`;
// console.log(sum(5,6));


// sum=(a,b)=>a+b;
// const a=sum(5,6);
// console.log(a);
  
























// ARRAY

// Single variable storing multiple array

// var myFriends=['ramesh',22,'arjun','vishal']


// First ellement of array is called Lower Index/lower Boundary.

// Last element of array is called Upper Index/Upper Boundary.


// Trversal


// Array.length

// For in loop

// it give the index number

// var myFriends=['eram','khan'];
// for (let i in myFriends){
//     console.log(myFriends[i]);
// }

// For of loop;
// var myFriends=['eram','khan'];
// for (let i of myFriends){ 
//     console.log(i);
// }

// Each loop
// we cannot use break
// var myFriends=['eram','khan'];
// myFriends.forEach(function(element,index,array){
//     console.log(`${element} index is ${index}`);
// })


// var myFriends=['eram','khan'];
// myFriends.forEach((element,index,array)=>{
//     console.log(`${element} index is ${index} from array ${array}`);
// })


// Searaching and filter  🎊

//🎊 indexOf() 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index);

// 🎊 Push method =At end
// const ages = [3, 10, 18, 20];
// ages.push(18);
// console.log(ages);


// 🎊 unshift method=At begining

// const ages = [3, 10, 18, 20];
// ages.unshift(18,9);
// console.log(ages);




//  🎊 Pop=removes the last element;

// const array=[1,2,3,4,5]; 
// array.pop();
// console.log(array)


// 🎊 shift method=at begining delete element


// const array=[1,2,3,4,5];
// array.shift();
// console.log(array)


// const month=['Jan','march','April','June','July'];
// // Using Splice Method //Adds or remove element from an array;
// // sol1:
// let b=month.length;
// const newMonth=month.splice(b,0,"December");
// // console.log(month);

// // Sol2;
// console.log(newMonth);  //Empty Array:=because it is used for deletion purpose


// sol 3:
// // updating march
// const month=['Jan','march','April','June','July'];
// const update=month.splice(1,1,'March');
// console.log(month);


// const month=['Jan','march','April','June','July'];
// const indexOfMonth=month.indexOf('march');
// if(indexOfMonth!==-1){
//     const update=month.splice(indexOfMonth,1,'March');
//     console.log(month);
// }else{
//     console.log('No such data found');
// }


// Deleting an element june

// const month=['Jan','march','April','June','July'];
// const indexOfMonth=month.indexOf('June');
// if(indexOfMonth!==-1){
//     const update=month.splice(indexOfMonth,1);
//     console.log(month);
// }else{
//     console.log('No such data found');
// }
// // 


// For deleting n numbers


// const month=['Jan','march','April','June','July'];
// const indexOfMonth=month.indexOf('march');
// if(indexOfMonth!==-1){
//     const update=month.splice(indexOfMonth,Infinity);
//     console.log(month);
// }else{
//     console.log('No such data found');
// }



// MAP,REDUCE,FILTER

// it returns in the form of true or false
// const array=[1,2,3,45,67,90];
// element=(x)=>{
//         return x>9;
// }
// let newArray=array.map(element,index,arr);
// console.log(newArray);


// let newArray=array.map((element)=> element>9);
// console.log(newArray);

// let newarray=array.map((element,index)=>{
//     return `element ${element}:index ${index}`;
// })
// console.log(newarray);


// array=[25,36,49,64,81];
// let newarray=array.map((element)=>Math.sqrt(element))
// console.log(newarray);


// array=[2,3,4,6,8];
// let newarray=array.map((element)=>{
//     return element*2;
// }).filter((element)=>{
//     return element>10;
// })
// console.log(newarray)



// array=[2,3,4,6,8];
// let newarray=array.map((element)=>element*2).filter((element)=>element>10).reduce((acc,element)=>
// { return acc+=element});
// console.log(newarray)


















// indexOf


// const myBio='I am the thapa Technical';
// console.log(myBio.indexOf("t",6))



// const myBio='I am the thapa Technical';
// console.log(myBio.lastIndexOf("t"))


// slice(start,end);
// substr(start,end);
// substr(start,length);

// actual length

// substring

// if we give the negative value then the charrector starts from 0th position

// var str="Apple,Banana,kiwi";
// let rest=str.substring(8,-2); //it now consederd from first possion
// console.log(rest);



// var str="Apple,Banana,kiwi";
// let rest=str.substring(0,6);
// console.log(rest);


// var str="Apple,Banana,kiwi";
// let str1=str.replace("Apple","banana");
// console.log(str1);

// let str="Hello World";
// console.log(str.charAt(9));


//The method returns a UFT -16 CODE
// (AN INTEGERS BETWEEN 0 AND 65535)

// let str="Hello World";
// console.log(str.charCodeAt(0));

