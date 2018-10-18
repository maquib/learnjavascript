/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
console.log(lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher'
console.log(job);
*/
/*
var firstName = 'John';
var age = 28;
var job, isMarried;
job = 'Teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*
//Math operator
var year = 2018;
var birthYear = year - 26;
console.log(birthYear);

var birthYear = year - 26 * 2;
console.log(birthYear);


ageJohn = 28;
ageMark = 33;
//logical operator
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'aquib');
var x;
console.log(typeof x);


//Operato precedence
var now = 2018;
var yearAquib = 1993;
var fullAge = 24;

//multiple operator
var isFullAge = now - yearAquib >= fullAge;
console.log(isFullAge);

//groping operator
var ageAquib = now - yearAquib;
var ageZaid = 26;
var average = (ageAquib + ageZaid)/2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (5+6)*2-8;
console.log(x, y);


var massMark = 54;
var massJohn = 60;

var heightMark = 1.82;
var heightJohn = 1.67;

var bmiMark = massMark /(heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/*
//If-else statement
var age = 20;
if (age<14){
    console.log('John is a boy');
}
else if(age >= 14 && age < 20){
    console.log('John is a teenager')
}
else if(age > 20 && age < 30){
    console.log('John is a young man')
}
else{
    console.log('John is a man');
}
*/

/*
//Ternary Operator and switch statement
//Ternary operator
var age = 19;
age >= 20 ? console.log('Aquib drinks Tea.') : console.log('Aquib drinks coffee.');
var drinks = age >= 20 ? 'Tea' : 'Coffee';
console.log(drinks);

//Switch Statement
var job = 'Plumber';
switch (job)
    {
        case 'Teacher':
            console.log('John teaches kids how to code.');
            break;
        case 'Driver':
            console.log('John drives a cab in Lisbon.');
            break;
        default:
            console.log('John does something else.');
    }

switch(true)
    {
        case age < 14:
            console.log('John is a boy');
            break;
        case age >= 14 && age < 20:
            console.log('John is a Teenager');
            break;
        case age > 20 && age < 30:
            console.log('John is a young man');
            break;
        default:
            console.log('John is a man');
    }
*/

//Truthy and Falsy values and equality operator
/*
var height;

if (height) {
    console.log('variable is defined');
}
else {
    console.log('variable is NOT defined')
}
*/

/*
//challenge
var averageJohn = (89+120+103)/3;
console.log(averageJohn);

var averageMike = (116+123+94)/3;
console.log(averageMike)

var averageMary = (97+134+105)/3;
console.log(averageMary);

if (averageJohn>averageMike && averageJohn>averageMary){
    console.log('John\'s team win the match');
}
else if (averageJohn<averageMike && averageMike>averageMary){
    console.log('Mike\'s team is win the match');
}
else{
    console.log('Mary\'s team win the match');
}
*/

/*
//Functions

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageAquib = calculateAge(1993);
var ageZaid = calculateAge(1992);
var ageAta = calculateAge(1991);
console.log(ageAquib, ageZaid, ageAta);
*/

/*
//Array

//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1976, 1993);

console.log(names[0]);
console.log(names.length);

// Mutate Array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('green');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
*/

/*
//Challenge
function calculateBill(bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    }else if (bill >= 50 && bill < 200){
        percentage = .15;
    }else {
        percentage = .1;
    }
    return percentage * bill;
}
console.log(calculateBill(300))

var bills = [124, 48, 268];
var tips = [calculateBill(bills[0]), calculateBill(bills[1]), calculateBill(bills[2])];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, finalValues);
*/

/*
//Objects And Properties

//Object literal
var aquib = {
    firstName: 'Mohammad',
    lastName: 'Aquib',
    birthYear: 1993,
    family: ['Faisal', 'Azim', 'Hazique'],
    job: 'None',
    isMarried: false,
};

console.log(aquib.lastName);
console.log(aquib.firstName);
var x = 'birthYear';
console.log(aquib[x]);

aquib.job = 'Developer';
aquib['isMarried'] = true;
console.log(aquib);


//new Object syntax
var faisal = new Object();
faisal.firstName = 'Shah';
faisal.birthYear = 1976;
faisal['lastName'] = 'Faisal';
console.log(faisal)
*/

/*
//Objects And Methods

var aquib = {
    firstName: 'Mohammad',
    lastName: 'Aquib',
    birthYear: 1993,
    family: ['Faisal', 'Azim', 'Hazique'],
    job: 'None',
    isMarried: false,
    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;
    }
};

aquib.calcAge();
console.log(aquib);
*/


/*
//Coding Challenge

var john = {
    fullName: 'John Smith',
    mass: 75,
    height: 1.92,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
    
};

var mark = {
    fullName: 'Mark Smith',
    mass: 93,
    height: 1.92,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
    
};
john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
}
else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
}
else {
    console.log('They have same BMI');
}

*/

/*
//Loops and Iteration

//For loop
for (var i = 1; i <= 20; i += 2){
    console.log(i)
}

var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i <john.length; i++)
    {
        console.log(john[i]);
    }


//While loop
var i = 0;
while (i < john.length){
    console.log(john[i]);
    i++;
}
*/

/*
//continue and break statements

var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string')
        continue;
        console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string')
        break;
        console.log(john[i]);
}

*/


/*
//challenge

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];
        
        for (var i = 0; i < this.bills.length; i++)
            {
                var percentage;
                var bill = this.bills[i];
                
                if (bill < 50) {
                    percentage = .2;
                } else if (bill >= 50 && bill < 200) {
                    percentage = .15;
                } else {
                    percentage = .1;
                }
                
                this.tips[i] = bill * percentage;
                this.finalValue[i] = bill + bill * percentage;
            }
    }
}
var mark = {
    fullName: 'Mark Smith',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];
        
        for (var i = 0; i < this.bills.length; i++)
            {
                var percentage;
                var bill = this.bills[i];
                
                if (bill < 100) {
                    percentage = .2;
                } else if (bill >= 100 && bill < 300) {
                    percentage = .1;
                } else {
                    percentage = .25;
                }
                
                this.tips[i] = bill * percentage;
                this.finalValue[i] = bill + bill * percentage;
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

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average){
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
}else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}

*/


//This keywords
/*
calculateAge(1993);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        
    }
}
john.calculateAge();































































































































































