const leapYear = 2021;
if (leapYear % 4 == 0) {
    console.log("This is a leap year");
} else {
    console.log("This is not a leap year");
}

//another method;
let year=2022;
function Year(year) {
    if (year % 4 == 0) {
        return  true;
    } else {
        return false;
    }
}
console.log(Year(2020));

//another method;
function nyear(){
let byear = 2024;
if(byear%4==0){
    console.log("This is a leap year");    } 
    else{
        console.log("This is not a leap year");
    }   

}

nyear();