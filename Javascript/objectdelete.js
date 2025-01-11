//"DELETE" the property from existing object

// delete <objName>.<KeyName>;

var products= {          //products => Object name
    pName: "Iphone",   //=====> Property [ pName=> Key , Iphone=> Value ]
    price: 25500,
    id: 101,
    manufacture: "Aug 2024"
};

// Here we deleting the price from the existing property
delete products.price;
console.log(products);