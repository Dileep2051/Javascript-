//Access or Read specific property value from object
// <objName>.<key>;

var products= {          //products => Object name
    pName: "Iphone",   //=====> Property [ pName=> Key , Iphone=> Value ]
    price: 25500,
    id: 101
};
    
console.log(products.price);

// we want to read or access id number
console.log(products.id);

//========================================================
//Access specific property value from object
// <objName>.<key>

var address= {
    dileepDR: "Koratagere",
    pincode1: 572115,
    dinesh: "Madhugiri",
    pincode2: 526481,
    Mahesh: "Delhi",
    pincode3: 587412
};
console.log(address.dinesh);   //-------> address=> Object name,  dinesh => Key name
console.log(address.pincode2);