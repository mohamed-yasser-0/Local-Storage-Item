
// // console.log(((new Date() - new Date("14 sep 2004")) / 1000 / 60 / 60 / 24 / 360).toFixed()); // الميلاد
// // console.log(`${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, "0")}
// // ${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`); //الساعه 

// // // one

// let fileName = "Elzero.mohamed.php";
// let f = fileName.split(".")
// console.log(f.slice(0,-1).join("."))
// console.log(f[f.length-1])
// // Elzero
// // php

// console.log("=".repeat(50))//==================================================================================================================================================================

// function addEl(str) {
//   // Your Code Here
//   if(str === ""){
//     return "";
//   } else if(str.slice(0,2).toLowerCase() === "el") {
//     return str;
//   } else {
//     return "El" + str;
//   }
// }

// console.log(addEl("")); // ""
// console.log(addEl("Elzero")); // Elzero
// console.log(addEl("zero")); // Elzero

// console.log("=".repeat(50))//==================================================================================================================================================================

// let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// console.log(myString.split("@").slice(0,2).join("@"))
// // Output Needed
// "Hello Elzero Web School @ We Love Programming"

// console.log("=".repeat(50))//==================================================================================================================================================================

// function checkRange(n1, n2, n3, n4, n5) {
//   // Your Code Here
//   if (n1>=n4&&n1<=n5&&
//       n2>=n4&&n2<=n5&&
//       n3>=n4&&n3<=n5){
//         return"Yes All Numbers In Range"
//       }else{
//         return"Not All Numbers Is In Range"
//       }
// }

// console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
// console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
// console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

// console.log("=".repeat(50))//==================================================================================================================================================================


// function replaceFirstWithLast(word) {
//   // Your Code Here
//   let w = word.split("")
//   return `${w[w.length-1]}${w.slice(1,-1).join("")}${w[0]}`
// }

// console.log(replaceFirstWithLast("olzerE")); // Elzero
// console.log(replaceFirstWithLast("Hello")); // oelloH

// console.log("=".repeat(50))//==================================================================================================================================================================

// function checkBiggestNum(word) {
//   // Your Line Of Code Here
//   return Math.max(...word.split(""))
// }

// console.log(checkBiggestNum("1500654")); // 6
// console.log(checkBiggestNum("8509507")); // 9

// console.log("=".repeat(50))//==================================================================================================================================================================

// let nums = [20, 100, 50, 10, 15, -20, 30];
// let filtered = nums.filter(num => num === 100 || num === 50);
// console.log(filtered)
// // Needed Output
// // [100, 50]

// console.log("=".repeat(50))//==================================================================================================================================================================

// let num = [10, 80, 85, 25, 30, 88, 15];
// let goal = 100;

// // Your Code Here
// let result = num.reduce(function(acc,crnt){
// if((Math.abs(crnt - goal)) < (Math.abs(acc - goal))){
//   return crnt
// }else{
//   return acc
// }
// })
// console.log(`Closest Number Is ${result}`)

// console.log("=".repeat(50))//==================================================================================================================================================================

// function swapEveryTwoChars(word) {
//   // Your Code Here
//   let w =word.split("")
//   for(let i=1; i<w.length; i++){

//     if(i%2 === 0){
//     w[i] = w[i].toLowerCase()
//     }

//   }
//   return `${w[0].toUpperCase()}${w.slice(1,).join("")}`
// }

// console.log(swapEveryTwoChars("elZeRo")); // Elzero 
// console.log(swapEveryTwoChars("heLlO")); // Hello

// console.log("=".repeat(50))//==================================================================================================================================================================

// String.prototype.elzeroRepeat = function (n) {
//   return this.repeat(n);
// };

// console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

// console.log("=".repeat(50))//==================================================================================================================================================================

// let myMoney = 5301503206;
// let str=myMoney.toString();
// console.log(str.replace(/(?=(\d{3})+(?!\d))/g, ","))
// // 5,301,503,206

// console.log("=".repeat(50))//==================================================================================================================================================================

// let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
// let results = [];

// // Your Code Here
// let fit = names.filter(function(e){
// let lower = e.toLowerCase()
// return lower[0] === lower[lower.length-1]
// })
// console.log(fit); // ['Osso', 'Aola', 'Daad', 'Roor']

// console.log("=".repeat(50))//==================================================================================================================================================================

// let theName = "Elzero";
// console.log(theName[0].toUpperCase()+theName[theName.length-1].toUpperCase())
// console.log(theName.slice(1,theName.length-1))
// let mind = Math.floor((theName.length -1) / 2)
// console.log(theName.slice(mind,mind+2))
// // Line 1 => Eo
// // Line 2 => lzer
// // Line 3 => ze

// console.log("=".repeat(50))//==================================================================================================================================================================

// function repeatWithRules(word) {
//   // Your Code Here
//   let w = word.split("")
//   let result = 0
//   let mas = w.map(function(e){
//     result ++
//     return e.repeat(result)
//   })
  
//   return mas.join("")
// }

// console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
// console.log(repeatWithRules("Hello")); // Heelllllllooooo

// console.log("=".repeat(50))//==================================================================================================================================================================

// function concatenateWithoutLast(words) {
//   // Your Code Here
//   let m = words.map(function(e){
//     return e.slice(0,e.length-1)
//   })
//   return m.join(" ")
// }

// console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

// console.log("=".repeat(50))//==================================================================================================================================================================

// function getCharacters(word, nums) {
//   // Your Code Here
//   return`${word.slice(0,nums)}${word.slice(-nums,)}`
// }

// console.log(getCharacters("Elzero School", 2)); // Elol
// console.log(getCharacters("Elzero School", 3)); // Elzool

// console.log("=".repeat(50))//==================================================================================================================================================================

// function formatName(theName) {
//   // Your Code Here
//   let m = theName.split(" ")
//   let letter = m.map(function mon(e){
//     return e[0].toLowerCase()
//   })
//   letter[0]=letter[0].toUpperCase()
//   return letter.join(".")
// }



// console.log(formatName("Osama Elzero")); // O.e
// console.log(formatName("Elzero Web School")); // E.w.s

// console.log("=".repeat(50))//==================================================================================================================================================================

// let st = "elzero";
// console.log(st[0].toUpperCase() + st.slice(1));                    // 1. باستخدام index و slice
// console.log(st.charAt(0).toUpperCase() + st.slice(1));             // 2. باستخدام charAt
// console.log(st.replace(st[0], st[0].toUpperCase()));               // 3. باستخدام replace
// console.log(st.replace(/^./, c => c.toUpperCase()));               // 4. باستخدام regex مع replace
// console.log([...st].map((c, i) => i === 0 ? c.toUpperCase() : c).join(""));  // 5. باستخدام spread و map
// console.log(st.split("").map((c, i) => i ? c : c.toUpperCase()).join(""));   // 6. باستخدام split و map
// console.log(st.slice(0,1).toUpperCase().concat(st.slice(1)));      // 7. باستخدام concat
// // Output Needed
// // "Elzero"
// // "Elzero"
// // "Elzero"
// // "Elzero"
// // "Elzero"
// // "Elzero"
// // "Elzero"

// console.log("=".repeat(50))//==================================================================================================================================================================

// let sts = "Web SchoolElzero ";
// let e = sts.slice(-7,-1)
// let w = sts.slice(0,3)
// let s = sts.slice(-13,-7)
// console.log(`${e} ${w} ${s}`)
// // Needed Output
// // "Elzero Web School"

// console.log("=".repeat(50))//==================================================================================================================================================================

// let stv = "Elzero";
// console.log(stv[stv.length-1])
// console.log(stv.charAt(stv.length-1))
// console.log(stv.slice(stv.length-1,))
// console.log(stv.substring(stv.length-1,))

// // Needed Output
// // "o"
// // "o"
// // "o"
// // "o"
// // "o"
// // "o"
// // "o"

// console.log("=".repeat(50))//==================================================================================================================================================================

// function getLastDigit(num) {
//   // Your Code Here
//   let s = num.toString()
//   return +s[s.length-1]
// }

// console.log(getLastDigit(1)); // 1
// console.log(getLastDigit(18)); // 8
// console.log(getLastDigit(305)); // 5
// console.log(getLastDigit(1569)); // 9
// console.log(typeof getLastDigit(1569)); // Number

// console.log("=".repeat(50))//==================================================================================================================================================================

// let str1 = "AElzero";
// let str2 = "ZAcademy";

// console.log(`${str1.slice(1)} ${str2.slice(1)}`); // Elzero Academy

// console.log("=".repeat(50))//==================================================================================================================================================================

// function reversing(str) {
//   // Write Your Code Here
//   let mosr = str.split(", ")
  
//   let s = mosr.map(function(e){
     
//     let es = e.slice(2).split("").reverse()
//     let t = e.slice(0,2)
//     return t+es.join("")
//   })
//   return s.join(" ")
// }

// console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl

// console.log("=".repeat(50))//==================================================================================================================================================================

// function dashBetweenOdd(num) {
//   // Write Your Code Here

// }

// console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
// console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922


// console.log("=".repeat(50))//=================================مراجعه علي الفانكشان===========================================================================================================

// function createSelectBox(startYear, endYear) {
//   // Your Code Here
//   for(let i=startYear; i<endYear; i++){

//     (`<select> <option value="${i}">${i}</option></select>`)
//   }
// }
// createSelectBox(2000, 2021);

// console.log("=".repeat(50))//=================================مراجعه علي الفانكشان===========================================================================================================


// let add = document.getElementsByClassName("classes-to-add");
// let remove = document.getElementsByClassName("classes-to-remove");
// let current = document.getElementsByClassName("element");
// let div = document.getElementsByClassName("classes-list");
// let dov = div[0].lastElementChild;

// let arry = [...current[0].classList]
// // console.log(arry.length)
// for(let i=0; i<arry.length; i++){
// let span = document.createElement("span")
// dov.appendChild(span)
//   span.textContent = arry[i]
// }


// add[0].addEventListener("blur",function(){
  
//   if(add[0].value === ""){
//     console.log("agin")
//   }else{
  
//   let classes =(add[0].value.split(/\s+/))

//   current[0].classList.add(...classes);
  

//   let arr = [...current[0].classList]
//   for(let i=0; i< arr.length; i++){
    
//   if(arry.includes(arr[i])){
//     console.log("none")
//   }else{
//   arry.push(arr[i])
//   let span = document.createElement("span")
//   dov.appendChild(span)
//   span.textContent = [...current[0].classList][i]
//   }
//   }
//   add[0].value = ""
// }})

// remove[0].addEventListener("blur",function(){
  
//   if(remove[0].value === ""){
//     console.log("agin")
//   }else{
  
//   let classes =(remove[0].value.split(/\s+/))

//   current[0].classList.remove(...classes);
  

//   let arr = [...current[0].classList]
//   for(let i=0; i< arr.length; i++){
    
//   if(arry.includes(arr[i])){
    
//     arry.pop(arr[i])
//   }else{
//     console.log("mos")
//   }
//   }
//   remove[0].value = ""
// }})

// remove[0].addEventListener("blur",function(){
//     if(remove[0].value === ""){
//       console.log("agin")
//     }else{
//   let classes =(remove[0].value.split(/\s+/))

//   current[0].classList.remove(...classes);

//   for(let i=0; i< classes.length; i++){
//   let span = document.createElement("span")
//   dov.appendChild(span)
//   span.textContent = current[0].classList
//   }
//   remove[0].value = ""
// }})


console.log("=".repeat(50))//=================================مراجعه علي الفانكشان===========================================================================================================

// // JSON مثال
// {
//   "name": "Ali",
//   "age": 25
// }

// // تحويل من كائن إلى JSON
// let obj = { name: "Ali" };
// let jsonStr = JSON.stringify(obj);

// // تحويل من JSON إلى كائن
// let json = '{"name":"Ali"}';
// let parsed = JSON.parse(json);
// //✅ AJAX و Fetch
// js
// Copy
// Edit
// fetch("https://api.com")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error("خطأ:", err));
// //✅ Asynchronous vs Synchronous
// js
// Copy
// Edit
// // Sync
// console.log("1");
// console.log("2");

// // Async
// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 1000);
// console.log("3"); // 1 → 3 → 2
// //✅ Promise Basic
// js
// Copy
// Edit
// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   success ? resolve("نجحت") : reject("فشلت");
// });

// promise
//   .then(result => console.log(result))
//   .catch(error => console.error(error))
//   .finally(() => console.log("تمت العملية"));
// //✅ Promise.all / race / allSettled
// js
// Copy
// Edit
// let p1 = Promise.resolve("واحد");
// let p2 = Promise.resolve("اثنين");

// Promise.all([p1, p2]).then(result => console.log(result));

// Promise.race([p1, p2]).then(result => console.log("الأول:", result));

// Promise.allSettled([p1, p2]).then(results => console.log(results));
// //✅ async / await
// js
// Copy
// Edit
// async function getData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error("حدث خطأ:", err);
//   } finally {
//     console.log("العملية انتهت");
//   }
// }
// getData();
// //✅ OOP Basics
// js
// Copy
// Edit
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// let u = new User("Ali");
// u.sayHello();
// //✅ Inheritance
// js
// Copy
// Edit
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} says Woof`);
//   }
// }

// let d = new Dog("Rex");
// d.speak();
// //✅ Encapsulation
// js
// Copy
// Edit
// class BankAccount {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// let acc = new BankAccount();
// acc.deposit(100);
// console.log(acc.getBalance()); // 100
// //✅ RegEx Example
// js
// Copy
// Edit
// let str = "Age: 20";
// let result = str.match(/\d+/g); // ["20"]
// console.log(result);
// //✅ Date and Time
// js
// Copy
// Edit
// let d = new Date();
// console.log(d.getFullYear());
// console.log(d.getMonth() + 1);
// console.log(d.getDate());

// d.setFullYear(2025);
// console.log(d.toDateString());
// //✅ Generator Function
// js
// Copy
// Edit
// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let g = generateNums();
// console.log(g.next().value); // 1
// console.log(g.next().value); // 2
// //✅ Modules (Export & Import)
// // 👉 في ملف math.js

// js
// Copy
// Edit
// export let sum = (a, b) => a + b;
// export default function () {
//   console.log("Function Default");
// }
// // 👉 في ملف main.js

// js
// Copy
// Edit
// import myFunc, { sum } from './math.js';

// myFunc(); // Function Default
// console.log(sum(2, 3)); // 5
// Edit The Class

// Write
/*
  Destructuring
  - Challenge
*/
// Select Elements

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span => {

  span.addEventListener("click", (e) => {

    if (e.target.classList.contains("check-item")) {

      checkItem();

    }

    if (e.target.classList.contains("add-item")) {

      addItem();

    }

    if (e.target.classList.contains("delete-item")) {

      deleteItem();

    }

    if (e.target.classList.contains("show-items")) {

      showItems();

    }

  })

});

function showMessage() {

  results.innerHTML = 'Input Cant Be Empty';

}

function checkItem() {

  if (theInput.value !== '') {

    if (localStorage.getItem(theInput.value)) {

      results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

    } else {

      results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

    }

  } else {

    showMessage();

  }

}

function addItem() {

  if (theInput.value !== '') {

    localStorage.setItem(theInput.value, "Test");

    results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;

    theInput.value = '';

  } else {

    showMessage();

  }

}

function deleteItem() {

  if (theInput.value !== '') {

    if (localStorage.getItem(theInput.value)) {

      localStorage.removeItem(theInput.value);

      results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Deleted`;

      theInput.value = '';

    } else {

      results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

    }

  } else {

    showMessage();

  }

}

function showItems() {

  if (localStorage.length) {

    console.log(`Found Elements ${localStorage.length}`);

    results.innerHTML = '';

    for (let [key, value] of Object.entries(localStorage)) {

      results.innerHTML += `<span class="keys">${key}</span>`;

    }

  } else {

    results.innerHTML = `Local Storage Is Empty`;

  }

}