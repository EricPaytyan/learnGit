console.log('start lesson 1.1');

// Объявление переменных (и присваивание значения)

 
var a; // объявление без присваивания значения
const b = 3;
let c = '1';

// b = 2;
c = 'Danil'; //  присваивание значения

// console.log(c);


// Примитивные типы данных

// Number
const age = 18;

// String
const name = "Erik"

// Boolean (true - false; да - нет; 1 - 0)
const isHuman = true;


// Специальные(служебных) типы данных

// undefined - значение не известно/ не определно (но возможно будет определно в будущем). Но сейчас мы не знаем что там.
let userData = undefined;

// null (как void) - отсутствие значения (мы знаем что результата нет)
let score = null;

const test = "100" + "34";
console.log(test);

// NaN - not a number
const myAge = NaN;


// Комплексные(сложный) типы данных


// есть длинна и упорядоченный индекс.

// Array (Массив) - важна длинна и порядок элементов. Не важны имена ключей.
// index: value (индкекс: значение)
const products = ['Молоко', "Хлеб", "Шоколад"];
console.log(products);
console.log(products[1]);

const citiesArr = ['Moscow', "Omsk", "New-York"];
console.log(citiesArr);

const randomArr = ['green', 140, 1.4, false];

// const fishes = [{}, {}, {}, {}]

// Object (объект) - длина и порядок не важны. Важны имена ключей.

// key: value (ключ: значение)
const erikHuman = {
    age: 18,
    name: "Erik",
    lastName: "P.",
    isHuman: true,
    friends: ['Alex', 'Taniya'] 
};

// Ключи в объекте называется свойствами (properties, props) или полям (fields)
console.log(erikHuman);
console.log("Erik's last name - " + erikHuman.lastName);
console.log('Friends ', erikHuman.friends[0]);
console.log('Friends ', erikHuman);

const citiesObj = {
    0: 'Moscow', 
    1: "Omsk", 
    2: "New-York"
};
console.log(citiesObj);

const car = {
    color: 'green', 
    horsePower: 140, 
    engine: 1.4, 
    isBroken: false
}

const round = {
    color: 'green', 
    radius: 140, 
    strokeWidth: 1.4, 
    isFilled: false
}

const someAnimal = {
    skinColor: 'green', 
    height: 140, 
    fatIndex: 1.4, 
    isAlive: undefined
}


// Function - многократно повторяемые одинаковые действия

// Объявление функции
function sayTime() {
    const time = (new Date()).toISOString();
    console.log('Hello Erik!!! Now is: ' + time);
}

// Вызов функции
sayTime();
sayTime();
sayTime();
sayTime();

// (При объявлении) В круглых скобках - параметры функции (асбтрактное значение, что-то общее)
function sayHello(name) {
    console.log('Hello my friend ' + name);
}

// (При вызове) В круглых скобках - аргументы функции (конкретное значение)
sayHello("Алексей");
sayHello("Даниил Александрович");
sayHello(erikHuman.friends[1]);
sayHello();

function sum(num1, num2) {
    const result = num1 + num2;
    return result
}

const myNumbers = sum(10, 5);
console.log('myNumbers', myNumbers);
// sum(1, 90);
// sum(1120, 25);




// ДЗ - 1:
// 1) Дописать функцию
function bigHello(name1, name2) {
    console.log("Привет " + name1 + " и " + name2 + "!");
}

bigHello('Danil', 'Maxim') // должно выводить в консоли фразу "Привет Danil и Maxim!"

// 2) Дописать функцию, которая будет возвращать результат вычитания
function diff(num1, num2) {
    const result = num1 - num2;
    return result
}
const numbers = diff(10, 3);
console.log(numbers);


// Параметры - абстракция (что-то общее)
function pay(money) {
    console.log("Папа, переведи " + money + "рублей Даниилу");
}

// Аргументы - конкретное значение
pay(1500);
// pay(2000);
// pay(3000);


function buy(product) {
    console.log('Эрик, купи ' + product);
}

buy("хлеб");
buy("апельсины");
buy("молоко");

const myName = 'Эрик П.';

const fullText = 'Моё имя ' + myName;
console.log(fullText);


function $head(theme) {
    console.log('Эрик запустил функцию');
    console.log('Функция $head звпущена ' + (new Date()));
    // return "<title>" + theme + "</title>";
    // return 7
    // return new Date()
}

const biznesHead = $head("Бизнес-ланчи");

const aboutHead = $head("О нас");
console.log(aboutHead);





