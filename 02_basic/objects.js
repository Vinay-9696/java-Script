// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "vinay",
    "full name": "vinay gupta",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "vinay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vinay@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "vinay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const Arr1=[1,2,3,4,5,6]
const Arr2=[7,8,9,7,8,9]
console.log([...Arr1,...Arr2]);// THIS IS USED FOR ADDING TWO OR MORE THAN TWO ARRAY
// ... THIS IS THE SPREAD OPRATOR IT IS USED IN ARRAY AND OBJECTS.
