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

//UC5- Calculating Wages till Number of Working Days or Total Working Hours per month is Reached
const MAX_HRS_IN_MONTH = 100;

//i changed from const NUM_OF_WORKING_DAYS = 10; to NUM_OF_WORKING_DAYS = 10;
NUM_OF_WORKING_DAYS = 10;

let totalEmpHrs = 0;

let totalworkingDays = 0;

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&

  totalWorkingDays < NUM_OF_WORKING_DAYS) {

totalWorkingDays++;

let empCheck = Math.floor(Math.random() * 10) % 3;

totalEmpHrs += getWorkingHours (empCheck);
  }
//let empwage = totalEmpHrs * WAGE_PER_HOUR; changed
empwage = totalEmpHrs * WAGE_PER_HOUR;

console.log("UC5 Total Days:" + totalworkingDays +

"Total Hrs: " + totalEmpHrs +" Emp Wage: " + empWage);

//////UC6-Store the Daily Wage along with the Total Wage. (Save in an Array the Daily Wage)
function calcDailywage(empHrs) { 
    return empHrs * WAGE_PER_HOUR;
 }
//const MAX_HRS_IN_MONTH = 160; changed to

MAX_HRS_IN_MONTH = 160;

//const NUM_OF_WORKING_DAYS = 20; changed to
NUM_OF_WORKING_DAYS = 20;
//let totalEmpHrs = 0; changed to
totalEmpHrs = 0;

let totalWorkingDays = 0;

let empDailyWageArr = new Array();

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalworkingDays < NUM_OF_WORKING_DAYS) {

totalWorkingDays++;

let empCheck= Math.floor(Math.random() * 18) % 3;

let empHrs = getWorkingHours (empCheck);

totalEmpHrs += empHrs;

empDailywageArr.push(calcDailywage(empHrs));
}
//let empwage = calcDailyWage(totalEmphrs); changed to 
empwage = calcDailyWage(totalEmphrs); 
console.log("UC6 - Total Days:" + totalworkingDays +
 "Total Hrs:"+ totalEmpHrs+ "Emp Wage:"+ empwage);

 ///////UC7-Use the Daily Wage Array perform following operations using Array Helper Functions
 // UC 7A-Calc total Wage using Array forfach traversal or reduce method

 let totEmpwage = 0;
  function sum(dailywage) {
 
    totEmpwage += dallywage;
  }
  empDailywageArr.forEach(sum);
 
 console.log("UC7A - Total Days:"+ totalworkingDays +
 
            " Total Hrs:" +  totalempHrs+ " Exp Wages:" + totEmpMage);
 
 function totalWages (totalWage, dailywage) {
 
 return totalWage + dailywage;
 }
 
 console.log("UC7A - Emp Wage with reduce: "+
 
     empDailyWageArr.reduce(totalWages, 0));
 
// UC 7B - Show the Day along with Daily Wage using Array map helper function
 
 let dailyCntr =0;
 
 function mapDayWithwage(dailyWage) {
 
 dailyCntr++;
 
     return dailyCntr + " = " + dailyWage;
 }
 
 let mapDayWithWageArr = empDailyWageArr.map(mapDayWithwage);
 
 console.log("UC7B Dally Wage Map"); 
 console.log(mapDaywithWageArr);
 
 //UC 7C-Show Days when Full time wage of 160 were earned

 function fulltimeWage(dailyWage) 
 { 
     return dailyWage.includes("160");
 } 
 let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
 console.log("UC7C Daily Wage Filter When Fulltime Wage Earned");
 console.log(fullDayWageArr);
 
 
 // UC 7D Find the first occurrence when Full Time Wage was earned using find function function findFulltimeWage(dailywage) { return dailywage.includes ("160");
 function findFulltimeWage(dailyWage)
 {
 return dailyWage.includes("160");
 }
  console.log("UC 7D First time Fulltime wage was earned on Day: "+ mapDayWithWageArr.find(findFulltimeWage));
 
 
 // UC 7E Check if Every Element of Full Time Wage is truely holding Full time wage function isAllFulltimewage (dailywage) { return dailywage.includes("160");
 function isAllFulltimeWage(dailyWage)
 {
 return dailyWage.includes("160");
 }
 console.log("UC 7E Check All Element have Full Time Wage: "+ fullDayWageArr.every(isAllFulltimeWage));
 
 
 // UC 7F Check if there is any Part Time Wage function isAnyPartTimeWage(dailywage) { return dailywage. includes ("80");
 function isAnyPartTimeWage(dailyWage)
 {
 return dailyWage.includes("80");
 }
 
 console.log("UC 7F Check If Any Part Time Wage: "+ mapDayWithWageArr.some (isAnyPartTimeWage));
 
 // UC 7G Find the number of days the Employee Worked function totalDaysWorked (numOfDays, dailywage) { if (dailywage > 0) return numOfDays+1; return numOfDays;
 function totalDaysWorked(numOfDays, dailyWage)
 {
     if (dailyWage>0 )
         return numOfDays+1;
 }
 
 console.log("UC 7G- Number of Days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));
 
 /////UC8-Store the Day and the Daily Wage along with the Total Wage 1. Use Map to store Day wise Wage 2. Compute the total wage using the Map
MAX_HRS_IN_MONTH= 160;

NUM_OF_WORKING_DAYS = 20;

totalEmpHrs = 8;

totalworkingDays = 8;

empDailyWageArr = new Array();

let empDailywageMap = new Map();

function calcDailywage(empHrs) { 
    return empHrs * WAGE_PER_HOUR;

}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && 
    totalWorkingDays < NUM_OF_WORKING_DAYS) { 
        totalWorkingDays++; 
        let empCheck= Math.floor(Math.random()* 10) % 3;
        let empHrs = getWorkingHours(empCheck); 
        TotalEmpHrs +=empHrs;
        empDailyWageArr.push(calcDailywage(empHrs));
        empDailywageMap.set(totalWorkingDays, calcDailywage(empHrs)); I
}

console.log(empDailyWageMap);
function totalWages (totalWage, dailywage) {
     return totalWage + dailywage;
}
console.log("UC7A Emp Wage Map totalhrs: "+

Array.from(empDailywageMap.values()).reduce(totalWages, 0));