class Vehicle {
  constructor(
    protected color: string, 
    protected make: string, 
    protected model: string, 
    protected year: number
  ) {
  }

  public getMaxSpeed() {
    return 320;
  }

  public getColor(): string {
    return this.color;
  }

  public getMake(): string {
    return this.make;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }
}

class Car extends Vehicle {
  constructor(
    protected color: string, 
    protected make: string, 
    protected model: string, 
    protected year: number
  ) {
    super(color, make, model, year)
  }

  public override getMaxSpeed(): number {
    return super.getMaxSpeed() / 2
  }
}

const car = new Car("Black", "Eagle", "Talon TSi", 1993);

console.log(car.getMake());
console.log(car.getModel());
console.log(car.getYear());
console.log(car.getMaxSpeed());
