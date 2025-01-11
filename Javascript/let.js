function f1(){
    let city = "Delhi";
    var a = 4;

    if (a>2){
        console.log(city);
        var gender = "Male";
    }
    console.log(gender);

    if (true){
        console.log(gender);
        console.log(city);
    }
}

f1();   //=====> Delhi Male Male Delhi
 
//===================================================

function f2(){
    let city = "Delhi";
    var a = 4;

    if (a>2){
        console.log(city);
        var gender = "Male";
    }
    console.log(gender);

    if (false){
        console.log(gender);
        console.log(city);
    }
}

f2();   // Result---> Delhi Male