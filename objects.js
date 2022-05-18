/* var cat = {
    'legs': 3,
    'name': 'Гармония',
    'color': 'Черепаховый'
}
console.log(cat)
var cat_1 = { legs: 3, name: 'Гармония', color: 'Чурупаховый' }
console.log(cat_1)

console.log(cat_1['name'])

console.log(cat.color) */


/* var dog = {
    name: 'Оладушек',
    age: 6,
    color: 'белый',
    bark: 'Лай!'
}
var cat = { name: 'Мурзик', age: 8, color: 'кукурузный' }
console.log(Object.keys(dog))

console.log(Object.keys(cat)[1]) */


/* var cars = {}
cars['toyota'] = 6
cars['mazda'] = 2
cars['opel'] = 'blue'
console.log(cars)


var cat = {}
cat.legs = 3
cat.name = 'pushok'
cat.color = 'red'
console.log(cat) */


/* var dinosaurus = [
    { name: 'Tiranus pups', period: 'mezozoi', color: 'blue-black' },
    { name: 'Stegozavr', period: 'Urski', legs: 5 },
    { name: 'Plateosavr', period: 'Triase' }
]
console.log(dinosaurus[0]['color'])
console.log(dinosaurus[0])
console.log(dinosaurus[2].period) */


var anna = { name: 'Anna', age: 26, luckyNumbers: [2, 4, 6, 24] }
var dave = { name: 'Dave', age: 41, luckyNumbers: [5, 9, 17, 58] }
var kate = { name: 'Kate', age: 36, luckyNumbers: [186, 8, 93, 45, 75] }

var friends = [anna, dave, kate]

console.log(friends[1])
console.log(friends[2].name)
console.log(friends[2].luckyNumbers[3])