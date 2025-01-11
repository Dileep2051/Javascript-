// Any functn doesn't have any name that's called ananymous fnctn.
// i.e., 
// function f() {-------};

// var myfun = function f(){-----};
// myfun is a name for the function

// Ananymous fuctions can be passed as "Argument" to another function.
//i.e.,
// function fn1(fn){----}
// fn1(function(){-------});   ------> // callback function
//------------------------------------------------------------
  
var myfun = function z(){
    console.log("Bangalore-Electronic city");
};
myfun();

var dil = function f(){
   a = 2;
   b = 3;
   result = a + b;
   console.log(result);
};
dil();

var dil = function f(e){
    a = 2;
    b = 3;
    result = a*e + b-e;
    console.log(result);
 };
 dil(10);