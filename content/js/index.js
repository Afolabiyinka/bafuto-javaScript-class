// function greetUser() {
//   alert("hello you are welcome user");
// }
// function tellUserGoodBye() {
//   alert("Goodbye we would love to see you again");
// }
// 123456789
// obi
// OBI
// oBI
// OBi
// obI

// alert("hello world");

// console.log()

// console.log(" just testing the console");

// varible declarations
// es5
// es6

// console.log(fi
// let firstName = "james";
const middleName = "stacy";
// let firstName = 'obi'

// es5

// let user = "emma";

// var is a global scope variable declarator

// var isGlobalScope = "gl"
let name = "obi";
name = "mary";

let person = {
  firstName: "jerry",
  lastName: "tom",
  married: true,
  siblings: {
    sister: "stacy",
    brother: "john doe ",
    newphew: {
      firstnephew: "something",
    },
  },
};

// console.log(person.firstName);
//
// let { color, lastName } = person;

// car.color = "yellow";
// car.name = "toyota";
// car.price = 5000;
// car.owner = "mr ade";
// console.log(car);

// spread operator

// let newCar = { ...car, name: "audi", price: 1000 };

// arrays
// functions
// conditionals
// dat and time objet

// array
let lexus = "lexuscar";
const car = {
  name: lexus,
  color: "green",
  price: 2000,
};

car.owner = "new owner";
// console.log(car);

let objectResult = car.name;
// console.log(objectResult);

let Name = "james";
let item1 = "shoe";
let item2 = "bags";
let item3 = "clothes";

let shopingItems = [
  "shoe",
  "bags",
  "clothes",
  1,
  true,
  { name: "boy" },
  null,
  objectResult,
];
// let result = shopingItems[5].name;
// console.log(result);

let newArray = "banana";
shopingItems[8] = newArray;

shopingItems[3] = false;
shopingItems[3] = false;
// let shopingItems[3] = false;
// shopingitem.1[3]=false;

shopingItems[5].name = "girl";
// console.log(shopingItems);

let userItem = {
  items: ["boy", "girl", "king", "queen"],
  name: "jeffery",
};
userItem.items[3] = "king";

// console.log(userItem);

let useItems = ["man", "woman"];
//  new useItems[1] ="me"
// let [iteM, secondItem] = useItems;
// let userItems=[0,1];

let [female, ,] = useItems;
// let firstName =userItem[0];

let newItems = ["caps", "cash", "trash", "dash", { user: "john doe" }];

// let [tourch, skate, train] = newItems;nnew

// let
// console.log(tourch);
newItems[4].user = "james";

// functions a block alghorithm
// properties
// funcion delaration
// function name
// parameter
// function block(algorithm)
// return value
// invoke, call back statement

function greetUser(val1, val2) {
  let greeeting = "you are welcome to" + " " + val2 + " " + val1;
  // console.log(greeeting);
}
greetUser("ade", "bafuto");
greetUser("yemi", "prtechfhjfj");

function addFuction(value1, value2) {
  let result = value1 + value2;
  // console.log(result);
}

addFuction(10, 20);
addFuction(100, 20);

// const promise = new Promise((resolve, reject) => {
//   let ready = false;

//   setTimeout(() => {
//     if (ready) {
//       resolve("you are ready");
//     } else {
//       resolve("you are ready");
//     }
//   }, 2000);
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const secondPromise = new Promise((resolve, reject) => {
//   let ready = false;

//   setTimeout(() => {
//     if (ready) {
//       resolve("resolve ready");
//     } else {
//       reject("resolve not  ready");
//     }
//   }, 1000);
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// bake a cake
const stepONE = "add flour";

function task(callback) {
  setTimeout(() => {
    // console.log("");
  }, [1000]);
}

// number and string method

// decleration
// function name
// parameters
// function (alghorithm)
// return value
// invocation

function random(value, value2) {
  let firstResult = value - value2;
  let secondResult = value2 + value;
  let thirdResult = value2 / value;
  return thirdResult;
}
// console.log(random(30, 10));
// subtract();

function greetUser(user) {
  // console.log(user);
}

greetUser("mr obi");

let stepOne = "1. boil water";
let stepTwo = "2. add noodles";
let stepThree = "3. add seasoning";
let stopFour = "4.wait for 3min.....";
let endProduct = "Hurray! your noodles is ready ";

// function TaskOne(callback) {
//   console.log(stepOne);
//   callback();
// }

// function TaskTwo() {
//   console.log(stepTwo);
// }
// function TaskThree(callback) {
//   console.log(stepThree);
//   callback();
// }

// function lastTask() {
//   console.log(stopFour);
// }

// function makeNoodles() {
//   TaskOne(TaskTwo);
//   TaskThree(lastTask);
//   console.log(endProduct);
// }
// makeNoodles();

let stepOnee = "boil water";
let steptwoo = "add noodles water";
let stepthrees = "add seasoning water";

function TaskOnee(callback) {
  // console.log(stepOnee);
  callback;
}
// number methods
// strings

// numbers
// Maths object

// let result = 1 - 3 + 4 / 17;
// console.log(result);

let value;

value = Math.PI;
value = Math.abs(-1.0);
value = Math.sin(30);
value = Math.cos(50);
value = Math.pow(10, 2);
value = Math.sqrt(25);
value = Math.round(10.4);
value = Math.ceil(10.2);
value = Math.floor(12.9);
value = Math.floor(Math.random() * 10);

function quadraticEquation(a, b, c) {
  let denominator = 2 * a;
  let initials = Math.pow(b, 2) - 4 * a * c;

  let positive = -b + Math.sqrt(initials) / denominator;
  let nagative = -b - Math.sqrt(initials) / denominator;

  return { positive, nagative };
}
let Result = quadraticEquation(1, 11, 24);
// console.log(Result);

// template strings / literals

// conditionals

// loops

let user = "jeffery";
let naMe = "samson";
let fullname = user + "" + naMe;
let intro =
  "hello name is " + "1 + 1" + user + " " + naMe + " " + "i am a developer";
// console.log(intro);
let firstName = "john";
let lastnAME = "doe";
let fullName = ` hello my name is ${firstName} ${lastnAME} i am a developer ${
  1 + 2 - 3
}`;
// console.log(fullName);

// console.log("hello world");

let log = {
  intoConsole: (value) => {
    // console.log(value);
  },
  sqrt: function (user) {
    let result = Math.sqrt(user);
    return result;
  },
  list: ["cars", "bags", "shoes"],
};

let result = log.sqrt(25);
let result2 = log.list[2];

// console.log(result2);

// log.intoConsole("hello world");
// arrow functions

function addNumber(value1, value2) {
  let result = (value1 += value2);
  return result;
}

// console.log(addNumber(2, 5));

let number = 10;
number += 3;
number++;
number--;
// console.log(number);
let boy = "boy";
boy += "boy boy";

// console.log(boy);

let raisevalue = (value) => {
  return `hello what ever value you add here will increase by one ,this is your value :${
    value + 1
  } `;
};

// conditionals
// if and  else
// switch case

let object = "banana";
// console.log(raisevalue(20));

if (10 < 5) {
  // console.log("correct");
} else {
  // console.log("incorrect");
}
// number method
// conditionals if and the else

// sting method / conditionals & switch cases

function sackUser(user) {
  return `sorry ${user} we no longer need your services `;
}
// console.log(sackUser("jerry"));

const hireUser = (user) => {
  return `hello ${user} you are hired!`;
};

// console.log(hireUser("jerry"));

function initialsProcess(callback) {
  // console.log("booting...");
  callback();
}
function runProcess() {
  // console.log("running...");
}
initialsProcess(() => {
  runProcess();
});
// string method

let val = "hello-my-name-is-james";
// console.log(typeof val.toString());
// console.log(isNaN(val)); checks if the argument is a number or not and returns a boolean based on the result

// if (isNaN(20)) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// console.log(typeof String(val));
// console.log(typeof Number(val));

// console.log(val.includes("jerry"));

// console.log(val.lastIndexOf("m")); gives the index number of the character passed as an argument or parameter
// console.log(val.indexOf("z"));

// concat method adds to a string
// val += " jerry";
// console.log(val);

// startsWith method

// console.log(val.startsWith("J"));
// console.log(val.endsWith("J"));
// console.log(val.toLocaleLowerCase());
// console.log(val.toLocaleUpperCase());

// console.log(val.substring(0, 4)); plcks out characters based on the index being passed as argument

// console.log(val.charAt(0)); gives the character based on the index in the prameter
// console.log(val.trim()); removes whitespace form either the end or the beginnig of a string

// console.log(val.concat(" doe")); joins strings together

// val = [1, 2, 3, 4];
// console.log(val.reverse());

// console.log(val.replaceAll("-", " "));
// conditionals

//  
// if (namE === "isreal") {
//   console.log("correct");
// } else if (namE === "obi") {
//   console.log("the name is now obi");
// } else if (namE === "jerimaiah") {
//   console.log("the name is now jerimaiah");
// } else {
//   console.log("incorrect");
// }

// let ranDom = Math.floor(Math.random() * 25);
// console.log(ranDom);
// if (ranDom > 18 && ranDom < 20) {
//   console.log("you can apply for the programme");
// console.log("good")
// } else {
//   console.log("sorry you can't be accepted to participate in this programme");
// }
// if (ranDom > 18 || ranDom < 20) {
//   console.log("you can apply for the programme");
// } else {
//   console.log("sorry you can't be accepted to participate in this programme");
// }

// let test = "banana";

// tenary;
// test !== "orange" ? console.log("correct") : console.log("incorrect");

// git pull origin main
