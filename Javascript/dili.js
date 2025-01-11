var a = [10,25,30,45];

function evenOrOdd(){
  a.forEach(function(ele){
    if(ele % 2 === 0){
      console.log(ele, "is a even number")
    }else{
      console.log(ele,"is a odd number")
    }
  });
}

evenOrOdd();

function printEven(){
  a.forEach(function(ele){
    if(ele % 2 === 0){
      console.log(ele)
    }
  })
}
printEven();