class Car {
    start() {
        console.log('car started')
    }
    drive() {
        console.log('car is moving')
    }
    stop() {
        console.log('car stopped')
    }
}

class Benz extends Car { }

// main program
const mycar = new Benz();
mycar.start();
mycar.drive();
mycar.stop();






















// class Tesla {
//     start() {
//         console.log('Tesla Started');
//     }
//     selfDrive(state) {
//         console.log('Tesla ' + state);
//     }
// }

// const myNewcar = new Tesla();
// myNewcar.start();
// myNewcar.drive();
// myNewcar.stop();










// class TeslaAdapter extends Car {
//     constructor() {
//         super();
//         this.tesla = new Tesla();
//     }

//     start() {
//         this.tesla.start();
//     }
//     drive() {
//         this.tesla.selfDrive('is moving');
//     }
//     stop() {
//         this.tesla.selfDrive('stop');
//     }
// }


// main program;
// const mycar = new Benz();
// mycar.start();
// mycar.drive();
// mycar.stop();

// const myNewcar = new TeslaAdapter();
// myNewcar.start();
// myNewcar.drive();
// myNewcar.stop();
