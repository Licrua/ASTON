//  1 

function Person(name, age) {
	this.name = name;
	this.age = age;
  }
  
  Person.prototype.logInfo = function() {
	console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
  
  const person1 = new Person('John', 30);
  const anotherPerson = new Person('Jane', 25);
  
  // Вызываем метод из person1
  person1.logInfo();
  
  // Вызываем метод из anotherPerson
  anotherPerson.logInfo();
  

//   2 


class Person {
	constructor(name, age) {
	  this.name = name;
	  this.age = age;
	}
  
	logInfo() {
	  console.log(`Name: ${this.name}, Age: ${this.age}`);
	}
  }
  
  const person2 = new Person('John', 30);
  const anotherPerson2 = new Person('Jane', 25);
  
  // Вызываем метод из person1
  person1.logInfo();
  
  // Вызываем метод из anotherPerson
  anotherPerson.logInfo();
  
  // 3


  class SuperPerson {
	constructor(name) {
	  this._name = name;
	}
  
	get name() {
	  return this._name;
	}
  
	set name(newName) {
	  this._name = newName;
	}
  }
  
  class AnotherSuperPerson extends SuperPerson {
	constructor(name, age) {
	  super(name);
	  this.age = age;
	}
  }
  
  const person = new AnotherSuperPerson('John', 30);
  console.log(person.name);  // John
  person.name = 'Jane';
  console.log(person.name);  // Jane

  
  // 4 Продвинутые 

  // 4.1 

  function firstSum(arr, total) {
	for (let i = 0; i < arr.length; i++) {
	  for (let j = i + 1; j < arr.length; j++) {
		if (arr[i] + arr[j] === total) {
		  return [arr[i], arr[j]];
		}
	  }
	}
	return null;
  }
  
  console.log(firstSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 13));

  // 4.2 


  // Требуется проверять каждую пару чисел, 
  // что приводит к квадратичной сложности алгоритма.
  //  Более того сложность растет пропорционально размеру сущности
// что делает данный алгоритм нежелательным
  

