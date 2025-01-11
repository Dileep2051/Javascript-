// Adding function in to property

var value= {
    pName: "Samsung",
    id: 201,
    price: 15000,
    totalPrice: 
        function()
        {
            console.log(15000*2);
        },
}
value.totalPrice();

//=======================================
// Another method

var value= {
    pName: "Samsung",
    id: 201,
    price: 15000,
    totalPrice: 
        function(num)
        {
            console.log(15000*num);
        },
}
value.totalPrice(3);
value.totalPrice(5);