var num = [10,20,22,25,30,40,45,50,60,78,80];

function evenOrOdd(){
    num.forEach(function(e,i){
        if (e % 2 === 0)
        {
            console.log(e, "is a even number");
        }else {
            console.log(e, "is a odd number");
        }
    });
};
evenOrOdd();

//=============

function evenOrOdd(){
    num.forEach(function(ele){
        if (ele % 2 === 0)
        {
            console.log(ele, "is a even number");
        }else {
            console.log(ele, "is a odd number");
        }
    });
};
evenOrOdd();


var digits = [20,20,3,4,94,50,60];

function calculate(){
    digits.forEach(function(ele){
        if (ele % 2 === 0)
        {
            console.log(ele, "is a even");
        }else
        {
            console.log(ele,"is a odd");

        }
    })
};
calculate();


var num = [10,202,30,50,65]

function dili(){
    num.forEach(
        function(ele){
            if (ele % 2 === 0){
                console.log(ele)
            }else
            {
                console.log(ele)
            }
        }
    )
}

dili();


const isPrimeNumber = (num)=> {
    // if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
        if (num % i === 0) return false;
    }
        return true;
}

console.log("result", isPrimeNumber(18))


