//'UPDATE" the value of property in existing object
// Difference between Insert and update
// Basically depends upon the property keys.
// If already there is a property with same key & we using the same key thats called "UPDATE"
// If we use the different key name or using the new kay name in the property thats called "INSERT"
//----------------------------------------------------------------------------------------
// <objName>.<Existing keyName>="<updated value>";

var products= {          //products => Object name
    pName: "Iphone",   //=====> Property [ pName=> Key , Iphone=> Value ]
    price: 25500,
    id: 101
};

// updating a existing product name

products.pName = "Redmi";
console.log(products.pName);