var a = [10,20,30,35,65];

function printEven(){
    a.forEach(function(ele){
        if(ele % 2 === 0){
            console.log(ele)
        }
    });
}
printEven();

function oddOrEven(){
    a.forEach(function(ele){
        if(ele % 2 === 0){
            console.log(ele, "is a even number")
        }else{
            console.log(ele,"is a odd number")
        }
    });
}
oddOrEven();