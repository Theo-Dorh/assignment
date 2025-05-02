class Driver {
    constructor(driverName,license, insurance, car, rating) {
        this.driverName = driverName;
        this.license = license;
        this.insurance = insurance;
        this.car = car;
    }

    acceptTrip() {
        console.log("Accept this ride")
    }

    endTrip() {
        //steps
    }
}

class Rider {
    name;
    phoneNumber;
    currentLocation;
    destination;

    requestRide() {
        //steps to request ride
    }

    rateDriver() {
        //steps
    }

    rateVehicle() {
        //steps
    }
}

class Car {
    constructor(make, model, registrationYear, plateNumber) {
        this.make = make;
        this.model = model;
        this.registrationYear > 2020;
        this.plateNumber = plateNumber;
    }

    startEngine() {
        //steps to start engine
    }

    stopEngine() {
        //steps
    }
}

class Ride {
    driver;
    rider;
    car;

    startRide() {
        //steps
    }

    completeRide() {
        //steps
    }

    calculateFare() {
        //steps
    }
}