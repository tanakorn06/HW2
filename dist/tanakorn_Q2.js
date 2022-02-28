class Aeronaut {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        return `${this.name} moves by automobile.`;
    }
    eat() {
        return `${this.name} eats banana.`;
    }
}
const occupation = new Aeronaut(101, "tanakorn", 20);
console.log(occupation.id);
console.log(occupation.name);
console.log(occupation.age);
console.log(occupation.move());
console.log(occupation.eat());
