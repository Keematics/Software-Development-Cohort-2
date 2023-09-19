let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holders: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}

// console.log('I want')
// console.log("to eat")
// setTimeout(() => {
//     console.log("ice-cream")
// }, 2000);
// console.log('with')
// console.log('a spoon')


//---------PROCESSES-------//
//1. order from the customer
//2. fetch ingredients
//3. start production
//4. serve

//------TIME--------//
//place order - 2
//cut the fruit - 2
//add water and ice - 1
//start the machine - 1
//select container - 2
//select toppings - 3
//serve the ice-cream - 2

// setTimeout(function () {
//     console.log('order placed')
//     setTimeout(function () {
//         console.log('cut the fruit')
//         setTimeout(function () {
//             console.log('add water and ice')
//             setTimeout(function () {
//                 console.log('start machine')
//                 setTimeout(function () {
//                     console.log('select container')
//                     setTimeout(function () {
//                         console.log('select toppings')
//                         setTimeout(function () {
//                             console.log('ice-cream served')
//                         }, 2000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 1000)
//     }, 2000)
// }, 2000)

//select fruit
//place order
//start production
//water and ice added
//start the machine
//select holder - ice-cream placed on cone
//topping was selected
//serve ice-cream

let is_shop_open = false;

function order(time, work) {
    return new Promise(function (resolve, reject) {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time);
        } else {
            reject('shop is closed');
        }
    })
}
// order(2000, function () {
//     console.log("order placed")
// })
//     .then(function (value) {
//         return order(2000, function () {
//             console.log(stocks.Fruits[0], 'is chosen, please cut the fruit')
//         })
//     })
//     .then(function (value) {
//         return order(1000, function () {
//             // console.log('add water and ice')
//             console.log(`add ${stocks.liquid[0]} and ${stocks.liquid[1]}`)
//         })
//     })
//     .then(function (value) {
//         return order(1000, function () {
//             console.log('start machine')
//         })
//     })
//     .then(function (value) {
//         return order(1000, function () {
//             console.log('cup was selected')
//         })
//     })
//     .then(function (value) {
//         return order(1000, function () {
//             console.log('I love ' + stocks.toppings[1])
//         })
//     })
//     .then(function (value) {
//         return order(1000, function () {
//             console.log('serve ice-cream')
//         })
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('day ended, going home')
//     })


function tim_e(time, x) {
    return new Promise(function (resolve, reject) {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(console.log(x))
            }, time);
        } else {
            reject('shop is closed');
        }
    })
}

async function kitchen() {
    try {
        console.log('order placed')
        // console.log('b')
        await tim_e(4000, "strawberry was selected")
        console.log('d')
        await tim_e(2000, "peanuts was selected")
        console.log('f')
    } catch (error) {
        console.log(error)
    } finally{
        console.log('come home')
    }
}
kitchen()