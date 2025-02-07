var student1 ={ name: "sadman "  , age :20 , cgpa:3.5 , language: ["bangla","english","hindi"]};
var student2 ={ name: "sakib "  , age :21 , cgpa:3.6 , language: ["bangla","english","hindi"]};
console.log(student1);
console.log(student2);
console.log(student1.name);
console.log(student2.name);
console.log(student1.language[0]);
console.log(student2.language[1]);
console.log(student1.cgpa);
console.log(student2.cgpa);
console.log(student1.age); 
console.log(student2.age);
student1.age=22;    //update
student1["age"]=23; 
console.log(student1.age);
console.log(student2.age);
student1["cgpa"]=3.7;
console.log(student1.cgpa);
console.log(student2.cgpa);