// function sayHello(){
//     console.log("Привет, мир!")
// }
// sayHello();

// function greetUser(name) {
//     console.log("Привет, " + name + "!")
// }
//
// greetUser("Мээрван")
// greetUser(":Жасмин")
// greetUser("Ольга")
// function  sum( a, b) {
//     return a + b;
// }
//
// let result = sum(5,10);
// console.log(result);

// function  sum (x,y){
//     return x + y;
// }
// console.log(sum(6,8));
// определение функции
// function wellcomeMessage (name){
//     return("Hello " + name + " welcome to IhubCourse");
// }
// let nameVal = "User";

// function openBox(){
//     console.log("Коробка открыта");
// }
// openBox()

//------------------------------
// function makeSound(){
//     console.log("Bip-Bip");
// }
// makeSound();
// makeSound();
// makeSound();
// --------------------------------
// function magicBox(){
//     console.log("Абракадабра");
// }
// magicBox();
// function sayHello(){
//
// }
// sayHello();
// function ringBell(){
//     console.log("Дин-дон");
// }
// ringBell();
// ringBell();
// function startEngine(){
//     console.log("Врум-Врум");
// }
// startEngine();
// startEngine();
// function lightOn(){
//     console.log("Свет включен!");
// }
// lightOn();
// function smile (){
//     console.log("😊");
// }
// smile();
// function jump(){
//     console.log("Jumping");
// }
// jump();
// jump();
// jump();

// function clapHands(){
//     console.log("Хлоп-Хлоп");
// }
// clapHands();
// function greetWorld(){
//     console.log("Привет мир");
// }
// greetWorld();
// function sayBye(){
//     console.log("Пoка!");
// }
// sayBye();
//---------------------
//     function countToThree(){
//         console.log(1);
//         console.log(2);
//         console.log(3);
//     }
//     countToThree();
//----------------------
// function showStar(){
//     console.log("★")
// }
// showStar();
//----------------------
// function welcome(){
//     console.log("Добро пожаловать");
// }
// welcome();
//----------------------
// function printHello(){
//     console.log("Привет");
// }
// printHello();
// printHello();
// printHello();
//-----------------------
// function showHeart(){
//     console.log("❤️")
// }
// showHeart();
// showHeart();
// showHeart();
// showHeart();
// --------------------------
// function printNumber(){
//     console.log(42);
// }
// printNumber();
// printNumber();
// printNumber();

//========================================================
//Концепция - Переменные внутри функции —
// локальные, их не видно снаружи. Глобальные переменные видны всем.


// const showSecret = () => {
//     let secret = "Тсс!"// Переменная "secret"- локальная, снаружи ее не видно
//     console.log(secret);
// };
// showSecret();
// --------------------------

// function hideTreasure(){
//     let treasure = "Gold";
//     console.log(treasure);
// }
// hideTreasure();
//---------------------------
// function sayMagic(){
//     let spell = "Заклинание";
//     console.log(spell)
// }
// sayMagic();
//----------------------------
// function showGem(){
//     let gem = "Рубин";
//     console.log(gem);
// }
// showGem();
//----------------------------
// Создайте глобальную переменную "world" = "Мир!" и
// функцию "sayWorld",которая ее использует
// let world = "Мир!";
// function sayWorld(){
//     console.log(world);
// }
// sayWorld()
// Объяснение - world - глобальная, как общий плакат, видна всем,
// включая коробку sayWorld
//----------------------------
//  function showKey(){
//      let key = "Ключ";
//      console.log(key);
//  }
//  showKey();
//----------------------------
// let star = "★";
// function showStar(){
//     console.log(star);
// }
// showStar();
//----------------------------
//============================
//Параметры-это данные,которые мы кладем в рюкзак функции при вызове

// function sayHello(name){
//     console.log("Привет, " + name + "!");
// }
// sayHello("Аня");
//-----------------------------
// function showAnimal(animal){
//     console.log("Это " + animal + "!")
// }
// showAnimal("кот");
// showAnimal("Собака");
// showAnimal("верблюд")
//-------------------------------
// function greetFriend (friend){
//     console.log("Эй "+ friend +"!");
// }
// greetFriend("Мээрван");
// greetFriend("Joseph");
// greetFriend("Jasmin");
//--------------------------------
// function showColor(color){
//     console.log("Цвет: " + color)
// }
// showColor("красный");
//---------------------------------
// function sayFood(food){
//     console.log("Еда " + food + "!");
// }
// sayFood("Пицца");
//---------------------------------
// function sayCity(city){
//     console.log("Город " + city + "!");
// }
// sayCity("Бишкек");
//----------------------------------
// function showFuit(fruit) {
//     console.log("Фрукт " + fruit + "!");
// }
// showFuit("Яблоко");
//-----------------------------------
//Параметры и аргументы
// параметр - это имя переменной в функции, аргумент - значение, которое передаем
// function greet(name){
//     console.log("Привет " + name + "!");
// }
// greet("Катя");
// function showNumber(num){
//     console.log("Число " + num + "!");
// }
// showNumber(42);
//=============================================
//Значения по умолчанию
// function greet(name = "гость"){
//     console.log("Привет, " + name + "!");
// }
//
// greet();
// greet("Аня");
//-----------------------------------
// function sayAnimal(animal = "кот"){
//     console.log("This is, " + animal + "!");
// }
// sayAnimal();
// sayAnimal("Bear");
//==============================================
//Возврат занчений - "return"
//return - возвращает результат, как подарок из
// коробки. После return функция останавливается
// function add(a,b){
//     return a + b;
// }
//
// console.log(add(5,8));
//---------------------------------------
//  function double(num){
//      return num * 2;
//  }
//
// console.log(double(58));
//-----------------------------------
// function square (num){
//     return num * num;
// }
//
// console.log(square(5))
//-----------------------------
// function subtract (a,b){
//     return  a - b;
// }
//
// console.log(subtract(17,9));
//-----------------------------
// function divide(a,b){
//     return a/b;
// }
//
// console.log(divide(58,5));
//-------------------------------
// function getGreetings(){
//     return "Привет!";
// }
// console.log(getGreetings());
//----------------------------
//Создайте функцию `stopEarly()`,
// которая возвращает "Стоп!" и не выводит "Идём дальше"
// function stopEarly(){
//     return "Стоп!"
//     console.log("Идем дальше");//не выполнится
// }
//
// console.log(stopEarly());
//--------------------------------

// function checkNumber (num){
//     if(num < 10)
//     return "Меньше 10";
//     console.log("Больше");
// }
// console.log(checkNumber(5));
//-------------------------------
// function sayHi(){
//     return "Привет!";
//     console.log("Пока!")
// }
//
// console.log(sayHi());
//---------------------------------
// function getFive(){
//     return 5;
//     console.log("Десять")
// }
//
// console.log(getFive());
//----------------------------------
// function checkZero(num){
//     if (num === 0) return "Ноль";
//     console.log("Не ноль");
// }
//
// console.log(checkZero(0));
//-----------------------------------
// function sayYes(){
//     return "Yes";
//     console.log("No");
// }
//
// console.log(sayYes());
//---------------------------------
// function getTen(){
//     return 10;
//     console.log("Двадцать")
// }
//
// console.log(getTen());
//---------------------------------
// function checkPositive(num){
//     if (num > 0) return "Положительное";
//     console.log("Отрицательное")
// }
//
// console.log(checkPositive(5));
// function sayHello(){
//     return "Привет";
//     console.log("Эй");
// }
//
// console.log(sayHello());
//--------------------------------
//Условие без `else`
// **Концепция:** Если есть `return`,
// можно не писать `else`, так как функция останавливается.
// function isBig(num){
//     if(num >100) return "Большое";
//     return  "Маленькое";
// }
//
// console.log(isBig(150));
// console.log(isBig(50));
//---------------------------------
// function isPositive(num){
//     if (num > 0) return "положительное";
//     return "не положительное";
// }
//
// console.log(isPositive(7));
// console.log(isPositive(-1));
//------------------------------------
// function isZero(num){
//     if (num === 0) return "Ноль"
//     return "Не ноль";
// }
//
// console.log(isZero(0));
// console.log(isZero(5));
// function isEven(num){
//     if (num % 2 === 0) return "Четное";
//     return "Нечетное";
// }
//
// console.log(isEven(8));
// console.log(isEven(5));

// function isAdult(age){
//     if (age >= 18) return "Взрослый";
//     return "Ребенок";
// }
//
// console.log(isAdult(20));
// console.log(isAdult(15));
//--------------------------------
// function isLong(str){
//     if (str.length > 5) return "Длинное"
//     return "Короткое";
// }
//
// console.log(isLong("Привет!"));
// console.log(isLong("Кот"));
//--------------------------------
// function isNegative(num){
//     if (num < 0) return "Отрицательное";
//     return "Не отрицательное";
// }
//
// console.log(isNegative(-5));
// console.log(isNegative(5));
//---------------------------------
// function isEmpty(str){
//     if (str === "") return "Пусто";
//     return "Не пусто";
// }
//
// console.log(isEmpty(""));
// console.log(isEmpty("Tекст"))

// function isTrue(bool){
//     if (bool ===true) return "Истина";
//         return "Ложь";
// }
//
// console.log(isTrue(true));
// console.log(isTrue(false));
// function isBig(num){
//     if (num > 100){
//         return "Большое";
//     } else {
//         return "Маленькое";
//     }
// }
//
// console.log(isBig(150));
// console.log(isBig(50));
//------------------------------
// function isPositive (num){
//     if (num > 0){
//         return "положительное";
//     }else {
//         return "не положительное";
//     }
// }
//
// console.log(isPositive(5));
// console.log(isPositive(-5))
//---------------------------------
// function isLong(str){
//     if (str.length > 5){
//         return "Длинное";
//     }else{
//         return "Короткое";
//     }
// }
//
// console.log(isLong("привет"));
// console.log(isLong("Кот"));
//----------------------------
// function isEmpty(str){
//     if (str === ""){
//         return "пусто";
//     }else {
//         return "не пусто";
//     }
// }
//
// console.log(isEmpty(""));
// console.log(isEmpty("Текст"));
// function  isTen(num){
//     if (num === 10){
//         return "Десять";
//     }else{
//         return "не десять";
//     }
// }
//
// console.log(isTen(10));
// console.log(isTen(5));
//----------------------------
//Вариант с тернарным оператором `?`
// **Концепция:** Тернарный оператор (`?:`)
// — компактная замена `if` для простых условий.
// function isBig(num){
//     return num > 100 ? "Большое" :"Маленькое";
// }
//
// console.log(isBig(150));
// console.log(isBig(50));
//-----------------------------------------
// function isPositive(num){
//     return num > 0 ? "Положительное": "Не положительное";
// }
//
// console.log(isPositive(5));
// console.log(isPositive(-1));
//------------------------------------------
// function isEven(num){
//     return num % 2 === 0 ? "Четное" : "Нечетное";
// }
//
// console.log(isEven(4));
// console.log(isEven(5));
// function isLong(str){
//     return str.length > 5 ? "Длинное" : "короткое";
// }
//
// console.log(isLong("Саламат"));
// console.log(isLong("Кот"))
//---------------------------------------
// function isEmpty(str){
//     return str === "" ? "Пусто" : "не пусто";
// }
//
// console.log(isEmpty(""));
// console.log(isEmpty("Текст"));
//----------------------------------
// Вариант с `||`
// **Концепция:** Оператор `||`
// возвращает первое истинное значение или последнее, если все ложные.
// function hasValue(val){
//     return val || "нет значения";
// }
//
// console.log(hasValue(5));
// console.log(hasValue(0));
// напишите функцию,которая удваивает каждое число в массиве.
//Пример: Input [5,10,15]

//решение
//                                                   ДЗ на сегодня Нурислам
//Task 1: Удвоение значений массива
// Используем метод map, который создаёт новый массив,
// применяя к каждому элементу исходного массива указанную функцию.

// const doubleArray = (arr) => arr.map((num) => num * 2);
//
// console.log(doubleArray([1, 2, 3]));
// console.log(doubleArray([4, 1, 1, 1, 4]));
// console.log(doubleArray([2, 2, 2, 2, 2, 2]));
//++++++++++++++++++++++++++++++++++++++++++++


//Task 2: Удаление каждого второго элемента
// Здесь нам поможет метод filter. Он создаёт новый
// массив только с теми элементами, для которых
// переданная функция вернула true. Мы будем
// проверять индекс каждого элемента.

// const removeSecondElement = (arr) => arr.filter((_, index) => index % 2 === 0);
//
// console.log(removeSecondElement(['Привет', 'Пока', 'Снова привет']));
// console.log(removeSecondElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(removeSecondElement(['Пока', {'Цвет': 'Синий'}]));
//********************************************

//Task 3: Изменение знака чисел
// Снова используем map. Каждое число просто умножим на -1.

//const invertNumbers = (arr) => arr.map((num) => num * -1);

// console.log(invertNumbers([1, 2, 3, 4, 5]));
// console.log(invertNumbers([1, -2, 3, -4, 5]));
// console.log(invertNumbers([]));
// console.log(invertNumbers([0]));
//++++++++++++++++++++++++++++++++++++++++

//Task 4: Возврат части массива
// Для этой задачи идеально подходит
// метод slice. Он позволяет "вырезать" часть массива, не меняя исходный.
//*****************************************************
// const getFirstElements = (arr, count) => {
//     const newArray = arr.slice(0, count);
//     return newArray;
// };

// console.log(getFirstElements([0, 1, 2, 3, 5, 8, 13], 3));
// console.log(getFirstElements([0, 1, 2, 3, 5, 8, 13], 5));
//******************************************************

//Task 5: Элементы, кратные своему индексу
// С помощью filter мы можем проверять,
// делится ли элемент на свой индекс без остатка.

// const filterByDivisibility = (arr) => arr.filter((num, index) => index !== 0 && num % index === 0);

// console.log(filterByDivisibility([22, -6, 32, 82, 9, 25]));
// console.log(filterByDivisibility([68, -1, 1, -7, 10, 10]));
// console.log(filterByDivisibility([11, -11]));
//****************************************************
//Task 6: Замена строк на null
// Используем map для создания нового
// массива. Проверяем тип каждого элемента с помощью typeof.

// const replaceStringsWithNull = (arr) => arr.map((item) => typeof item === 'string' ? null : item);
//
// console.log(replaceStringsWithNull([4, 6, 'Ivan', 5, 'Denis ']));

//****************************************************************************

//Для выполнения заданий я буду использовать методы map,
// filter и slice.Эти методы позволяют работать с массивами,
// не используя циклы for, что делает код более лаконичным и читаемым.

//Task 1: Удвоение значений массива
// Используем метод map, который создаёт новый массив,
// применяя к каждому элементу исходного массива указанную функцию.

// const doubleArray = (arr) => arr.map((num) => num * 2);
//
// console.log(doubleArray([1, 2, 3]));
// console.log(doubleArray([4,1,1,1,4]));
// console.log(doubleArray([2,2,2,2,2,2]));
//****************************************************************************

// const doubleValues = (arr) => {
//     return arr.map(number => number * 2);
// };
// const inputArray1 = [1,2,3];
// console.log(doubleValues(inputArray1));
//++++++++++++++++++++++++++++++++++++++++++++++
// const findGreaterThanFive = (arr) => {
//     return arr.filter(number => number > 5);
// }
// const inputArray2 = [1,6,3,8,4];
// console.log(findGreaterThanFive(inputArray2));
//++++++++++++++++++++++++++++++++++++++++++++++

// const removeZeros = (arr) => {
//     return arr.filter(number => number !==0);
// }
// const inputArray3 = [1,0,2,0,3,0];
// console.log(removeZeros(inputArray3));

//+++++++++++++++++++++++++++++++++++++++++++++++
// const toUpperCase = (arr) => {
//     return arr.map(str => str.toUpperCase());
// };
// const inputArray4 = ["hello", "world"];
// console.log(toUpperCase(inputArray4));
//+++++++++++++++++++++++++++++++++++++++++++++++
// const replaceNegatives = (arr) => {
//     return arr.map(number => number < 0 ? 0 : number);
// };
// const inputArray5 = [1, -2, 3, -4, 5];
// console.log(replaceNegatives(inputArray5));
//+++++++++++++++++++++++++++++++++++++++++++++++++

// const cubeAndReplace = (arr) => arr.map(num => {
//     const cubed = num ** 3;
//     return (cubed % 3 === 0 && cubed % 5 === 0) ? 0 : cubed;
// });
//
// console.log(cubeAndReplace([7, 8, 15, 30, 2])); // [343, 512, 0, 0, 8]


// const createDivs = (arr) => arr.map((num) => `<div>${num}</div>`);
//
// // Примеры:
// console.log(createDivs([1, 2, 3, 4, 5]));
// // Output: [ '<div>1</div>', '<div>2</div>', '<div>3</div>', '<div>4</div>', '<div>5</div>' ]

// const filterEvenLengthStrings = (arr) => arr.filter((str) => str.length % 2 === 0);
//
// // Примеры:
// console.log(filterEvenLengthStrings(['ab', 'abc', 'abcd']));
// // Output: ['ab', 'abcd']
//=========================================================******
//07.08.2025

// const numbers = [1,2,3];
// const doubled = numbers.map(num => num * 2);
//
// console.log(doubled);
// console.log(numbers);
//---------------------------------------------------------------
// const words = ['привет','мир','javascript'];
// const upperCasewords = words.map(word => word.toUpperCase());
//
// console.log(upperCasewords);
//---------------------------------------------------------------
// const ids = [101,102,103];
// const formattedIds = ids.map(id => `ID: ${id}`);
//
// console.log(formattedIds);

//Вычисление площади круга ⚪

// const radiuses = [1,2,3];
// const areas = radiuses.map(r => Math.PI * r * r);
//
// console.log(areas);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete,
// };
//
// let sum = 0;
// for (let key in salaries){
//     sum += salaries[key];
// }
// alert(sum);
// Домашнее задание==========================================
// const sumOfSquares = (numbers) => {
//     return numbers.reduce((accumulator, currentValue) =>{
//         return accumulator + currentValue * currentValue;
//     }, 0);
// };
// console.log(sumOfSquares([1,2,3]));
//-----------------------------------------------------------
// const filterAndDoubleEvens = (numbers) => {
//     return numbers.reduce((accumulator, currentValue) => {
//         if (currentValue % 2 === 0){
//             accumulator.push(currentValue*2);
//         }
//         return accumulator;
//     },[])
// }
//
// console.log(filterAndDoubleEvens([1,2,3,4,5,6]));
//-----------------------------------------------------------
const countShortNames = (names) => {
    return names.reduce((count, currentName) => {
        if (currentName.length <= 5){
            return count + 1;
        }
        return count;
    },0);
};
console.log(countShortNames(['Евдоким', 'Ivan','Игнат','Denis ']))



