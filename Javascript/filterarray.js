// Filter() of array
// It is a predefined fnctn & it is used to filter our array based on condition
// products.filter(function(element,index) {});

// when we perform map & filter in array?
// map:- when only if perform the "same operation" on each & element of the array, then only we use the map()
// filter:- if we want to filter the array, that time we use filter()

var orderIds= [101,102,103,104,105,106,107,108];

var filterIds= orderIds.filter(function(e,i){
    return e < 107;
})
console.log(filterIds);

//=============================================================

var persons = [ 
    {
        name: "Ramu",
        age: 26,
        height: "6.2ft",
        address: 
        {
        place: "Delhi",
        contact: 9124587455,
        pincode: 215282,
        }
    
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
        }
    
    },
    
    {
        name: "Raju",
        age: 18,
        height: "6ft",
        address: 
        {
        place: "Pune",
        contact: 9124587455,
        pincode: 215882,
        }
    
    },
    
    
    ];
    // console.log(users);
    
    // Filter or choice the users profile by using return 
    // Important:- give (==) double arrow mark to give filter result, if gives a single = ,it will update
    var profile= persons.filter(function(e){
        return e.address.place == "Delhi";
        // return e.height >== "6ft";
        // return e.name == "Ravi";
    });
    
    console.log(profile);
    