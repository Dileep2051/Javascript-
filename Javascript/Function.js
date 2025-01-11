//Functions are collection of set of code or instruction or statemnt to do specific reason.
//Function scope is a area between curley braces {}
//Function call can be used to invoke (call) a method with an owner object as an argument ( parameter)


function amount(){
    dileep = 5000;                              //--> Re-using
    dinesh = 2500;                              //-->
    raju = 3000;                                //-->
                                                
    var result=(dileep+dinesh+raju);
    console.log(result);
}
amount();    //----> Fucntion call
amount();    //----> Fucntion call
amount();    //----> Fucntion call

//---Received,Sent,Balance--------------------------------------

function balance(){
    //received;
    var a = 10000;
    var b = 20000;
    var c = 15000;

    //sent;
    var d = 20000;
    var e = 45000;

    var received = a+b+c;
    var sent = d+e;
    var balance = (received-sent);

    console.log(balance);
}
balance();

// calling 2 functions-----------------------

function manjuElectricalsWorkers(){
    //worker names
    var a = "Prabhu";
    var b = "Rupesh";
    var c = "Mevin";

    var worker1= a;
    var worker2= b;
    var worker3 = c;
    console.log(worker1,worker2,worker3);
}
function manjuElectricalsOwner(){
    var owner = "Arya";

    console.log(owner);
}
manjuElectricalsWorkers();
manjuElectricalsOwner();
