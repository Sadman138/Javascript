class Father {
    constructor(Name, Age) {
        this.name = Name;
        this.age = Age;
    }
}

class Child extends Father {
    constructor(Name, Age) {
        super(Name, Age); // Inherit from Father
    }
}

const sadman = new Child("Sadman", 20);
const baba = new Father("Anwar", 50);

console.log(sadman);
console.log(baba);
