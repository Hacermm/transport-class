
class Transport {
  name;
  model;
  wheel;
  speed;
 

  constructor(name, model,wheel, speed,) {
    this.name = name;
    this.model = model;
    this.wheel = wheel;
    this.speed = speed;
    
  }

  move() {
      console.log(`${this.name} is moving`);
  }
}

class Car extends Transport {
  constructor(name,model,wheel,speed){
    super(name,model,wheel,speed)
}
  drive() {
      console.log(`${this.name} is driving`);
  }
}

class Plane extends Transport {
  constructor(name,model,wheel,speed){
    super(name,model,wheel,speed)
}
  fly() {
      console.log(`${this.name} is flying`);
  }
}

class Motorcycle extends Transport {
  constructor(name,model,wheel,speed){
    super(name,model,wheel,speed)
}
  ride() {
      console.log(`${this.name} is being ridden`);
  }
}

class Bus extends Transport {
  constructor(name,model,wheel,speed){
    super(name,model,wheel,speed)
}
  transportPassengers() {
      console.log(`${this.name} is transporting passengers`);
  }
}

let car = new Car("Car", "BMW", 4, 260);
car.drive();
car.move();

let plane = new Plane("Plane", "Airbus", 152, 920);
plane.fly();


let motorcycle = new Motorcycle("Motorcycle", "Kawasaki", 2, 200);
motorcycle.ride();


let bus = new Bus("Bus", "Baku-bus", 6, 160);
bus.transportPassengers();
bus.move();
