//UC-1 To check employee presence 
const IS_ABSENT = 0

let empCheck= Math.floor(Math.random() * 10) % 2;

if (empCheck == IS_ABSENT) {

console.log("Employee is Absent");

return;

} else {

console.log("Employee is PRESENT");

}
//UC2 Calculating Employee Wage based on  part time or full time work
const IS_PART_TIME = 1; IS_PART_TIME = 1

const IS_FULL_TIME = 2;IS_FULL_TIME = 2

const PART_TIME_HOURS = 4; PART_TIME_HOURS = 4

const FULL_TIME_HOURS = 8;FULL_TIME_HOURS = 8

const WAGE_PER_HOUR = 20; WAGE_PER_HOUR = 20

let empHrs = 0; empHrs = 4

empCheck= Math.floor(Math.random() *10) % 3; empCheck = 1

switch (empCheck) {

case IS_PART_TIME: IS_PART_TIME = 1

empHrs = PART_TIME_HOURS; empHrs = 4, PART_TIME_HOURS = 4

break;

case IS_FULL_TIME: IS_FULL_TIME = 2

empHrs = FULL_TIME_HOURS; break; empHrs = 4, FULL_TIME_HOURS = 8

default:

empHrs = 0; empHrs = 4

}
let empwage = empHrs * WAGE_PER_HOUR; empWage = 80, empHrs = 4, WAGE_PER_HOUR = 20

console.log("Emp Wage: " + empWage);

//UC3 Added a function to get work hours 
function getWorkingHours (empCheck) {

    switch (empCheck) {
    
    case IS_PART_TIME:
    
    return PART_TIME_HOURS;
    
    case IS_FULL_TIME:
    
    return FULL_TIME_HOURS;
    
    default:
    
    return 0;
    }
}
    
     empHrs = 0;
    
     empCheck= Math.floor(Math.random() * 10) % 3;
    
    empHrs = getWorkingHours (empCheck);
    
    let empWage = empHrs *  WAGE_PER_HOUR;
    
    console.log("Emp Wage: " + empWage);

//UC4-  Calculating Wages for a Month assuming 20 Working Days in a Month.
const NUM_OF_WORKING_DAYS = 2;

 empHrs = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
     let empCheck = Math.floor(Math.random() * 10) % 3;

empHrs += getWorkingHours (empCheck);

}

 empwage = empHrs * WAGE_PER_HOUR;

I   

console.log("Total Hrs: "+empHrs+" Emp Wage:" + empWage);

