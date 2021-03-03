


// console.log(123);
// console.log('Hello World');
// console.log(true);

// var x;
// console.log(x);

// console.log(null);

// console.table([1,2,3]);
// console.table({a:1, b:2});





// // var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);

// greeting = 'Hello';
// console.log(greeting);

// Variables cannot start with a number
// var 1name = 'John';

// // Multi word variables
// var firstName = 'John'; //Camel Case
// var first_name = 'Sara'; //Underscore
// var FirstName = 'Tom'; // Pascal Case

// // Let
// // let name;
// // name = 'John Doe';
// // console.log(name);
// // name = 'Steve Smith';
// // console.log(name);

// // const
// const name = 'John';
// console.log(name);
// // Can't do reassign
// // name = 'Sara';
// // Have to assign a value
// // const greeting = 'Hello';
// // console.log(greeting);
// // const person = {
// //     name: 'John',
// //     age: 30
// // }

// console.log(person);
// console.log(x);
// var x=5;
// console.log(x);






// // Primitive Types
// const name = 'John Doe';
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null; // Will return object which it isn't, this is a known bug within JavaScript.
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();

// //Reference Types that will return objecs.
// //Array
// const hobbies = ['movies', 'music'];
// // Object literal
// const address = {
//     city: 'Pretoria',
//     state: 'Gauteng'
// }
// //Dates
// var today = new Date();
// console.log(today);

// console.log(typeof today);

// var today = 'today';
// console.log(typeof today);

// //--▼ Type Conversion ▼--//
// let val;


// val = String(5);// Number to string

// val = String(true);// Boolean to string

// val = String(new Date());// Date to string

// val = String([1,2,3,4]);// Array to string

// val = (5).toString();// Number toString()
// val = (true).toString();// Boolean toString()

// val = Number('5');// String to number
// val = Number(false);// Boolean to number
// val = Number('Hello');// Will Return NaN
// val = Number([1,2,3]);// Will Return NaN

// // val = parseInt('100.30');// Will Return 100.00
// // val = parseFloat('100.30');// Will Return 100.30
// //--▲ Type Conversion ▲--//

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// //--▼ Type Coercion ▼--//
// const valOne = String(5);
// const valTwo = 6;
// const sum = Number(valOne + valTwo);

// console.log(sum);
// console.log(typeof sum);
//--▲ Type Coercion ▲--//


// valString = String('5');
// console.log(valString);
// console.log(typeof valString);
// console.log(valString.length);

// valToString = (5).toString();
// console.log(valToString);
// console.log(typeof valToString);
// console.log(valToString.length);



// const numOne = 100;
// const numTwo = 50;
// let val;

// // Simple math with numbers
// val = numOne + numTwo;
// val = numOne * numTwo;
// val = numOne - numTwo;
// val = numOne / numTwo;
// val = numOne % numTwo;

// //Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,4,1,55,6,3,-2);
// val = Math.max(2,33,4,1,55,6,3,-2);

// val = Math.random();// Useful
// val = Math.floor(Math.random() * 1000);// Useful

// console.log(val);




//--▼ String Methods & Concatenation ▼--//
// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const string = 'Hello there, my name is Brad.';
// const tags = 'web design, web development, programming';

// let val;

// val = firstName + lastName;

// //--▼ Concatenation ▼--//
// val = firstName + ' ' + lastName;

// //--▼ Append ▼--//
// val = 'Brad';
// val += 'Traversy';
// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// //--▼ Escaping ▼--//
// val = 'That\'s awesome I can\'t wait.';

// //--▼ Length ▼--//
// val = firstName.length;

// //--▼ Concat ▼--//
// val = firstName.concat(' ', lastName);

// //--▼ Change Case ▼--//
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// //--▼ indexOf() ▼--//
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //--▼ charAt() ▼--//
// val = firstName.charAt('2');
// //--▼ Get last Character ▼--//
// val = firstName.charAt(firstName.length - 1);

// //--▼ substring() ▼--//
// val = firstName.substring(0, 4);

// //--▼ slice() ▼--//
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// //--▼ split() ▼--//
// val = string.split(' ');// Will return, Array(6) [ "Hello", "there,", "my", "name", "is", "Brad." ]
// val = tags.split(',');// Will return, Array(3) [ "web design", " web development", " programming" ]

// //--▼ replace() ▼--//
// val = string.replace('Brad', 'Jack');// Will return, Hello there, my name is Jack.

// //--▼ includes() ▼--//
// val = string.includes('Hello');// Will return, true

// console.log(val);
//--▲ String Methods & Concatenation ▲--//


// //--▼ Template Literals ▼--//
// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';

// let html;

// //--▼ Without Template Strings ▼--//
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>' + job + '</li><li>City: ' + city + '</li></ul>';

// html =  '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>'
//         '</ul>';

// function hello(){
//     return 'Hello';
// }

// //--▼ With Template Strings ▼--//
// html = `
//     <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     <li></li>
//     </ul>
// `;//This (`), keyboard top left, isn't the same as this ('), keyboard bottom right.

// document.body.innerHTML = html;
// //--▲ Template Literals ▲--//


// //--▼ Arrays & Array Methods ▼--//
// //--▼ Create Some Arrays ▼--//
// const numbersOne = [43,56,33,23,44,36,5];
// const numbersTwo = new Array(22,45,33,76,54);// Case Sensitive
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];

// const mixed = [22,'Hello', true, undefined, null, {a:1,b:1,c:1}, new Date()];
// console.log(mixed);

// let val;

// //--▼ Get Array Length ▼--//
// val = numbersOne.length;

// //--▼ Check if it's an Array ▼--//
// val = Array.isArray(numbersOne);// Will Return, true
// val = Array.isArray('Hello');// Will Return, false

// //--▼ Get Single Value ▼--//
// val = numbersOne[0]// Arrays are 0 (Zero) based

// //--▼ Insert Into Array ▼--//
// const numbersThree = [1,2,33,4,5,6,7];
// numbersThree[2] = 100;// Will return, Array(7) [ 43, 56, 100, 23, 44, 36, 5 ]
// console.log(numbersThree);

// //--▼ Find Index of Value ▼--//
// val = numbersOne.indexOf(36);

// //--▼ Mutating Arrays ▼--//
// numbersOne.push(250);// Will return, Array(8) [ 43, 56, 33, 23, 44, 36, 5, 250 ]
// numbersOne.unshift(120);// Will return, Array(9) [ 120, 43, 56, 33, 23, 44, 36, 5, 250 ]
// numbersOne.pop();// Will return, Array(8) [ 120, 43, 56, 33, 23, 44, 36, 5 ]
// numbersOne.shift();// Will return, Array(7) [ 43, 56, 33, 23, 44, 36, 5 ]

// const numbersSplice = [1,2,3,4,5,6]
// numbersSplice.splice(1);// Will return, Array [ 1 ]
// numbersSplice.splice(1,1);// Will return, Array(5) [ 1, 3, 4, 5, 6 ]
// numbersSplice.splice(1,3);// Will return, Array(3) [ 1, 5, 6 ]
// console.log(numbersSplice);

// numbersOne.reverse();// Will return, Array(7) [ 5, 36, 44, 23, 33, 56, 43 ]
// val = numbersOne.concat(numbersTwo);
// val = fruit.sort();// Will return, Array(4) [ "Apple", "Banana", "Orange", "Pear" ]

// //--▼ Use the Compare Function ▼--//
// val = numbersThree.sort();// Will return, Array(7) [ 1, 100, 2, 4, 5, 6, 7 ]
// val = numbersThree.sort(function(x, y){
//    return x - y;
// });// Will return, Array(7) [ 1, 2, 4, 5, 6, 7, 100 ]

// val = numbersThree.sort(function(x, y){
//     return y - x;
// });// Array(7) [ 100, 7, 6, 5, 4, 2, 1 ]

// console.log(numbersOne);
// console.log(val);
// //--▲ Arrays & Array Methods ▲--//

//--▼ Object Literals ▼--//
// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@aol.com',
//     hobbies: ['music','sports'],
//     address: {
//         city: 'Miami',
//         state: 'Florida'
//     },
//     getBirthYear: function (){
//         return 2020 - this.age;
//     }
// }

// let val;

// val = person;
// //▼ Get Specific Value
// val = person.firstName;//◄ Recommended
// val = person['firstName'];

// val = person.age;// Will return, 30
// val = person.hobbies[1];// Will return, sports
// val = person.address.state;// Will return, Florida
// val = person.address['city'];// Will return, Miami
// val = person.getBirthYear();// Will return, 1987


// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 23},
//     {name: 'Nancy', age: 40},
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }
//--▲ Object Literals ▲--//

//--▼ Dates & Times ▼--//
// let val;
// let valDateString;

// const today = new Date();
// birthday = new Date('9-10-1981 11:25:00');//Incompatible with Firefox
// birthday = new Date('September 10, 1981 1:28:00');//Firefox Compatible
// birthday = new Date('9/10/1981');//Firefox Compatible


// val = birthday;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// valDateString = today.toString;

// console.log(birthday);
// console.log(typeof val);// Will return, object
// console.log(typeof valDateString);// Will return, function
//--▲ Dates & Times ▲--//

//--▼ If Statements & Comparison Operators ▼--//
// if(something){
//     do something
// } else {
//     do something else
// }

// const id = 100;

// //--▼ Equal to ▼--//
// if(id == 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //--▼ Not Equal to ▼--//
// if(id != 101){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //--▼ Equal to Value and Type ▼--//
// if(id === 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //--▼ Not Equal to Value and Type ▼--//
// if(id !== 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //--▼ Test if Undefined ▼--//
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('No ID');
// }

// //--▼ Greater or Less than ▼--//
// if(id >= 200){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //--▼ If Else ▼--//
// const color = 'Yellow';

// if(color === 'Red'){
//     console.log('Color is Red');
// } else if(color === 'Blue'){
//     console.log('Color is Blue');
// } else {
//     console.log('Color is not Red or Blue');
// }

// //--▼ Logical Operators (and - &&) ▼--//
// const name = 'Steve';
// const age = 70;

// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`);
// }

// //--▼ Logical Operators (or - ||) ▼--//
// if(age < 16 || age > 65){
//     console.log(`${name} cannot run in race.`);
// } else {
//     console.log(`${name} is registered for the race.`)
// }

// //--▼ Ternary Operator (?) ▼--//
// console.log(id === 100 ? 'Correct' : 'Incorrect');

// //--▼ Without Braces ▼--//
// if (id === 100)
//     console.log('Correct');
// else
//     console.log('Incorrect');

//--▲ If Statements & Comparison Operators ▲--//


//--▼ Switches ▼--//
// const color = 'Red';

// switch(color){
//     case 'Red':
//         console.log('Color is Red');
//         break;
//     case 'Blue':
//         console.log('Color is Blue');
//         break;
//     default:
//         console.log('Color is not Red or Blue')
//         break;
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is ${day}`);
//--▲ Switches ▲--//


//--▼ Function Declarations & Expressions ▼--//
// //--▼ Function Declarations ▼--//
// function greet(firstName = 'John', lastName = 'Smith'){//◄ Setting the preference that will be referenced within the function, () is a callback
//     // if(typeof firstName === 'undefined'){firstName = 'John'}
//     // if(typeof lastName === 'undefined'){lastName = 'Smith'}
//     return 'Hello ' + firstName + ' ' + lastName;//◄ Using the preference referenced within the function (callback)
// }

// console.log(greet('Steve', 'Doe'));//◄ Overwrites the default
// console.log(greet());

// //--▼ Function Expressions ▼--//
// const square = function(x){
//     return x*x;
// };
// console.log(square(8));//◄ Will return, 64

// const circle = function(y = 3){
//     return y*y;
// };
// console.log(circle());//◄ Will return, 9

// //--▼ Immediately Invokable Function Expressions - IIFE'S ▼--//
// (function(){
//     console.log('IIFE Ran...');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Brad');

// //--▼ Property Methods ▼--//
// const todo = {
//     add:function(){
//         console.log('Add todo...');
//     },//◄ Don't forget the comma! (,)
//     edit:function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22);
// todo.delete();
//--▲ Function Declarations & Expressions ▲--//

//--▼ General Loops ▼--//
//--▼ For Loop ▼--//
// for(let i = 0; i < 10; i++){//i++ is, i = i + 1: It will add (+) 1 to whatever i is.
//     if(i === 2){
//         console.log('2 is my favourite number.');
//         continue;
//     }
//     if(i === 5){
//         console.log('Stop the loop.');
//         break;
//     }
//     console.log('Number '+ i);
// }

// //--▼ While Loop ▼--//
// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

// //--▼ Do While ▼--//
// /*
// let i = 0;
// do{
//     console.log('Number ' + i);
//     i++;//◄ This will crash the browser, it doesn't break the loop.
// }

// while(1 < 10);
// //▲ This will crash the browser.
// */

// //--▼ Loop through Array ▼--//
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(i);// Will return, while_loop_one
//     console.log(cars[i]);// Will return, while_loop_two
// }

// //--▼ For Each ▼--//
// cars.forEach(function(car, index, array){
//     console.log(car);// Will return, while_loop_two
//     console.log(`${index} : ${car}`);// Will return, for_each_loop
//     console.log(array);// Will return, for_each_array
// });

// //--▼ Map ▼--//
// const users = [
//     {id:1, name:'John'},
//     {id:2, name: 'Sarah'},
//     {id:3, name: 'Mike'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);// Will return, map_array_log

// //--▼ For In Loops ▼--//
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`);// Will return, for_in_loops
// }
//--▲ General Loops ▲--//

// //--▼ Block Scope with let & const ▼--//
// //--▼ Global Scope ▼--//
// var a = 1; // Function Scope
// let b = 2; // Block Level Scope
// const c = 3; // Block Level Scope

// /*
// function test(){
//     var a = 4; // No Change, Global Scope: 1
//     let b = 5; // No Change, Global Scope: 2
//     const c = 6; // No Change, Global Scope: 3
//     console.log('Function Scope: ', a, b, c);
// }
// test();
// */
// /*
// if(true){
//     //Block Scope
//     var a = 4; // Will Change, Global Scope: 4
//     let b = 5; // No Change, Global Scope: 2
//     const c = 6; // No Change, Global Scope: 3
//     console.log('Block Scope: ', a, b, c);
// }
// */

// for(let b = 0; a < 10; a++){
//     console.log(`Loop: ${a}`);
// }

// for(var a = 0; a < 10; a++){
//     console.log(`Loop: ${a}`);
// }// Will Change, Global Scope:  10 2 3
// console.log('Global Scope: ', a, b, c);
// //--▲ Block Scope with let & const ▲--//




















































/***********************************************************************************/

//--▼ Example ▼--//
//--▲ Example ▲--//

//--◄ Example ▼--//
//--◄ Example ▲--//

//◄ Example
//▲ Example
//► Note to Self ◄//

/*--▼ Removed ▼--//
//--▲ Removed ▲--*/

























