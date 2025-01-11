class Demo {
    userName = "Raju";
    city = "Haryana";
    id = 101;

    changeCity(){
         //Implement the functionality using properties
    }

    displayDetails(){
        console.log("Details will be printed");
        //Implement the functionality using properties
    }
}

var obj1 = new Demo();   // new = Special operator , Demo = Constructor name

console.log(obj1.userName);
obj1.userName = "Ravi";
console.log(obj1.userName);
obj1.displayDetails();

var obj2 = new Demo();       // new = Special operator , Demo = Constructor name
obj2.userName = "Ramu";
obj2.id= 102;
obj2.city = "Bopal";
obj2.gender = "Male";

console.log(obj2.userName);
console.log(obj1);
console.log(obj2);