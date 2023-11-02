// Creating a date objects
// There are 4 ways to create  a new date Object:

// new Date()
// // it takes 7 arguments
// new Date(year,month,day,hours,min,sec,milisec);
// new Date(milliseconds);
// new Date(data string);


// new Date

// let currentDate=new Date();
// // it return date time and Indian standerd time
// console.log(currentDate);

// Date as well as Time in INdian
// Acoording to area
// let currDate=new Date().toLocaleString();
// console.log(currDate)



// let currDate=new Date().toString();
// console.log(currDate)


// Returns the numeri c value corresponding to the current time =the
// number of miliseconds elapsed since janaary 1,1970 00:00:00UTC

// let currDate=Date.now();
// console.log(currDate);



// new Date()

// it takes 7 arguments
// new Date(year,month,day,hours,min,sec,milisec);
// Minimum there should be twon arguments;

// var d=new Date(2023,0,5,10,33,30,0);
// console.log(d.toLocaleString());

var d=new Date(2023,6);
console.log(d.toLocaleString());




