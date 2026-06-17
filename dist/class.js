"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    color = "White";
    make;
    model;
    year;
    constructor(color, make, model, year) {
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
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
const vehicle = new Vehicle("Black", "Eagle", "Talon TSi", 1993);
console.log(vehicle.getMake());
console.log(vehicle.getModel());
console.log(vehicle.getYear());
//# sourceMappingURL=class.js.map