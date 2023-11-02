// Interview Qurstions

// Question 1

// Difference between null vs undefined


// var you=null;
// console.log("ye");
// console.log(typeof(you));   //Bug output=Object


// var ye;
// console.log(ye);
// console.log(typeof(ye));


// what is NaN  
// In other words ,it is a variable in global scope.
//The initial value of NaN is Not-A-Number.
// if Two strings ko - karai tho bhi NaN aata hai;

// var phone=8998998;
// var myName="eram";
// console.log(isNaN(phone));
// console.log(isNaN(myName));

// if(isNaN(phone)){
//     console.log("please enter valid phone number");
// }

// NaN===NaN;   //false
// Number.NaN===NaN;  //false
// isNaN(NaN);     //true
// isNaN(Number.NaN); //true
// Number.isNaN(NaN);  //true


//   Expression =operand+operator
//                5+20


// What will be the output of 3**3;

//output= 27


// What will be the ouput ,when we add a number and a string

// let a=78+"ye";
// console.log(a);

// Write a program to swap two numbers?


// let a=5,b=7;
// let c=a;
// a=b;
// b=c;
// console.log(a,b);


// let a=5,b=7;
// let c=a+b;
// a=c-a;
// b=c-b;
// console.log(a,b);

// Without usinh Thired variavble

// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);



// == and ===

// ALso check the data type===;




// Leap-Year

// Divisible by 4 and not by 100
// var year=2020;
// if(year%4===0){
//     if(year%100===0){
//        if(year%400){
//         console.log("leap year");}
//        } else{
//         console.log("not a leap year");}
// }
// else{
//     console.log("not  a leapyear");
// }


// Printing the table of 8;


// for(var num=1;num<=10;num++){
//     var tableof=8;
//     console.log(tableof + " * " + num +" = "+ tableof *num);
// }


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


