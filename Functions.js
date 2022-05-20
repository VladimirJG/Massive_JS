/* let firstFunction = function() {
    console.log('Hi, world!')
}
console.log(firstFunction()) */


/* let sayHelloTo = function(name) {
    console.log("Hi " + name + '!')
}
console.log(sayHelloTo('pups')) */

/* let cars = function(howManyTime) {
    for (var i = 0; i < howManyTime; i++)
        console.log(i + ' mars')
}
console.log(cars(17)) */

/* let girls = function(howManyTime) {
    for (i = 0; i < howManyTime; i++)
        console.log('Olga ' + howManyTime + ' get up')
}
console.log(girls(5)) */

/* let people = function(howMuch, whou) {
    for (i = 0; i < howMuch; i++) {
        console.log(i + ' ' + whou)
    }
}
console.log(people(5, 'good')) */


/* 
let movies = function(how, norm) {
    for (i = 0; i < how; i++) {
        console.log(i + ' ' + norm)
    }
}
console.log(movies(8, 'godno'))
console.log(movies(3, '^-^')) */



/* let zadacha = function(number) {
    return number * 2
}
console.log(zadacha(3) * zadacha(5))
console.log(zadacha(zadacha(zadacha(3)))) */


/* var pickRandomCars = function(cars) {
    return cars[Math.floor(Math.random() * cars.lenght)];
};
var randomCars = ["Toyota", "Opel", "Mazda", "Kia"];
console.log(pickRandomCars(randomCars)); */

/* var pickRandomCars = function(cars) {
    return cars[Math.floor(Math.random() * cars.length)]
}
var randomCars = ["Toyota", "Opel", "Mazda", "Kia"]
console.log(pickRandomCars(randomCars)) */

var pR_Cars = function(tryz_lya_lya) {
    return tryz_lya_lya[Math.floor(Math.random() * tryz_lya_lya.length)]
}
var randomCars = ["Toyota", "Opel", "Mazda", "Kia"]
console.log(pR_Cars(randomCars))






let pickRandomBalls = function(ball) {
    return ball[Math.floor(Math.random() * ball.length)]
}
let randomBall = ['red', 'blue', 'yellow', 'white']
console.log(pickRandomBalls(randomBall))