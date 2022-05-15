/* var myTopThreeCars = ["Mazda", "Toyota", "Opel_TD"]
console.log(myTopThreeCars)

var cars = [
    "Mazda",
    "Toyota",
    "Opel",
    "Lexus",
    "Suzuky",
    "BMW",
    "Kia",
    "Henday",
    "Bently"
]
console.log(cars) */

/* var cars = [
    "Mazda",
    "Toyota",
    "Opel",
    "Lexus",
    "Suzuky",
    "BMW",
    "Kia",
    "Henday",
    "Bently"
]
console.log(cars[2], cars[5])
cars[2] = "Mersedes"
console.log(cars) */

/* var cars = []
cars[0] = 'Mazda'
cars[1] = 'Mersedes'
cars[2] = 'Suzuky'
cars[3] = 'Kia'
cars[4] = 'Bently'
cars[5] = 'Toyota'
cars[6] = 'Lexus'
cars[7] = 'BMW'
cars[8] = 'Henday'
cars[55] = 'Horse'

console.log(cars) */


/* var carsAndNumbers = [7, "cars", ['toyota', 'mers', 'horse', 2598.5], 13]
console.log(carsAndNumbers[2][3], carsAndNumbers[3]) */

/* var maniacs = ['Vanko', 'Danko', 'Sranko']
console.log(maniacs.length)
console.log(maniacs[maniacs.length - 1]) */

/* var animals = []
animals.push('cat')
animals.push('dog')
animals.push('horse')
console.log(animals)

console.log(animals.length)

console.log(animals[animals.length - 1])

animals.unshift('popugai')
console.log(animals)
console.log(animals.length)

var lastAnimal = animals.pop()
console.log(lastAnimal)
console.log(animals.length)
animals.unshift(lastAnimal)
console.log(animals.length)
animals.push("slon")
console.log(animals[2])
console.log(animals)
console.log(lastAnimal)
console.log(animals.length)
console.log(animals) */


/* var girl = ['lisa', 'sveta']
girl.unshift('natusya')
console.log(girl)
var lastGirl = girl.pop()
console.log(lastGirl)
girl.unshift(lastGirl)
console.log(girl)

girl.push('tana', 'ksenia')
console.log(girl)
var lastGirls_1 = girl.pop()
console.log(lastGirls_1)
girl.unshift(lastGirls_1)
console.log(girl)
girl.pop()
console.log(girl) */

/* var boys = ['ilia', 'vova', 'lexa', 'tolik']
var firstBoy = boys.shift()
console.log(firstBoy)
boys.push(firstBoy)
console.log(boys)
console.log(boys.length)
boys.push('tema', 'roma')
boys.unshift('charly', 'marli')
console.log(boys) */


/* var colors = ['red', 'white', 'blue', 'yellow']
var balls = ['small', 'big', 'mid', 'biggest']
console.log(colors.concat(balls))

console.log(colors) */

/* var colors = ['red', 'white', 'blue', 'yellow']
var balls = ['small', 'big', 'mid', 'biggest']
var girls = ['lisa', 'sveta']
console.log(colors.concat(balls, girls))

girls.push('nina')
lastBall = balls.pop()
colors.unshift(lastBall)
console.log(colors.concat(balls, girls))
var slovo = colors[1]
console.log(slovo.slice(1, 5)) */


/* var colors = ['red', 'blue', 'green', 'yellow']
console.log(colors.indexOf('green'))
console.log(colors.indexOf('green'), colors.indexOf('red'))
console.log(colors[2], colors[3])
console.log(colors[8])
console.log(colors.indexOf('white'))
console.log(colors.join())
colors.push('vasya', 'petya', 'yieti', 'deti')
console.log(colors.join())
var c_1 = colors.pop()
var c_2 = colors.pop()
var c_3 = colors.pop()
colors.unshift(c_3)
colors.unshift(c_2)
colors.unshift(c_1)
colors.unshift(c_3)
console.log(colors)
var stSL = colors.join()
console.log(stSL.slice(7, 15)) */


/* var fishes = ['vobla', 'shuka', 'okun', 'vidra']
console.log(fishes.join(' est '))
var age = [11, 56, 86]
var vM = fishes[0].concat(age[2])
console.log(vM)
console.log(age.join(' ')) */


var landmarks = []
landmarks.push('мой дом')
landmarks.push('дорога к дому')
landmarks.push('фонарь')
landmarks.push('магазин')
landmarks.push('мост')
landmarks.push('церковь')
landmarks.push('детская площадка')
landmarks.push('шашлычная')
landmarks.push('дом ее')
console.log(landmarks)
console.log(landmarks.length)
var tochka = [landmarks.pop(),
    landmarks.pop(),
    landmarks.pop(),
    landmarks.pop(),
    landmarks.pop(),
    landmarks.pop(),
    landmarks.pop(),
    landmarks.pop(),
    landmarks.pop(),
]
console.log(tochka)
console.log(tochka.join(' -> '))