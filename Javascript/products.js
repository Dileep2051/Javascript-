class Products {                                    // ----------------------------------------
    pId= 101;
    pName = "Samsung";
    price = 25500;
    pStock= true ;

    changePrice(){                                      // This is a "CLASS"
        console.log("Price will be changed");

    }
    displayDetails(){
        console.log("Details will be displayed");
    }
}                                                   // ------------------------------------------
                                                  
var product1 = new Products();

var product2 = new Products();                        
product2.pId = 102;                                 // This is a "OBJECT"
product2.price = 260000;
product2.pName = "MI";
product2.price = false;

console.log(product1, product2);                    ///-----------------------------------------