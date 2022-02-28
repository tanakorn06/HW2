
interface Human{
    id: Number,
    name: String,
    age: Number,
    tel?: String,
    move() : String,
    eat() : String,
}
class Aeronaut implements Human{
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    move(){
        return `${this.name} moves by automobile.`;
    }
    eat(){
        return `${this.name} eats banana.`;
    }

}
const occupation = new Aeronaut(101,"tanakorn",20);
console.log(occupation.id)
console.log(occupation.name)
console.log(occupation.age)
console.log(occupation.move())
console.log(occupation.eat())