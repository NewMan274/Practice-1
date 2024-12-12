class Car {
    #brand;
    #model;
    speed;
    isTrunkOpen = true;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = carDetails.speed;
        this.isTrunkOpen = carDetails.isTrunkOpen;
    }

    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed'
        console.log(`${this.#brand} ${this.#model} Speed: ${this.speed} km/h Trunk: ${trunkStatus}`)
    }

    go() {
        if(this.speed <= 195 && this.isTrunkOpen === false) {
            this.speed += 5
        } else {
            return this.speed;
        }
    };
    break() {
        if(this.speed >= 5){
            this.speed -= 5
        } else {
            return this.speed;
        }
    };

    openTrunk() {
        if(this.speed === 0){
            this.isTrunkOpen = true;
        } else {
            this.isTrunkOpen = false;
        }  
    };

    closeTrunk() {
        this.isTrunkOpen = false;
    };
};

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla',
    speed: 2,
    isTrunkOpen: false
});

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3',
    speed: 0,
    isTrunkOpen: false
});

car1.break()
car2.break()

car1.openTrunk();
car2.openTrunk();


car1.displayInfo();
car2.displayInfo();

console.log(car1);
console.log(car2);

class RaceCar extends Car {
    acceleration;

    constructor (carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        if(this.speed <= 295) {
            this.speed += this.acceleration
        } else {
            return this.speed;
        }
    }

    openTrunk() {
        this.isTrunkOpen = false;
    };

    closeTrunk() {
        this.isTrunkOpen = false;
    };
}

const raceCar1 = new RaceCar ({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20,
    speed: 100,
    isTrunkOpen: false
})

raceCar1.break();
raceCar1.openTrunk();
raceCar1.displayInfo();

console.log(raceCar1);