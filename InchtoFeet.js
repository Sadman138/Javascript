function inchtofeet(inch){
    var feet = inch/12;
    return feet;

}


console.log(inchtofeet(156));
console.log(inchtofeet(144));
console.log(inchtofeet(120));



//using array
var inch = [156,144,120];

for(var i=0; i<inch.length; i++){
  
    console.log(inchtofeet(inch[i]));    
}