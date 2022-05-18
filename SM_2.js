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


/* var things = ['мяч', 'велосипед', 'скейт', 'наряд', 'вейп', 'байк']
var colors = ['красный', 'синий', 'зеленый', 'белый', 'черный', 'фиолетовый']
var values = ['крутой', 'роскошный', 'стремный', 'простой', 'улетный']
var thing = things[Math.floor(Math.random() * 6)]
var color = colors[Math.floor(Math.random() * 6)]
var value = values[Math.floor(Math.random() * values.length)]
var value_2 = values[Math.floor(Math.random() * values.length)]
var phrase = 'Твой ' + color + ' ' + thing + ' такой ' + value + ' и ' + value_2 + '!!!'
console.log(phrase)
    //В этой программе всегда нужно умножать Math.random() на длину
    //массива; использование values.length как множителя означает,
    //что нам не понадобится менять этот код, если длина массива изменится.


var phrase_2 = ['Твой', color, thing, 'такой', value, 'и', value_2 + '!!!'].join(' ')
console.log(phrase_2)
 */


/* var transports = ['авто', 'байк', 'велик', 'скейт', 'скутер', 'планер', 'квадрик']
var values = ['крутой', 'мощный', 'новый', 'дерзкий', 'красивый']
var transports_2 = ['авто', 'байк', 'велик', 'скейт', 'скутер', 'планер', 'квадрик']
var names = ['Сереги', 'Петро', 'Колька', 'Сани', 'Феклы', 'Тимура']
var transport = transports[Math.floor(Math.random() * transports.length)]
var value = values[Math.floor(Math.random() * values.length)]
var transports_2 = transports_2[Math.floor(Math.random() * transports_2.length)]
var name_1 = names[Math.floor(Math.random() * names.length)]
var phrase = ['У тебя', transport, 'еще более', value + ',', 'чем',
    transports_2, 'у', name_1
].join(' ')
console.log(phrase)
var phrase_2 = 'У тебя ' + transport + ' еще более ' + value + ', ' + 'чем ' +
    transports_2 + ' у ' + name_1
console.log(phrase_2) */


/* var massive = [3, 2, 1]
var string = [3, 'больше', 'чем', 2, 'больше, чем', 1].join(' ')
console.log(string) */