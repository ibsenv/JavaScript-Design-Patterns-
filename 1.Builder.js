
class Customer{
    constructor(name = '', location = '',ipaddress ='') {
        this.name = name;
        this.location = location;
        this.ipaddress = ipaddress;
    }
}

function getCurrentLocation() {
    //some API
    return 'Kochi';
}

function getIPAddress() {
    //some API
    return '192.168.23.2';
}


//main program
const customer = new Customer('Ibsen');
customer.location = getCurrentLocation();
customer.ipaddress = getIPAddress();
console.log(customer)


















// class Customer {
//     constructor(name = '', location = '', ipaddress = '') {
//         this.name = name;
//         this.location = location;
//         this.ipaddress = ipaddress;
//     }
// }
// class CustomerBuilder {
//     constructor(name) {
//         this.customer = new Customer(name);
//         this.customer.location = this._getCurrentLocation();
//         this.customer.ipaddress = this._getIPAddress();
//     }

//     _getCurrentLocation() {
//         return 'Tvm';
//     }

//     _getIPAddress() {
//         //some API
//         return '192.168.23.2';
//     }

//     build() {
//         return this.customer;
//     }

// }

// // main program
// const customer = new CustomerBuilder('Ibsen').build();
// console.log(customer);