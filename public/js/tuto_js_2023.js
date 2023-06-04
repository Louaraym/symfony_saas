let notes = [15, 17, 18, 20, 19];

/*for (let i in notes) {
    console.log(`${i} => ${notes[i]}`);
}
console.log('-----------------------------------')
for (let note of notes) {
    console.log(`${note}`)
}*/

//console.log(Math.floor(Math.random()*11))

const isOdd = (n) => n % 2 === 0;

//console.log(isOdd(10));

const isEven = function (n) {
    return n % 2 !== 0
}

//console.log(isEven(5));
function test() {
    console.log(this)
}

const person = {
    firstName: 'Raymond',
    lastName: 'LOUA',
    presentation: function () {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName} from Guinea. Nice to meet you!`)
    }
}

//person.presentation();