//abstract
class Observer {
    update() { }
}


class Subject {
    constructor() {
        this.observers = [];

        setInterval(() => {
            this.notify();
        }, 1000);
    }

    subscribe(observer) {
        this.observers.push(observer);
    }


    notify() {
        this.observers.forEach(obs => {
            obs.update();
        });
    }
}


class Observer1 extends Observer {
    update() {
        console.log('observer1 is notified');
    }
}

class Observer2 extends Observer {
    update() {
        console.log('observer2 is notified');
    }
}


// main program
const subject = new Subject();
subject.subscribe(new Observer1());


setTimeout(() => {
    subject.subscribe(new Observer2());
}, 5000);
