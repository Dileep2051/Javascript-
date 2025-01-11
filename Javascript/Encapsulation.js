// Default constructor will created internally by Javascriptrr

class Products {
    pName = "LG TV";
    price = 20500;
    rating = 8;

    displayDetails(){
        console.log(this.pName, this.price, this.rating);
    }
}

var product1 = new Products();
product1.displayDetails();

// In this code constructor is not present, but executed properly. How?
// Ans:- we are not adding constructor by manually, Java script will define by default constructor.