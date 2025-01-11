function createUI(){
     //Create UI element
    var ul = document.getElementById("ul");

    //create li elemrnt

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");

    //Add the data or content inside li
    li1.innerText = "Iphone12";
    li2.innertext = "Iphone13";
    li3.innertext = "Iphone14";
    li4.innertext = "Iphone15";
    li5.innertext = "Iphone11";

    //Keep all li's inside ul

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);

    //Add ul inside body

    document.getElementById("root").appendChild(ul);

}