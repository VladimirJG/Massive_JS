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


/* var anna = { name: 'Anna', age: 26, luckyNumbers: [2, 4, 6, 24] }
var dave = { name: 'Dave', age: 41, luckyNumbers: [5, 9, 17, 58] }
var kate = { name: 'Kate', age: 36, luckyNumbers: [186, 8, 93, 45, 75] }

var friends = [anna, dave, kate]

console.log(friends[1])
console.log(friends[2].name)
console.log(friends[2].luckyNumbers[3])
console.log(friends) */

/* var owedMoney = {}
owedMoney['Keny'] = 5
owedMoney['lexa'] = 17
owedMoney['Sanya'] = 53
console.log(owedMoney)
console.log(owedMoney.lexa)

owedMoney.Keny += 6
owedMoney.Sanya -= 24
console.log(owedMoney) */

var movies = {
    'В поисках Немо': {
        releaseDate: 2003,
        duratoin: 100,
        actors: ['Albert Brooks', 'Elenn Dedjeners',
            'Alexander Gould'
        ],
        format: 'DVD'
    },
    'Звездные войны: Эпизод VI — Возвращение джедая': {
        releaseDate: 1983,
        duration: 134,
        actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
        format: "DVD"
    },
    'Гарри Поттер и Кубок огня': {
        releaseDate: 2005,
        duration: 157,
        actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
        format: "Blu-ray"
    }
}
console.log(movies["В поисках Немо"])
console.log(movies["В поисках Немо"].actors[2])

var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
    format: "Blu-ray"
};
movies["Тачки"] = cars

console.log(movies)
console.log(Object.keys(movies))