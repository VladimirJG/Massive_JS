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


let cars = ['car_1', 'car_2', 'car_3']
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
}