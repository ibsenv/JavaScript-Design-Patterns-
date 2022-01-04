// addition
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}


function operationHandler(operation, params) {
    let result;

    switch (operation) {
        case 'add': result = add(...params); break;
        case 'sub': result = sub(...params); break;
    }

    console.log(result);
}

//main program
operationHandler('add', [1, 2]);





















// class Chain {
//     setNextChain = (nextChain) => {
//         this.nextChain = nextChain;
//     };
//     calculate() { }
// }


// class Addition extends Chain {
//     calculate(operation, params) {
//         if (operation === 'add') {
//             console.log(params[0] + params[1]);
//         } else {
//             this.nextChain && this.nextChain.calculate(operation, params);
//         }
//     }
// }

// class Subtraction extends Chain {
//     calculate(operation, params) {
//         if (operation === 'sub') {
//             console.log(params[0] - params[1]);
//         } else {
//             this.nextChain && this.nextChain.calculate(operation, params);
//         }
//     }
// }

// class Multipication extends Chain {
//     calculate(operation, params) {
//         if (operation === 'mult') {
//             console.log(params[0] * params[1]);
//         } else {
//             this.nextChain && this.nextChain.calculate(operation, params);
//         }
//     }
// }

// // main program

// //create nodes
// const chain1 = new Addition();
// const chain2 = new Subtraction();
// const chain3 = new Multipication();

// //link nodes
// chain1.setNextChain(chain2);
// chain2.setNextChain(chain3);

// chain1.calculate('mult', [6, 2]);
