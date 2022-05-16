//Программа случайного выбора вариантов
var phrases = [
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
console.log(phrases)