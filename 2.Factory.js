
class Customer{
    constructor(name = '', location = '',ipaddress ='') {
        this.name = name;
        this.location = location;
        this.ipaddress = ipaddress;
    }
}

class PrimeCustomer extends Customer{
    constructor(name,location,ipaddress) {
        super(name, location, ipaddress);
        this.prime = true;
    }
}

function isPrime() {
    // SOME API
    return false;
}

//main program
let customer;
if (isPrime()) {
    customer = new PrimeCustomer('Ibsen');
} else {
    customer = new Customer('Ibsen');
}
console.log(customer)







/**
 * FACTORY PATTERN
 */

//FACTORY METHOD
// function makeCustomer(...params) {
//     let customer;
//     if (isPrime()) {
//         customer = new PrimeCustomer(...params);
//     } else {
//         customer = new Customer(...params);
//     }
//     return customer;
// }


// //main program
// const customer = makeCustomer('Donald');
// console.log(customer);












// class CustomerFactory {
//     static makeCustomer(...params) {
//         let customer;
//         if (isPrime()) {
//             customer = new PrimeCustomer(...params);
//         } else {
//             customer = new Customer(...params);
//         }
//         return customer;
//     }
// }

// // //main program
// const customer = CustomerFactory.makeCustomer('Ravi');
// console.log(customer);