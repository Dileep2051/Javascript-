// Array ia an "Data structure" & it is used to store the multiple data
// we can store any type of data in array & the combination of any type of data we can store.
// i.e., string, boolean, null, number etc.,

// In java we can store only type of data.
// i.e., if we store the integer data. The data should be related to integer only.

var products = [10,20,30,"Dile",100 , "Monday","Tuesday"];
console.log(products.length);

// ** Imp Interview Ques:- Difference between Push & Unshift , Pop & Shift

products.push("Delhi"); //adding the elements at last position
products.push("HP");
console.log(products);

products.unshift("Bangaloe"); //adding the elements at First position
products.unshift("05");
console.log(products);

//Removes one element from last position
products.pop(); // Remove the elements in last postion
products.pop();
console.log(products);

//Removes one element from first position
products.shift(); // Remove the elements in First postion
console.log(products);

//=============================================================================

//Removes the more element from last position

var removedElement = products.pop();
var removedElement1 = products.pop();
console.log(products);
console.log(removedElement,removedElement1);

//Removes the more element from First position

var unwantedElement = products.shift();
var unwantedElement1 = products.shift();
console.log(products);
console.log(unwantedElement,unwantedElement1);

