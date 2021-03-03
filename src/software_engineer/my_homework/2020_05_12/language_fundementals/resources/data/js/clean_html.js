//--▼ Template Literals ▼--//
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

let html;

//--▼ Without Template Strings ▼--//
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html =  '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>';
//         '</ul>'

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

document.body.innerHTML = html;

// //--▲ Template Literals ▲--//