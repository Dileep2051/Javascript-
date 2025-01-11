//Insert or Add new property in existing Object
//<objName>.<keyname>= "<value>";

var products= {          //products => Object name
    pName: "Iphone",   //=====> Property [ pName=> Key , Iphone=> Value ]
    price: 25500,
    id: 101
};
    
console.log(products.price); //read the current key value

// we want to insert or add the key
// addding a new product name

products.pName1 = "Redmi";
console.log(products.pName1);

//Adding the price & read the property
products.price1 = 28000;
console.log(products.price1);