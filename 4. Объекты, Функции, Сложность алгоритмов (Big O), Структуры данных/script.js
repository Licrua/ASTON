// Заданиние первое

// 1. Литерал объекта

const counter1 = { name: "John", age: 30 };

// 2. Конструктор `new counterect()`
const counter2 = new Object({ name: "John", age: 30 });

// 3. Функция-конструктор
function Person(name, age) { this.name = name; this.age = age; }
const counter3 = new Person("John", 30);

// 4. `counterect.create()` с пустым объектом как прототипом
const counter4 = Object.create(null);
counter4.name = "John";
counter4.age = 30;

// 5. Классы
class PersonClass { constructor(name, age) { this.name = name; this.age = age; } }
const counter5 = new PersonClass("John", 30);

// 6. `counterect.assign()`
const counter6 = Object.assign({}, { name: "John", age: 30 });

// 7. Spread оператор
const counter7 = { ...{ name: "John", age: 30 } };


// //// //


// Задание второе

// 1. Использование Object.assign()
const obj1 = { name: "John", age: 30 };
const copiedObj1 = Object.assign({}, obj1);

// 2. Использование Spread-оператора
const obj2 = { name: "John", age: 30 };
const copiedObj2 = { ...obj2 };

// 3. Использование JSON.parse() и JSON.stringify() для глубокой копии
const obj3 = { name: "John", age: 30, address: { city: "New York" } };
const copiedObj3 = JSON.parse(JSON.stringify(obj3));

// 4. Использование structuredClone() для глубокой копии (если поддерживается)
const obj4 = { name: "John", age: 30, date: new Date() };
const copiedObj4 = structuredClone(obj4);

// 5. Ручная рекурсивная функция для глубокой копии
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // если это примитив, просто возвращаем его
  }
  let copy = Array.isArray(obj) ? [] : {}; // создаём пустой объект или массив
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]); // рекурсивно копируем свойства
    }
  }
  return copy;
}

const obj5 = { name: "John", age: 30, address: { city: "New York" } };
const copiedObj5 = deepCopy(obj5);

console.log(copiedObj1); // { name: "John", age: 30 }
console.log(copiedObj2); // { name: "John", age: 30 }
console.log(copiedObj3); // { name: "John", age: 30, address: { city: "New York" } }
console.log(copiedObj4); // { name: "John", age: 30, date: <current_date> }
console.log(copiedObj5); // { name: "John", age: 30, address: { city: "New York" } }

// ///// //



// Задание третье

// 1. Function Declaration (Объявление функции)
function myFunctionDeclaration() {
	console.log('Hello from Function Declaration');
  }
  
  // 2. Function Expression (Функциональное выражение)
  const myFunctionExpression = function() {
	console.log('Hello from Function Expression');
  };
  
  // 3. Arrow Function (Стрелочная функция)
  const myArrowFunction = () => {
	console.log('Hello from Arrow Function');
  };
  
  // 4. Function Constructor (Конструктор функции)
  const myFunctionConstructor = new Function('a', 'b', 'console.log(a + b);');
  
  // 5. Method Definition (Метод объекта)
  const obj = {
	myMethod() {
	  console.log('Hello from Method Definition');
	}
  };
  
  // 6. Generator Function (Генератор функции)
  function* myGeneratorFunction() {
	yield 'Hello from Generator Function';
	yield 'World';
  }
  
  // 7. Async Function (Асинхронная функция)
  async function myAsyncFunction() {
	let result = await new Promise(resolve => setTimeout(() => resolve('Hello from Async Function'), 1000));
	console.log(result);
  }
  
  // 8. IIFE (Immediately Invoked Function Expression — Немедленно вызываемое функциональное выражение)
  (function() {
	console.log('Hello from IIFE');
  })();
  
  // Вызов всех функций:
  myFunctionDeclaration();           // Hello from Function Declaration
  myFunctionExpression();            // Hello from Function Expression
  myArrowFunction();                 // Hello from Arrow Function
  myFunctionConstructor(2, 3);       // 5
  obj.myMethod();                    // Hello from Method Definition
  const gen = myGeneratorFunction();
  console.log(gen.next().value);     // Hello from Generator Function
  console.log(gen.next().value);     // World
  myAsyncFunction();                 // Hello from Async Function
  

// Продвинутые задания

//  Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
	return str.split('').reverse().join('');
	};
	
