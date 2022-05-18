/* var name = "Николай";
console.log("Привет, " + name);
if (name.length > 6) {
    console.log("Ну и длиннющее же у вас имя!");
} */

let cars = ['car_1', 'car_2', 'car_3']
let girls = ['olga', 'molga', 'polka']
if (cars[0].length < girls[2].length) {
    console.log(cars[1] + ' ведет ' + girls[2])
} else {
    console.log(cars.pop(), cars.concat(girls))
    console.log(cars)
}