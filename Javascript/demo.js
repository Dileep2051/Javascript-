var mobiles= {
    name: "Motorola",
    id: 102,
    manufacture: "Nov 2024",
    totalPrice: function(){
        console.log(20000*5);
    },
    Colour: "Black",

};
console.log(mobiles);

mobiles.totalPrice();
//=======================================================
var mobiles= {
    name: "Motorola",
    id: 102,
    manufacture: "Nov 2024",
    totalPrice: function(num){      //num==> Parameter
        console.log(20000*num);
    },
    Colour: "Black",

};

mobiles.totalPrice(6);



//=======================================

var userInfo = 
{
    name: "Raju",
    age: 26,
    height: "6ft",
    address: 
    {
    place: "Delhi",
    contact: 9124587455,
    pincode: 215482,
    },

};
// Read the property
console.log(userInfo.place);  // Result= Undefined, because this command doesn't give result, because the place property is stored under address.
console.log(userInfo.address.place); // This command will give the result, we can find in console.

//==============================================================================================
//UPDATE
userInfo.address.place = "Mumbai";
userInfo.height = "5.10ft";
//console.log(userInfo);

//=========================================================================

var users = [ 
{
    name: "Ramu",
    age: 26,
    height: "6.2ft",
    address: 
    {
    place: "Delhi",
    contact: 9124587455,
    pincode: 215482,
    },

},

{
    name: "Ravi",
    age: 24,
    height: "6.1ft",
    address: 
    {
    place: "Delhi",
    contact: 9124577455,
    pincode: 215483,
    },

},

{
    name: "Raju",
    age: 18,
    height: "6ft",
    address: 
    {
    place: "Pune",
    contact: 9124587455,
    pincode: 215482,
    },

},


];
console.log(users);

// Filter or choice the users profile by using return 
// Important:- give (==) double arrow mark to give filter result, if gives a single = ,it will update
var user= users.filter(function(e,i){
    return e.address.place == "Delhi";
    // return e.height >== "6ft";
});

console.log(user);
