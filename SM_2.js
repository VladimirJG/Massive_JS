//Программа случайного выбора вариантов
/* var phrases = [
        'Звучит неплохо',
        'Да, это определенно надо сделать',
        'Не думаю, что это хорошая идея',
        'Может не сегодня?',
        'Компьютер говорит нет'
    ]
    // Мне выпить сегодня молочного коктейля?
console.log(phrases[Math.floor(Math.random() * 5)])
    //Пойти на практику?
console.log(phrases[Math.floor(Math.random() * 5)])
console.log(phrases.length)
phrases.unshift('Подумай сам')
console.log(phrases)
console.log(phrases.length)
phrases.push('Как хочешь', 'Сегодня тот самый день')
var lastCommand = phrases.pop()
phrases.unshift(lastCommand)
console.log(phrases.length)
console.log(phrases[Math.floor(Math.random() * 8)])
console.log(phrases) */


var things = ['мяч', 'велосипед', 'скейт', 'наряд', 'вейп', 'байк']
var colors = ['красный', 'синий', 'зеленый', 'белый', 'черный', 'фиолетовый']
var values = ['крутой', 'роскошный', 'стремный', 'простой', 'улетный']
var thing = things[Math.floor(Math.random() * 6)]
var color = colors[Math.floor(Math.random() * 6)]
var value = values[Math.floor(Math.random() * 5)]
var value_2 = values[Math.floor(Math.random() * 5)]
var phrase = 'Твой ' + color + ' ' + thing + ' такой ' + value + ' и ' + value_2 + '!!!'
console.log(phrase)