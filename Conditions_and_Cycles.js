/* var name = "Николай";
console.log("Привет, " + name);
if (name.length > 6) {
    console.log("Ну и длиннющее же у вас имя!");
} */

/* let cars = ['car_1', 'car_2', 'car_3']
let girls = ['olga', 'molga', 'polka']
if (cars[0].length < girls[2].length) {
    console.log(cars[1] + ' ведет ' + girls[2])
} else {
    console.log(cars.pop(), cars.concat(girls))
    console.log(cars)
} */
/* var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
if (lemonChicken) {
    console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
    console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
    console.log("Ладно, закажу свинину.");
} else {
    console.log("Что ж, остается рис с яйцом.");
} */


/* let cars = ['car_1', 'car_2', 'car_3']
let girls = ['olga', 'molga', 'polka']
let boys = ['den', 'men', 'pelmen']


if (cars[0].length > boys[2].length) {
    console.log(girls[0] + ' поедет' + ' жевать ' + boys[2] + ' на ' + cars[1])
} else if (boys[0].length != boys[1].length) {
    console.log(girls[2] + ' , ' + boys[0] + ' и ' + girls[1] + ' идут гулять')
} else {
    let m = cars.pop()
    let n = girls.shift(m)
    console.log(m, n)
} */

/* var cars = 0
while (cars < 8) {
    console.log('Куплено ' + cars + ' тачек!')
    cars++
}
console.log('Крутяяяяк') */


/* for (cars = 0; cars < 10; cars++) {
    console.log('Куплено ' + cars + ' тачек!')
}
console.log('Крутяяяяк') */

/* var hello = 3
for (var i = 0; i < hello; i++) {
    console.log('Hai!!!')
}
console.log("end") */


/* var animals = ['lion', 'bizon', 'girafa', 'enot', 'pavlin']
for (var i = 0; i < animals.length; i++) {
    console.log('animals in this zoopark: ' + animals[i] + '.')
} */


/* var cars = ['toyota', 'opel', 'mazda 7', 'mazda 6', 'hunday', 'lada']
for (var i = 0; i < cars.length; i++) {
    var year = [2022, 2018, 2020, 2021, 2016, 2007]
    for (var u = 0; u < year.length; u++)
        console.log('iam had ' + cars[i] + ' in ' + year[u] + ' year') */


/* for (var x = 2; x < 150000; x = x * 2) {
    console.log(x)
} */

/* for (var x = 3; x < 10000; x = x * 3)
    console.log(x) */


/* var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"]
let n = ' - прекрасное животное'
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i] + n)
} */

/* var cars = 0
while (cars < 8) {
    console.log('Куплено ' + cars + ' тачек!')
    cars++
}
console.log('Крутяяяяк') */

/* var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
var randomString = ""
while (randomString.length < 10) {
    var r = Math.floor(Math.random() * alphabet.length)
    var i = alphabet[r]
    console.log("Random String " + randomString)
    randomString += i
} */


var input = "javascript is awesome"
var output = ""
for (let i = 0; i < input.length; i++) {
    console.log(input[i])
}