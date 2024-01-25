//singleton

// object.create
//objects literals

const myVym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Vishal Yadav",
  [myVym]: "mykey1" ,
  age: 54,
  location: "jaipur",
  email: "hitesh@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
 console.log( JsUser[myVym]);
// JsUser.email = "vishal@gmail.com";
// console.log(JsUser.email);
// Object.freeze(JsUser);
// JsUser.email = "vishal@avl.com";


// JsUser.greeting = function(){
//     console.log("hello js user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`hello js user, ${this.name}`);
// }

// console.log(JsUser.greetingTwo());
// console.log(JsUser.greeting());