// let word = "Anna"
// let reverseWord = ''
// word = word.toLowerCase()
// for (let i = word.length - 1; i >= 0; i--) {
//     reverseWord += word[i]
// }
// if (word === reverseWord){
//     console.log("Palindrom")
// }else {
//     console.log("Ne palindrom")
// }


// ________________________________________________________________________
// Напишите программу, которая принимает строку из чисел, разделенных запятыми (например, "1,2,3,4,5") и выводит сумму всех чисел.
// let array =  "1,2,3,4,5"
// let numbers = array.split(",");
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//         sum += Number(numbers[i])
//     }
//     console.log(sum);
    

// ________________________________________________________________________
// Дана массив их строк. ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"] Программа должна подсчитать количество слов, которые содержат больше 5 символов.
// let array = ["abcd", "def", "ghiabr", "jklaf", "asdgdfhfgh"]
// let count = 0
// for (let i = 0; i < array.length; i++) {
//     if(array[i].length > 5){
//         count++
//     }
// }console.log(count);


// ________________________________________________________________________
// Простая задача
// Создайте массив чисел от 1 до 20. Выведите все четные числа из этого массива.
// let numbers = [];
// for (let i = 1; i <= 20; i++) {
//     numbers.push(i);
// }console.log(numbers);
// let num = 0
// for (let j = 0; j < numbers.length; j++) {
//     if(numbers % 2 === 0){
//         console.log(num);
//     }
// }


// ________________________________________________________________________
// Сложная задача
// Дана строка из нескольких слов, разделенных пробелами. Напишите программу, которая переворачивает каждое слово в строке и выводит полученный результат.

// let words = "Valaar Morgulis"
// let splitWords = words.split("")

// let reversedWords = splitWords.reverse()

// let combineWords = reversedWords.join("")

// console.log(combineWords);


// ________________________________________________________________________
// Средняя задача
// Сгенерируйте массив из 10 случайных чисел от 1 до 100. Найдите максимальное и минимальное число в массиве, а также их разницу.
// let numbers = []
// for (let i = 0; i < 10; i++) {
//     let random = Math.round(Math.random() * 100)
//     numbers.push(random);
// }
// console.log(numbers);
// let maxNumber = Math.max(...numbers)
// let minNumber = Math.min(...numbers)
// let sum = maxNumber + minNumber
// console.log(`Максимальное число: ${maxNumber} + Минимальное число: ${minNumber} = ${sum}`)



// ________________________________________________________________________
// Сложная задача
// Дан массив чисел, например [10, 15, 3, 7, 20, 8, 25]. Найдите два числа, сумма которых равна 25, и выведите их. Если таких чисел нет, выведите сообщение об этом.
// let nums = [10, 15, 3, 7, 20, 8, 25]
// let targetNum = 25
// let notFound = "false"

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === targetNum) {
//             console.log(`${nums[i]} + ${nums[j]} = ${targetNum}`); 
//         }
//     } 
// }

// ________________________________________________________________________
// Средняя задача
// Напишите программу, которая принимает строку из букв и цифр (например, "a1b2c3d4"), и создает два массива отдельно с числами и отдельно с буквами из этой строки: [1, 2, 3, 4] [a, b , c, d]
// let vinegret = "a1b2c3d4"
// let nums = []
// let words = []
// for (let i = 0; i < vinegret.length; i++) {
//     if(isNaN(vinegret[i])){
//         words.push(vinegret[i])
//     }else{
//         nums.push(Number(vinegret[i]))
//     }
// }
// console.log(nums, words);



// ________________________________________________________________________
// Сложная задача
// Дан массив строк, например ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"]. Объедините их в одну строку, добавив между ними символ -, но только между строками, где колиечство букв совпадает.

let array = ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"]
let result = ""

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
       if (array.length[i] === array.length[j]) {
        console.log(`${array[i]}-${array[j]}`);
         
       }
    }
    
} 
// Тут не понял