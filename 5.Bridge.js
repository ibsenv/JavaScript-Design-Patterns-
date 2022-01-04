class TV {
    constructor(name) {
        this.deviceName = name;
        this.volumeLevel = 0;
    }
    remote_button1_pressed() {
        this.volumeLevel++;
        this.displayVolumeLevel();
    }
    remote_button2_pressed() {
        this.volumeLevel && this.volumeLevel--;
        this.displayVolumeLevel();
    }

    displayVolumeLevel() {
        console.log(`${this.deviceName}: volume level ${this.volumeLevel}`);
    }
}

class SamsungTV extends TV {
    constructor() {
        super('SAMSUNG');
    }
}

class LGTV extends TV {
    constructor() {
        super('LG');
    }
}

class Remote {
    constructor(device) {
        this.device = device;
    }

    button1_pressed() {
        this.device.remote_button1_pressed();
    }

    button2_pressed() {
        this.device.remote_button2_pressed();
    }
}

//main program
const mySamsungRemote = new Remote(new SamsungTV());
const myLGRemote = new Remote(new LGTV());

mySamsungRemote.button1_pressed();
mySamsungRemote.button1_pressed();
mySamsungRemote.button1_pressed();
mySamsungRemote.button1_pressed();
mySamsungRemote.button1_pressed();
mySamsungRemote.button1_pressed();
mySamsungRemote.button1_pressed();
mySamsungRemote.button2_pressed();
mySamsungRemote.button2_pressed();
mySamsungRemote.button2_pressed();

myLGRemote.button1_pressed();
myLGRemote.button1_pressed();
myLGRemote.button1_pressed();
myLGRemote.button1_pressed();
myLGRemote.button1_pressed();
myLGRemote.button1_pressed();
myLGRemote.button1_pressed();
myLGRemote.button2_pressed();
myLGRemote.button2_pressed();
myLGRemote.button2_pressed();
