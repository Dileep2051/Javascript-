var user1 ={
    id:101,
    name:"Ganesh",
    contact: 9108013254,
    email: "ganesh1958@gmail.com",
    city: "Tumkur",
    state: "karnataka",
    pincode: 562103
};

console.log(user1.city);
console.log(user1.state);

user1.contact= 9412587301;
console.log(user1.contact);
//===================================================================

// Above object is too lengthy hence,
// Now we have to write the code by using "NESTED OBJECT" 
// we can find the entire address at a time by using this method & we can modify the n number is users info easily.


var user2 ={
    id:101,
    name:"Ganesh",
    contact: 9108013254,
    address: { 
    email: "ganesh1958@gmail.com",
    city: "Tumkur",
    state: "karnataka",
    pincode: 562103
    },

};

//"Access" state
console.log(user2.name);

console.log(user2.address.email);

// "changing or Inserting" the user2 city value
// user2.city= "Bangalore"; ====> it not works, because the city property is under address property.

user2.address.city= "Madhugiri";
console.log(user2.address.city);

// "Updating" key in user2 profile

user2.address.district = "Tumkur";
console.log(user2.address);

// deleting the contact key 

delete user2.contact;
console.log(user2);
