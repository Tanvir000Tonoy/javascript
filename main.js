// source :https://youtu.be/chx9Rs41W6g?si=bT53eKfOz_NUGo60
// 1st january 2024 [Tanvir_Tonoy]

/*
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
*/

// Day 3
console.log("Day three");
