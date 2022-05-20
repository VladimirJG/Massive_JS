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

/* var pR_Cars = function(tryz_lya_lya) {
    return tryz_lya_lya[Math.floor(Math.random() * tryz_lya_lya.length)]
}
var randomCars = ["Toyota", "Opel", "Mazda", "Kia"]
console.log(pR_Cars(randomCars))
 */

/// здесь был глюк(пока не скопировал код из книги - не работало)

/* let pickRandomBalls = function(ball) {
    return ball[Math.floor(Math.random() * ball.length)]
}
let randomBall = ['Red', 'Blue', 'Yellow', 'White']
console.log(pickRandomBalls(randomBall))
console.log(pickRandomBalls(['Red', 'Blue', 'Yellow', 'White'])) */



/* let randomBodyParts = ['глаз', 'нос', 'рот', 'ухо']
let randomAdjectives = ['дурацкая', 'унылая', 'вонючая']
let randomWords = ['муха', 'ведьма', 'дубина', 'выдра', 'крыса'] */

/* let rB_part = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
let rA = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
let rW = randomWords[Math.floor(Math.random() * randomWords.length)]

let result = 'у тебя ' + rB_part + ' словно ' + rA + ' ' + rW + '!!!'
console.log(result) */

/* let pickRanmdoWord = function(randomWords) {
    return randomWords[Math.floor(Math.random() * randomWords.length)]
}

let randomString = 'у тебя ' + pickRanmdoWord(randomBodyParts) + ' словно ' + pickRanmdoWord(randomAdjectives) + ' ' + pickRanmdoWord(randomWords) + '!!!'
    console.log(randomString)
 */

//вариант 3

/* let randomDraznilka = function() {
    let randomBodyParts = ['глаз', 'нос', 'рот', 'ухо'];
    let randomAdjectives = ['дурацкая', 'унылая', 'вонючая'];
    let randomWords = ['муха', 'ведьма', 'дубина', 'выдра', 'крыса'];
    let pickRanmdoWord = function(randomWords) {
        return randomWords[Math.floor(Math.random() * randomWords.length)]
    }
    let randomString = 'у тебя ' + pickRanmdoWord(randomBodyParts) + ' словно ' + pickRanmdoWord(randomAdjectives) + ' ' + pickRanmdoWord(randomWords) + '!!!'

    return randomString
}


console.log(randomDraznilka) */

//3 не понял пока(еще подумать)



var f_1 = function(n_1, n_2) {
    return n_1 + n_2

}
console.log(f_1(777, 9824))
var f_2 = function(m_1, m_2) {
    return m_1 * m_2

}
console.log(f_2(f_1(777, 9824), 3625))