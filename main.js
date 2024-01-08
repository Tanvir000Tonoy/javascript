// source :https://youtu.be/chx9Rs41W6g?si=bT53eKfOz_NUGo60
// 1st january 2024 [Tanvir_Tonoy]
/*
|
|
| OLD ITEMS WILL BE SHOWN HERE 
|____________________________


// variable --Done
// if else , loop , --Done
// Methods (string, array, more) --in Progress

let fruits = ["apple", "Banana", "Orange"];
console.log(fruits);
let myDevices = [
  "Nokia lumia 311",
  "Lenovo tab 3",
  "Nokia lumia 730",
  "symphony i10",
  "walton primo",
  "Lenovo thinkpad t420s",
  "oppoa92020",
  {
    name: "custom PC",
    cost: 99000,
    cpu: "AMD Ryzed 3700x",
    ram: "16gb",
    ssd: 500, // in GB
    "mother-board": "Rog strix b550-f gaming wifi addition",
    gpu: "gt 1030oc", // later upgradded to 3060s
    monitor: "hp 22fw",
  },
  "macbook air m1 2020",
  "iphone 14 pro max",
];
console.log(myDevices);
// concatinate two different array into one array
let newArray = [...fruits, ...myDevices];
console.log(newArray);
//  array destructuring
for (i = 0; i <= newArray.length - 1; i++) {
  //   console.log(typeof newArray[10]);
  if (typeof newArray[i] == "object") {
    console.log(newArray[i].name);
  } else if (typeof newArray[i] == "string") {
    console.log(newArray[i]);
  }
}
// day two

//  i also know the push and pop methods , also shif , unshift methods lets try those things also

let array = ["item1", "item2", "item3"];
console.log(array);
array.push("Tania"); // adds one element at the last
console.log(array);
array.pop(""); // removes one element from the end
console.log(array);

// now lets learn the shif and unshift methods
array.shift(); // it shifts/removes the first element
console.log(array);
array.unshift("something"); // it adds elements at the begging or in 0 index by removeing the first item
console.log(array);

// now the question is how can i rever the array ?
// learning for in and for of loop for the array

let newarray = ["item1", "item2"];
for (item of newarray) {
  console.log(item);
}

for (index in newArray) {
  console.log(index);
}
// now lets talk about objects
let tonoy = {
  name: "Tanvir",
  age: 20,
  "higherst educational qualification": "hsc gpa 5",
  year: "2024",
};
for (key in tonoy) {
  console.log(`${key} : ${tonoy[key]}`);
}

// now lets take a challange
let key1 = "objkey1";
let key2 = "objkey2";

let val1 = "value1";
let val2 = "value2";
let myObject = {};
myObject[key1] = val1;
myObject[key2] = val2;
console.log(myObject);

// or we can use computed properties
let obj = {
  [key1]: val1,
  [key2]: val2,
};
console.log(obj);
//  spread operation in object
const Object = {
  name: "tonoy",
  girlFriend: "none",
  age: 20,
};

// Day 3
// console.log("Day three");
// object destructuring
let band = {
  bandName: "onumate",
  famousSong: "Tomar jonno sob",
};

const { bandName, famousSong } = band;

console.log(bandName, famousSong);


// DAY 4
// basics of function
// function addTwoNumber(x, y) {
  //   return x + y;
  // }
  // console.log(addTwoNumber(5, 20));
  
  // now function expression
  // let addTwoNumber = function (x, y) {
    // return x + y;
    // };
    
    // console.log(addTwoNumber(5, 20));
    
    // arrow function
    let addTwoNumber = (number1, number2) => {
      return number1 + number2;
    };
    console.log(addTwoNumber(10, 110));
    // new shortcut from
    let addThreeNumbers = (number1, number2, number3) =>
    number1 + number2 + number3;
    console.log(addThreeNumbers(10, 20, 200));
    
    // hoisting = উত্তোলন
    // lets say we have a function but some where we called the function before the diclaratioin
    fuck();
    
    function fuck() {
      console.log("sorry sorry sorry !");
    }
    
    // you see its working (only works when its a function diclaration)
    
    fuck2(); //but this is not working we have to put the the call after the expression ;)
    
    let fuck2 = function () {
      console.log("sorry sorry sorry !");
    };
    // day 5
    // rest paramiter and addtion of any number
    function addmany(...x) {
      let array = x;
      let total = 0;
      for (i = 0; i < array.length; i++) {
        total = array[i] + total;
      }
      console.log(total);
    }
    
    addmany(1, 2, 4, 5, 6, 7, 10, 112, 88);
    
    
    // day 6
    // important array methods
    // forEach;
    let notunArray = [10, 10, 100, 40, 124];
    notunArray.forEach(fuckThemAll);
    
    function fuckThemAll(number, index) {
      // multiply by 2
      console.log(number * 2);
    }
    
    // day 7
    // continue with map method next time ;0
    // map method is such a methods that takes every array elements and provieds or returns a new array
    let ourFunc = function (number) {
      return number * number;
    };
    
    let result = notunArray.map(ourFunc);
    console.log(result);
    
    // day 8
    // reduce method and filter method;
    
    let products = [
      { name: "laptop", price: 120000 },
      { name: "phone", price: 152000 },
      { name: "computer", price: 99500 },
    ];
    let arrowfunc = (accum, products) => {
      return accum + products.price;
    };
    
    let total = products.reduce(arrowfunc, 0);
    console.log(total);
    
    let items = ["fucker", "?", "fuck"];
    for (item of items) {
      console.log(item);
    }
    
    // sort array method () /
    let users = ["tanvir", "Tanvir", "tania", "ador", "aklima"];
    
    users.sort();
    console.log(users);
    
    
    // Day 9
    today i will try to learn all the array methods at once and no mather what happends i will finish watching the js mastary full video
    and its and order be serious tonoy :0 ...
    
   const numbers = [1, 2, 3, 4, 5];
   // we have to find the some of all the number
   // paramiters -> accumulator  , next value
   let x = numbers.reduce((total, next) => {
     return total + next;
    });
    
    console.log(x);
    
    const products = [
      { id: 1, name: "laptop", price: 140000 },
      { id: 2, name: "computer", price: 99500 },
      { id: 3, name: "phone", price: 160000 },
    ];
    
    let y = products.reduce((totalPrice, currentValue) => {
      return totalPrice + currentValue.price;
    }, 0);
    console.log(y);
    
    let sortArray1 = [10, 20, 30, 40, 100];
    
    let func = function (x, y) {
      return x - y;
    };
    sortArray1.sort(func);
    console.log(sortArray1);
    
    let sortArray2 = ["tanvir", "tonoy", "adiba", "ador", "afifa", "Fahima"];
    
    sortArray2.sort();
    console.log(sortArray2);
    
    const lowToHigh = products.slice(0).sort((a, b) => {
      return a.price - b.price;
    });
    console.log(products);
    console.log(lowToHigh);
    
    
    ####find() method and all its actions . 
    -> array method that helps us to find a particular item in array according to our callback function 
    
    const myArrayForFindMethod = ["one", "three", "four", "six", "lion"];
    // console.log(myArrayForFindMethod[0].length === 3);
    let x = function (a) {
      return a.length === 3;
    };
    let y = myArrayForFindMethod.find(x);
    
    console.log(y);
    
    
    const products = [
      { id: 1, name: "laptop", price: 120000 },
      { id: 2, name: "computer", price: 9500 },
      { id: 3, name: "phone", price: 120000 },
    ];
    
    let x = products.find((y) => {
      return y.id == 3;
    });
    console.log(x);
    
    function moreThan30000(item) {
      return item.price < 150000;
    }
    
    let result = products.every(moreThan30000); // input a boolean
    console.log(result);
    
    function atleastOne(item) {
      return item.price > 100000;
    }
    
    let resultOFSome = products.some(atleastOne);
    console.log(resultOFSome);
    
    
    now we will learn the fill method of array  
    
    
    ## new constructor 
   //  let ourArray = new Array(length).fill(fillWithWhat? , start_index , end_index);
// let ourArray = new Array(10).fill("name", 0, 5);
// console.log(ourArray);

// result :

0: "name"
​
1: "name"
​
2: "name"
​
3: "name"
​
4: "name"
​
length: 10


// splice method
// start ,delete, insert

let ourArray = ["item1", "item2", "itme3"];
console.log(ourArray);

// let custom = ourArray.splice(start, delete, );
// ourArray.splice(0, 2, "tanvir");

// insert and delete together;
ourArray.splice(1, 2, "insert1", "insert2", "insert3");
console.log(ourArray);


// now we will learn what is iterables
// # strings
// # array
// # Sets
// #Maps

// string is array like object
// sets ###### we will learn sets now )

const numbers = new Set(); // sets doesnot have any index or order :)
numbers.add("Tanvir");
numbers.add("items");
let present = numbers.has("");
console.log(numbers);
console.log(present);
for (number of numbers) {
  console.log(number);
}

// now we will learn what is maps okey ?
const person = new Map();
person.set("firstName", "tanvir");
person.set([1, 3, 4], "amar roll");
console.log(person);
*/

// Now learn the Maps Object (referance data type )//iterables
// Day 10 => Learn Maps
