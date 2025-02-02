
// Дан массив чисел [12, 5, 8, 130, 44]. Создайте новый массив, содержащий только числа больше 10.

// let arrOfNums = [12, 5, 8, 130, 44]
// let newArr = arrOfNums.filter(function (value) {
//     if (value > 10) {
//         return value
//     }
// })
// console.log(newArr);

//_________________________________________________________________________________________________________

// Напишите программу, которая принимает массив строк и возвращает массив длин этих строк по возрастанию.
// ["one", "three", "two"] -> [3, 5, 3] -> [3, 3, 5]

// let arrOfStrings = ["five", "one", "three"]
// let newArrOfStr = arrOfStrings.map(function (str) {
//     return str.length
// })
// newArrOfStr.sort(function (nextStr, currStr) {
//     return nextStr - currStr
// })

// console.log(newArrOfStr);

//_________________________________________________________________________________________________________

// Есть массив строк. Отсортируйте строки по их длине (от самой короткой к самой длинной) и выведите результат.

// ['hello', 'world', 'javascript', 'code'] => ['code', 'hello', 'world', 'javascript']
// let arrOfStrings = ['hello', 'world', 'javascript', 'code']
// let newArrOfStr = arrOfStrings.sort(function (nextStr, currStr) {
//     return nextStr.length - currStr.length
// })
// console.log(newArrOfStr);

//_________________________________________________________________________________________________________

// Средной сложности задачи:

// Подсчитайте количество гласных букв в строке. Выведите результат.
// // let vowels = [a, e, i, o, u]
// "hello" -> 2
// "javascript" -> 3
// "world" -> 1
// function countVowels(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     return str.split('').reduce(function (count, char) {
//         return vowels.includes(char) ? count + 1 : count
//     }, 0)
// }

// console.log(`Hello -> ${countVowels("hello")}`)    
// console.log(`javascript -> ${countVowels("javascript")}`)
// console.log(`world -> ${countVowels("world")}`)


//_________________________________________________________________________________________________________

// Дана строка. Отсортировать её символы в алфавитном порядке.
// "javascript"-> "aacijprstv"
// "hello" -> "ehllo"
// let strings = ["javascript", "hello"]
// let sortedStrings = strings.map(function (str) {
//     return str.split('').sort().join('');
// })

// console.log(sortedStrings);

//_________________________________________________________________________________________________________

// Сложные задачи:

// Есть произвольная строка, определите, сколько раз каждый символ встречается в этой строке. Выведите результат в формате: "Символ X => Y".
// // "parallelogram"
// let word = "parallelogram"
// let charCount = {}
// word.split('').forEach(function (char) {
//     return charCount[char] ? charCount[char]++ : charCount[char] = 1
// })

// let keys = Object.keys(charCount)
// for (let i = 0; i < keys.length; i++) {
//     let char = keys[i]
//     console.log(`Символ ${char} => ${charCount[char]}`);
// }
    
//_________________________________________________________________________________________________________

// Дан массив чисел [3, 1, 4, 1, 5, 9]. Найдите сумму квадратов всех четных чисел.
// let numbers = [3, 1, 4, 1, 5, 9]
// let square = numbers.filter(function (value) {
//     return value % 2 === 0
// }).reduce(function (sum, value) {
//     return sum += value * value
// }, 0)
// console.log(square);

//_________________________________________________________________________________________________________

// Дан массив чисел. Проверить, упорядочены ли элементы по возрастанию.
// [1, 5, 9, 12, 36] => true
// [1, 5, 12, 9, 36, -5] => false
// function isSorted(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i - 1] > arr[i]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isSorted([1, 5, 9, 12, 36])); 
// console.log(isSorted([1, 5, 12, 9, 36, -5]));

//_________________________________________________________________________________________________________

// Дан массив слов. Создайте объект, где ключами будут первые буквы слов, а значениями — массивы слов, начинающихся на эти буквы. Например։
// ['apple', 'banana', 'apricot', 'blueberry', 'cherry'] -> 
// {
// a: ['apple', 'apricot'], 
// b: ['banana', 'blueberry'], 
// c: ['cherry']
// }
// let groupOfWords =  ['apple', 'banana', 'apricot', 'blueberry', 'cherry']
// function firstLetter(words) {
//     return words.reduce(function (acc, word) {
//         let firstLetterWord = word[0]
//         if (!acc[firstLetterWord]) {
//             acc[firstLetterWord] = []
//         }        
//         acc[firstLetterWord].push(word)
//         return acc
//     }, {})
// }
// console.log(firstLetter(groupOfWords))
