class Vehicle {
    color;
    make;
    model;
    year;
    constructor(color, make, model, year) {
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getMaxSpeed() {
        return 320;
    }
    getColor() {
        return this.color;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    setColor(color) {
        this.color = color;
    }
}
class Car extends Vehicle {
    color;
    make;
    model;
    year;
    constructor(color, make, model, year) {
        super(color, make, model, year);
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getMaxSpeed() {
        return super.getMaxSpeed() / 2;
    }
}
const car = new Car("Black", "Eagle", "Talon TSi", 1993);
console.log(car.getMake());
console.log(car.getModel());
console.log(car.getYear());
console.log(car.getMaxSpeed());
export {};
//# sourceMappingURL=class.js.map