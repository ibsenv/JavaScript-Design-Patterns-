
class ATMState {
    constructor(atm) {
        this.atm = atm;
    }
    insertCard() { }
    insertPin() { }
    withdraw() { }
    ejectCard() { }
}

class NoCardState extends ATMState {
    insertCard() {
        console.log('Card Processed');
        this.atm.setATMState(this.atm.getHasCardState());
    }
    insertPin() {
        console.log('No card available');
    }
    withdraw() {
        console.log('No card available');
    }
    ejectCard() {
        console.log('No card available');
    }
}

class HasCardState extends ATMState {
    insertCard() {
        console.log('card is already inserted');
    }
    insertPin() {
        console.log('PIN validated');
        this.atm.setATMState(this.atm.getHasCorrectPinState());
    }
    withdraw() {
        console.log('please enter PIN');
    }
    ejectCard() {
        console.log('card ejected');
        this.atm.setATMState(this.atm.getNoCardState());
    }
}

class HasCorrectPinState extends ATMState {
    insertCard() {
        console.log('card is already inserted');
    }
    insertPin() {
        console.log('PIN is alreay entered');
    }
    withdraw() {
        console.log('withdrawal successful');
    }
    ejectCard() {
        console.log('card ejected');
        this.atm.setATMState(this.atm.getNoCardState());
    }
}
class OutOfMoneyState extends ATMState {
    insertCard() {
        console.log('card is out of Money');
    }
    insertPin() {
        console.log('card is out of Money');
    }
    withdraw() {
        console.log('card is out of Money');
    }
    ejectCard() {
        console.log('card is out of Money');
    }
}


class ATM {
    constructor() {
        this.hasCard = new HasCardState(this);
        this.noCard = new NoCardState(this);
        this.hasCorrectPin = new HasCorrectPinState(this);
        this.outOfMoney = new OutOfMoneyState(this);

        //initializing atm state
        this.atmState = this.noCard;
    }

    setATMState(state) {
        this.atmState = state;
    }

    insertCard() {
        this.atmState.insertCard();
    }

    insertPin() {
        this.atmState.insertPin();
    }

    ejectCard() {
        this.atmState.ejectCard();
    }

    withdraw() {
        this.atmState.withdraw();
    }

    getHasCardState() {
        return this.hasCard;
    }

    getNoCardState() {
        return this.noCard;
    }

    getHasCorrectPinState() {
        return this.hasCorrectPin;
    }

    getOutOfMoneyState() {
        return this.outOfMoney;
    }
}


//main program
const atm = new ATM();
atm.insertCard();
atm.withdraw();

atm.insertPin();
atm.withdraw();

atm.ejectCard();

atm.withdraw();
