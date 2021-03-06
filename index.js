let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
    constructor(name){
        this.name = name;
        this.id = ++driverId;
        store.drivers.push(this);
    }
    trips() {
        return store.trips.filter(trip => {
         return trip.driverId === this.id;
        });
    }
    passengers() {
        return this.trips().map(trip => {
          return trip.passenger();
        });
    }
  //trips() sets up the connection for the through relationship between driver and passenger by filtering the driver for a particular trip,
  //then passengers set(?) the trips() function associated with the specific driver object by mapping out the connection between each passenger
  //and trip that has already been made
}

class Passenger {
    constructor(name){
        this.name = name;
        this.id = ++passengerId;
        store.passengers.push(this);
    }
    trips() {
        return store.trips.filter(trip => {
          return trip.passengerId === this.id;
          });
            // filter not map here because finding one trip that connects both passengers and drivers
    }
    drivers() {
        return this.trips().map(trip => {
         return trip.driver();
         });
            // map not filter because passenger is going through trips to get associated driver
            // Why is driver a function here?
    }
}

class Trip {
    constructor(driver, passenger){
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = ++tripId;
        store.trips.push(this);
    }
    driver() {
    //   Note it's driver singular, not drivers here
        return store.drivers.find(driver => {
         return driver.id === this.driverId;
        });
    }
    passenger() {
    //   Note it's passenger singular, not passengers here (could I use an array of passengers?)

        return store.passengers.find(passenger => {
         return passenger.id === this.passengerId;
        });
    }
}


// let store = { drivers: [], passengers: [], trips: [] };

// let driverId = 0;
// let passengerId = 0;
// let tripId = 0;

// class Driver {
//   constructor(name) {
//     this.name = name;
//     this.id = driverId++;
//     store.drivers.push(this);
//   }
//   trips() {
//     return store.trips.filter(trip => {
//       return trip.driverId == this.id;
//     });
//   }
//   passengers() {
//     return this.trips().map(trip => {
//       return trip.passenger();
//     });
//   }
// }

// class Passenger {
//   constructor(name) {
//     this.name = name;
//     this.id = passengerId++;
//     store.passengers.push(this);
//   }

//   trips() {
//     return store.trips.filter(trip => {
//       return trip.passengerId == this.id;
//     });
//   }
//   drivers() {
//     return this.trips().map(trip => {
//       return trip.driver();
//     });
//   }
// }

// class Trip {
//   constructor(driver, passenger) {
//     this.driverId = driver.id;
//     this.passengerId = passenger.id;
//     this.id = tripId++;
//     store.trips.push(this);
//   }
//   driver() {
//     return store.drivers.find(driver => {
//       return driver.id === this.driverId;
//     });
//   }
//   passenger() {
//     return store.passengers.find(passenger => {
//       return passenger.id === this.passengerId;
//     });
//   }
// }

