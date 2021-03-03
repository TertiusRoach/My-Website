/***********************************************************************************/

/*--▼ Variables & Data Types ▼--//
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job; //◄ Undefined will be returned
console.log(job);

job = 'Teacher';
console.log(job);
//--▲ Variables & Data Types ▲--*/

/***********************************************************************************/

/*--▼ Variable Mutation & Type Coercion ▼--//
//--▼ Type Coercion ▼--//
var firstName = 'John';
var age = 28; //◄ This is a Number

console.log(firstName + '_' + age); //◄ "John_28" will be returned

var job, isMarried; //◄ Multiple Variables Assigned
job = 'Teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//▲ "John is a 28 year old Teacher. Is he married? false" - Will be returned
//--▲ Type Coercion ▲--//
//--▼ Variable Mutation ▼--//
age = 'twenty eight'; //◄ This is a String
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//▲ Note example will show the results of this alert

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
//▲ Note example will show the results of this prompt
//--▲ Variable Mutation ▲--//
//--▲ Variable Mutation & Type Coercion ▲--*/

/***********************************************************************************/

/*--▼ Basic Operators ▼--//
var now, yearJohn, yearMark; //◄ Sets Variables
now = 2018; //◄ Defines current year
ageJohn = 28; //◄ Defines John Age
ageMark = 33; //◄ Defines Mark Age
var x; //◄ Undefined

//--▼ Math Operators ▼--//
yearJohn = now - ageJohn;
//▲ Calculates when John was born

yearMark = now - ageMark;
//▲ Calculates when Mark was born

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2)
//--▲ Math Operators ▲--//
//--▼ Logical Operators ▼--//
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); //◄ Will return false
//--▲ Logical Operators ▲--//
//--▼ Type of Operator ▼--//

console.log(typeof johnOlder); //◄ Boolean Variable
//▲ This will tell the type of variable
console.log(typeof ageJohn); //◄ Number Variable
//▲ This will tell the type of variable
console.log(typeof 'Mark is older than John'); //◄ String Variable
//▲ This will tell the type of variable
console.log(typeof x); //◄ Undefined Variable
//▲ This will tell the type of variable
//--▲ Typeof Operator ▲--//
//--▲ Basic Operators ▲--*/

/***********************************************************************************/

/*--▼ Operator Precedence ▼--//
//--▼ Multiple Operators ▼--//
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge); //◄ Will return true, boolean
//--▲ Multiple Operators ▲--//
//--▼ Grouping ▼--//
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2; //◄ Will return 32, number
//▲ (...) has highest precedence
console.log(average);
//--▲ Grouping ▲--//

//--▼ Multiple Assignments ▼--//
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);//◄ Will return 26, number
//--▲ Multiple Assignments ▲--//

//--▼ More Operators ▼--//
x *= 2;
console.log(x);//◄ Will return 52, number
x += 10;
console.log(x);//◄ Will return 62, number
x++;
//▲ Adds one unit to the operator
console.log(x);//◄ Will return 63, number
//--▲ More Operators ▲--//
//--▲ Operator Precedence ▲--*/

/***********************************************************************************/

/*--▼ Coding Challange #1 ▼--//
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92; // kg
var heightJohn = 1.92; // meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn); //◄ Will return 27.309 & 24.956, number

var MarkHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\' BMI higher than John\'s? ' + MarkHigherBMI);
//▲ Will return true, boolean
//--▲ Coding Challange #1 ▲--*/

/***********************************************************************************/

/*--▼ If/Else Statements ▼--//
var firstName = 'John';
var civilStatus = 'single';//◄ civilStatus is 'single'
    if (civilStatus === 'married') {
        console.log(firstName + ' is married.');
    } else {
        console.log(firstName + ' isn\'t married.');//◄ Will return, John isn't married.
    }

var isMarried = true;
    if (isMarried) {
        console.log(firstName + ' is married.');//◄ Will return, John is married.
    } else {
        console.log(firstName + ' isn\'t married.');
    }

//--▼ Coding Challenge #1 - If/Else Statements ▼--//
var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.92;
//▲ Changing these will affect the else statement

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');//◄ Will return, "Mark's BMI is hagher than John's."
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
//--▲ Coding Challenge #1 - If/Else Statements ▲--//
//--▲ If/Else Statements ▲--*/

/***********************************************************************************/

/*--▼ Boolean Logic ▼--//
var firstName = "John";
var age = 16;//◄ Changing this will affect the else statement

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.'); //◄ Will return, "John is a teenager."
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}
    else {
    console.log(firstName + ' is a man.');
}
//--▲ Boolean Logic ▲--*/

/***********************************************************************************/

/*--▼ The Ternary Operator and Switch Statements ▼--//
var firstName = 'John';
var age = 16;
var job = 'teacher';

//--▼ Ternary Operator ▼--//
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.'); //◄ Will return, "John drinks juice."

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
//▲ Beer will be logged if age is 18 or more
//--▲ Ternary Operator ▲--//

//--▼ Switch Statement ▼--//
switch (job) {
    case 'teacher':
    case 'instructor': //◄ Two possibilities assigned
        console.log(firstName + ' teaches kids how to code.');
        break; //◄ Will stop evaluating if job = 'teacher'
    case 'driver':    
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}//▲ Example #1

age = 56; //◄ Changing this affect the outcome
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >=20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}//▲ Example #2
//--▲ Switch Statement ▲--//

//--▼ If/Else Statement (Recap) ▼--//
if (age >= 18){
    var drink = 'beer';
} else {
    var drink = 'juice';
}
//--▲ If/Else Statement (Recap) ▲--//
//--▲ The Ternary Operator and Switch Statements ▲--*/

/***********************************************************************************/

/*--▼ Truthy and Falsy Values & Equality Operators ▼--//
var height; //◄ Only Declaring it

height = 0;
//▲ 0 = Not defined unless you state otherwise in an 'if' statement, example below.

//▼ Look up 'Basic Boolean Logic'
if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has not been defined.')
}//▲ This will be returned if it hasn't been defined, only declared.

//--▼ Equality Operators ▼--//
var equalityOperators = 23;//◄ Both must be 23 to return value
if (equalityOperators == '23')//◄ Both must be 23 to return value
console.log('The == operator compared the string to the number');
//--▲ Equality Operators ▲--//

//--▲ Truthy and Falsy Values & Equality Operators ▲--*/

/***********************************************************************************/

/*--▼ Coding Challenge #2 ▼--//
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) /3;
console.log(scoreJohn, scoreMike, scoreMary);

//--▼ Part #1 (Without Mary) ▼--//
if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
//--▲ Part #1 (Without Mary) ▲--//
//--▼ Part #2 (With Mary) ▼--//
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}
//--▲ Part #2 (With Mary) ▲--//
//--▲ Coding Challenge #2 ▲--*/

/***********************************************************************************/

/*--▼ Functions ▼--//
function calculateAge (birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1991); //◄ calculateAge is executed and returned as a number variable for ageJohn
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1990);
    console.log (ageJohn, ageMike, ageJane);

function yearsUntilRetirement (year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');//◄ This will return -7, if else statement fixes this
yearsUntilRetirement(1969, 'Jane');
//--▲ Functions ▲--*/

/***********************************************************************************/

/*--▼ Function Statements and Expressions ▼--//
function functionDeclaration (job, firstName) {//◄ Function Declaration}
var functionExpression = function(job, firstName) {//◄ Function Expression}

var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.'; //◄ No need to add a 'break;' because 'return' immediately ends the function
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beatiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John')); //◄ Will return, "John teaches kids how to code."
console.log(whatDoYouDo('driver', 'Mark')); //◄ Will return, "Mark drives a cab in Lisbon."
console.log(whatDoYouDo('designer', 'Mary')); //◄ Will return, "Mary designs beatiful websites."
console.log(whatDoYouDo('policeman', 'Peter')); //◄ Will return, "Peter does something else."
//--▲ Function Statements and Expressions ▲--*/

/***********************************************************************************/

/*--▼ Arrays ▼--//
//--▼ Initialize New Array ▼--//
var names = ['John', 'Mark', 'Jane'];//◄ Preferred
var years = new Array (1990, 1969, 1948);//◄ Not Preferred

console.log(names); //◄ Will return, Array(3) [ "John", "Mark", "Jane" ]
console.log(names[0]); //◄ Will return, John
console.log(names[1]); //◄ Will return, Mark
console.log(names[2]); //◄ Will return, Jane
console.log(names.length);
//▲ Will return 3, because there are 3 elements in the array
//--▲ Initialize New Array ▲--//

//--▼ Mutate Array Data ▼--//
names[1] = 'Ben';
//▲ Will replace array 1 'Mark' with 'Ben' and return, Array(3) [ "John", "Ben", "Jane" ]
names[5] = 'Mary'; //◄ Will return, Array(6) [ "John", "Ben", "Jane", <2 empty slots>, "Mary" ]
//▼ names[names.length] = 'Mary';
//▲ Will return, Array(4) [ "John", "Ben", "Jane", "Mary" ], if (names[5] = 'Mary';) is inactive
console.log(names);
//--▲ Mutate Array Data ▲--//

console.log(years); //◄ Will return, Array(3) [ 1990, 1969, 1948 ]
console.log(years[0]); //◄ Will return, 1990
console.log(years[1]); //◄ Will return, 1969
console.log(years[2]); //◄ Will return, 1948

//--▼ Different Data Types ▼--//
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); //◄ The .push fucntion will add blue at the end of the array
console.log(john);
//▲ Will return, Array(6) [ "John", "Smith", 1990, "teacher", false, "blue" ]
john.unshift('Mr.');//◄ The .unshift fucntion will add Mr. to the start of the array
console.log(john);
//▲ Will return, Array(7) [ "Mr.", "John", "Smith", 1990, "teacher", false, "blue" ]

john.pop(); //◄ The .pop function will remove the last element of the array
john.pop(); //◄ Will remove 'false'
console.log(john);
//▲ Will return, Array(7) [ "Mr.", "John", "Smith", 1990, "teacher" ]

john.shift(); //◄ The .shift function will remove the first element of the array
john.shift(); //◄ Will remove 'John'
console.log(john);
//▲ Array(3) [ "Smith", 1990, "teacher" ]. Please note that the .pop functions still affects the return results
console.log(john.indexOf(1990)); //◄ Will return, 1. Look at above example ▲
//▲ Will return the position of the argument that you pass inside of this array
console.log(john.indexOf(23)); //◄ Will return, -1, because the number isn't present in the array

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
//▲ Will return, John is not a designer, unless you change 'teacher' to 'designer' in the array variable
//--▲ Different Data Types ▲--//
//--▲ Arrays ▲--*/

/***********************************************************************************/

/*--▼ Coding Challenge #3 ▼--//
function tipCalculator(bill) { //◄ tipCalculator is the name of the function
    var percentage; //◄ percentage is the name which will have interchangeable values within the function
//▼ This function (tipCalculator) is using an if else statement
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200){
        percentage = .15;
    } else {
        percentage = .1;
    } return percentage * bill;
}
console.log(tipCalculator(300));//◄ Will return, 30

var bills = [124, 48, 268];//◄ This is an array called 'bills'
//▼ Setting a variable for 'tips'
var tips =  [tipCalculator(bills[0]),//◄ Applying the function (tipCalculator) to each [array]
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues =   [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues);
//▲ Will return, Array(3) [ 18.599999999999998, 9.600000000000001, 26.8 ]
//▲ Will return, Array(3) [ 142.6, 57.6, 294.8 ]
//--▲ Coding Challenge #3 ▲--*/

/***********************************************************************************/

/*--▼ Objects and Properties ▼--//
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};//▲ This is the john object
console.log(john.firstName); //◄ Will return, John
console.log(john['lastName']); //◄ Will return, Smith

var x = 'birthYear';
console.log(john[x]);//◄ Will return, 1990

john.job = 'designer';
john['isMarried'] = true;
//▲ This changes the values of the john object
console.log(john);

//--▼ New Object Syntax ▼--//
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
//▲ Will return, Object { name: "Jane", birthYear: 1969, lastName: "Smith" }
//--▲ New Object Syntax ▲--//
//--▲ Objects and Properties ▲--*/

/***********************************************************************************/

/*--▼ Objects and Methods ▼--//
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1991,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calculateAge: function(birthYear) {
        this.age = 2020 - this.birthYear; 
    }//▲ adding (this.) to the function tells the computer to reference within the object
};//▲ This is the john object
john.calculateAge();
console.log(john);
//--▲ Objects and Methods ▲--*/

/***********************************************************************************/

/*--▼ Coding Challenge #4 ▼--//
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var mark = {
    fullName: 'Mark Miller',
    mass: 70,
    height: 1.75,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calculateBMI();
mark.calculateBMI();
console.log(john, mark);

//▼ The logs for calculateBMI are incorporated into the if statement
if (john.calculateBMI() > mark.calculateBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi)
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi)
} else {
    console.log('They have the same BMI')
}
//--▲ Coding Challenge #4 ▲--*/

/***********************************************************************************/

/*--▼ Loops and Iteration ▼--//
//--▼ For Loop ▼--//
//--▼ Refer to notes ►--//
for (var i  = 0; i < 10; i++) {
    console.log(i);
}//▲ i will be logged until it's no longer < 10

console.log('----------------------------------')

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}//▲ i will be logged until it's no longer <= 20 and add 2 after every log
//--▲ Refer to notes ►--//

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < 5; i++) {
    console.log(john[i]);
}
// John
// Smith
// 1990
// designer
// false
//▲ Will be returned, unless you change (i < 5) to (i < john.length) then 'blue' will also be returned
//--▲ For Loop ▲--//

//--▼ While Loop ▼--//
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
//▲ Careful, this will slow down your computer: Continue and Break Statements fixes this.
//--▲ While Loop ▲--//

//--▼ Continue Statement ▼--//
var mark = ['Mark', 'Miller', 1991, 'editor', false, 'red'];
for (var i = 0; i < mark.length; i++) {
    if (typeof mark[i] !== 'string') continue;
    console.log(mark[i]);
}
// Mark
// Miller
// editor
// red
//▲ Will be returned, it skipped the 1991 (Number) and false (Boolean) because it's different than a string
//--▲ Continue Statement ▲--//

//--▼ Break Statement ▼--//
var mark = ['Mark', 'Miller', 1991, 'editor', false, 'red'];
for (var i = 0; i < mark.length; i++) {
    if (typeof mark[i] !== 'string') break;
    console.log(mark[i]);
}
// Mark
// Miller
//▲ Will be returned, it skipped the rest because it was told to break the loop at the first item that isn't a string
//--▲ Break Statement ▲--//

//--▼ Looping Backwards ▼--//
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
// blue
// false
// designer
// 1990
// Smith
// John
//▲ Will be returned
//--▲ Looping Backwards ▲--//
//--▲ Loops and Iteration ▲--*/

/***********************************************************************************/

/*--▼ Coding Challenge #5 ▼--//
//--▼ My Attempt ▼--//
//► My mind went blank when trying to figure this out ◄//
//► You still have a lot to learn, #blessed ◄//
//--▲ My Attempt ▲--//

//--▼ Solution - Part #1 ▼--//
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
        {
            //▼ Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50[i] < 50) {
                percentage = .2;
            } else if (bill  >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            //▼ Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
//--▲ Solution - Part #1 ▲--//

//--▼ Solution - Part #2 ▼--//
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
        {
            //▼ Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100[i] < 50) {
                percentage = .2;
            } else if (bill  >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            //▼ Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();
console.log(mark, john);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
//--▲ Solution - Part #2 ▲--//
//--▲ Coding Challenge #5 ▲--*/

/***********************************************************************************/

/*--▼ Example ▼--//
//--▲ Example ▲--*/

//--▼ Example ▼--//
//--▲ Example ▲--//
