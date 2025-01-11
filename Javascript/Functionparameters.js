//Function parameters are simple variables which hols some information & function parameters are pass in () while defining the function.
//i.e., function fnAdd(name,city,pincode) --> name,city,pincode are the parameters
//Function arguments are the actual data , which we pass while calling the function.
// i.e., addParameter(100,200); ---> Function Arguments

function addParameter(x,y)   //x,y -->parameters
{
    var a;          //variables
    var b;       //variables

    a = x;
    b = y;
    var result = a+b;
    console.log(result);
}
addParameter(100,200);
addParameter(400,500);

//------------------------------------

function variable(x,y)   //x,y => Parameter
{
    var a;
    var b;

    a = x;
    b = y;
   
    var result = a+b;

    console.log(result);
}
variable(400,200);
variable(600,300);

