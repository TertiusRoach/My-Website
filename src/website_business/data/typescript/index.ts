let xlsx = require('xlsx');
let distFolder = '../../../../dist/';

let excelIndex = xlsx.readFile(`${distFolder}index.xlsx`);

let sheet1 = excelIndex.Sheets['Sheet1'];
let Sheet2 = excelIndex.Sheets['Sheet2'];
let sheet3 = excelIndex.Sheets['Sheet3'];
let sheet4 = excelIndex.Sheets['Sheet4'];

// console.log(sheet1);

console.log(excelIndex.SheetNames);




