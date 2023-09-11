const person = {
        first_name: "iKeem",
        last_name: "Seun",
        age: 10,
        eyeColour: "blue",
        isFat: false,
        greet: function () {
                console.log("Hello")
        },
        full_name: function () {
                console.log(this.first_name + " " + this.last_name);
        }
}
// console.log(person["last_name"]);
// console.log(person.first_name);
// person.greet();
// person.full_name();


let x = 3
console.log(Math.pow(x, 3))
// console.log()
// console.log(myAttributes[3]);

function calculateLove() {
        let place = prompt("Where do you like most");
        let randNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`The love for ${place} is ${randNumber}`)
}

function buyChocolate() {
        let trainees = ['Alfa ahmed', 'ayomide snr', 'corper', 'ayomide jnr', 'Abdullah', 'Zaynab', 'Queezy', 'Abdulazeez', 'Maryam', 'Mubarak']

        let randomTrainee = Ma;
        let buyer = trainees[randomTrainee];
        console.log(`Our honourable chocolate buyer is ${buyer}`)
}
let buyers = {
        ayomideSnr: 4,
        abdullah: 2,
        alfaAhmed: 5,
        maryam: 1,
        mubarak: 1,
        abdulazeez: 1,
        zaynab: 2,
        queezy: 1

}

function pickChocolate(){
        for(let i = 100; i >= 0; i--) {
                if(i == 0) {
                        console.log("There is no more chocolate")
                } else if(i == 1) {
                        console.log(`${i} chocolate is left`)
                } else {
                        console.log(`${i} chocolates are left`);
                        console.log("Pick one and pass it")
                }
        }
}

function calculateFibonacci(number) {
        let output = []
        if(number == 0){
                output = [0]
        } else if(number == 1) {
                output = [0, 1]
        } else {
                output = [0, 1]
                for(let i = 2; i < number; i++) {
                        let lastItem = output[output.length - 1];
                        let secToTheL = output[output.length - 2];
                        output.push(lastItem + secToTheL)
                }
        }
        return output;
}

// let answer = calculateFibonacci(10)
// console.log(answer);
