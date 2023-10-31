/* // Ejercicio 1
const queue =  ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];

const divide = (data) => {
    const queueEvens = [];
    const queueOdds = [];
    for (let i = 0; i < data.length; i++) {
        if(i % 2 === 0) {
            queueEvens.push(data[i]);
        }
        else {
            queueOdds.push(data[i]);
        }
    }
    return {
        queue1: queueEvens,
        queue2: queueOdds
    }
}

let result = divide(queue);
console.log(result); */

// Ejercicio 2
const queue2 = [ 
    { user:'User1', ticket:false },
    { user:'User2', ticket:false },
    { user:'User3', ticket:false },
    { user:'User4', ticket:false },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:false },
    { user:'User8', ticket:false },
    { user:'User9', ticket:false },
    { user:'User10', ticket:false },
    { user:'User11', ticket:false },
    { user:'User12', ticket:false },
    { user:'User13', ticket:false },
    { user:'User14', ticket:false },
    { user:'User15', ticket:false },
    { user:'User16', ticket:false },
    { user:'User17', ticket:false },
    { user:'User18', ticket:false },
    { user:'User19', ticket:false },
    { user:'User20', ticket:false },
    { user:'User21', ticket:false },
    { user:'User22', ticket:false },
    { user:'User23', ticket:false },
    { user:'User24', ticket:false },
    { user:'User25', ticket:false },
];

const removeCrashers = (data) => {
    const dataCopy = [...data];
    const crashers = [];
    for (let i = dataCopy.length - 1; i >= 0; i--) {
        const person = dataCopy.shift();
        if (person.ticket === true) {
            dataCopy.push(person);
        } else {
            crashers.push(person);
        }
    }
    return {
        initialQueue: data,
        removedUsers: crashers,
        finalQueue: dataCopy
    }
}

let result = removeCrashers(queue2);
console.log(result);

