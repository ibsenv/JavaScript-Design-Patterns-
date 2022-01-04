class Service {
    constructor() {
        console.log('startingup  new service');
    }
}

// main program
const service = new Service();
const service2 = new Service();























//Approach 1.

// const serviceInstances = {}

// class Service{
//     constructor() {
//         this.id = 'serviceA';
//         if (serviceInstances[this.id]) {
//             return serviceInstances[this.id];
//         } else {
//             serviceInstances[this.id] = this;
//             console.log('approach 1 : startingup  new service');
//         }
//     }
// }

// //main program
// const service = new Service();
// const service2 = new Service();


















// //Approach 2
// class Service{
//     constructor() {
//         if (Service.instance) {
//             return Service.instance;
//         } else {
//             Service.instance = this;
//             console.log('approach 2 : startingup new service');
//         }
//     }
// }
// // //main program
// const service = new Service();
// const service2 = new Service();

















//Approach 3
// class Service{
//     constructor() {
//         if (this.constructor.instance) {
//             return this.constructor.instance;
//         } else {
//             this.constructor.instance = this;
//             console.log('approach 3 : startingup new service');
//         }
//     }
// }
// // //main program
// const service = new Service();
// const service2 = new Service();
