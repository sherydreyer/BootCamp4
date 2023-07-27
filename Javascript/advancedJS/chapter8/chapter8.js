// 



// let x = "7";
// console.log(isNaN(x));

// let uri = "https://www.example.com/submit?name=maaike van putten";

// let encodedUri = encodeURI(uri);
// console.log(encodedUri);
// let decodedUri = decodeURI(encodedUri);
// console.log(decodedUri);
// let encodedString = "How's%20it%20going%3F";
// let decodedString = decodeURIComponent(encodedString);
// console.log(decodedString);
// encodedString = encodeURIComponent(decodedString);
// console.log(encodedString);
// let webUri = "http://www.basescripts.com?=Hello World";
// let encodedWebUri = encodeURI(webUri);
// console.log(encodedWebUri);
// let str_float = "hhh";
// let int_float = Number(str_float);
// console.log("Type of", int_float, "is", typeof int_float);

// let str_float = "7.99";
// let float_float = Number(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.forEach(printStuff);



// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// arr.filter(checkString).forEach(printStuff);


// function checkString(element,index) {
//     return typeof element === "string";
// }

// function checkNum(element) {
//     return element > 100;
// }
// function startsWithS(element) {
//     return element.startsWith("S");
// }

// function printStuff(element,index) {
//     console.log("Printing stuff: ",element," on array position",index);
// }

// let arr = ["Sheryl","Sean","Iizwe"];

// console.log(arr.every(startsWithS));

// arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(arr);
// arr.copyWithin(0, 3)
// console.log(arr);

// let arr = [1,2,3,4];

// arr.map(x=> x+1)
// .forEach(printStuff);

//  let arr=["Sheryl","Angela","Sheryl","Angela","Jane"];
//  let arr2 = arr.filter((e,i,a)=> {
//     console.log(e," in index ",i);
//     return a.indexOf(e) === i;
//  })

//  console.log(arr2);

// let arr = [1,2,3,4,5,6];

// let arr2 = arr.map(e=> e *2);

// console.log(arr2);

// let result= "Hello Javascript Java";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let pos1 = poem.charAt(10);
// console.log(pos1);

// let s3 = "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);

// let caps = "HI HOW ARE YOU?";
// console.log(caps[0] +  caps.slice(1).toLowerCase());

// let encouragement = "You are doing great, keep up the good work?";
// let bool_start = encouragement.toLowerCase().endsWith("?");
// console.log(bool_start);

// let sentence = "thIs will be capiTalized for each word";
// console.log(capWords(sentence));

// function capWords(sentence) {
//     let newArr = sentence.toLowerCase().split(" ");
//     let tempArr = [];
//     newArr.forEach(element => {
//         let newE = element[0].toUpperCase() + element.slice(1).toLowerCase();
//         tempArr.push(newE);
//     });
//     return tempArr.join(" ");
// }

// let sentence = "I love JavaScript";
// sentence =  sentence.toLowerCase();
// let vowels = ["a","e", "i", "o", "u"];

// vowels.forEach((element,index) => {
//    sentence =  sentence.replaceAll(element,index);
// })

// console.log(sentence);
// let x = 1.23556;
// let newX = x.toPrecision(3);

// console.log(newX);

// let highest = Math.min(2, 56, "a", 1, 233, 4);
// console.log(highest);


// let result = Math.sqrt(64);
// console.log(result);
// let result2 = Math.pow(5, 3);
// console.log(5**3);

// let x = -6.78;
// let y = -5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));
// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// console.log(Math.PI);
// console.log(Math.ceil(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random()* (10-0)+0));
// console.log(Math.floor(Math.random()* (10-1)+1));
// console.log(Math.floor(Math.random()* (100-1)+1));
// let min = 1;
 
// let max = 100;
// for(let i = 0;i<100;i++) {
//     console.log(Math.floor(Math.random()* (max-min)+min));
// }

// let currentDateTime = new Date();
// console.log(currentDateTime);
// let now2 = Date.now();
// console.log(now2);

// let specificDate = new Date(2022, 0, 10, 12, 10, 15, 100);
// // console.log(specificDate);
// let d1 = Date.parse("June 5, 2021");
// console.log(d1);
// console.log(specificDate.toDateString());
 
let future = new Date(1970, 6, 21);
console.log(future);
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let day = future.getDate();
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${months[month-1]} ${day} ${year}`;
console.log(myDate);
 





