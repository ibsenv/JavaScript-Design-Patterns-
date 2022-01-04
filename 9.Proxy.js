
//protected object, not exposed outside
class ATM {
    setCashInAccount() {

    }
    withDrawCash() {

    }
    depositcash() {


    }
}

// exposed outside
class ATMProxy {
    depositcash() {
        return new ActualATM().depositcash();
    }
}




//main program
const atm = new ATMProxy();
atm.depositcash()