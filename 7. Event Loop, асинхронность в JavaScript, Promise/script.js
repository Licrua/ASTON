// #1
console.log('1'); // 1
setTimeout(() => console.log('2'), 1); // 5
let promiseNew = new Promise((resolve) => {
  console.log('3');
  resolve();
}); // 2
promiseNew.then(() => console.log('4')); // 4
setTimeout(() => console.log('5')); // 6
console.log('6'); // 3

// 1 3 6 4 2 5

// #2
let promiseTree = new Promise((resolve, reject) => {
  resolve('a');
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 0);
  console.log('3');
});

// 1 3 2
// #3
let promiseTwo = new Promise((resolve, reject) => {
  resolve('a');
});
promiseTwo
  .then((res) => {
    return res + 'b';
  }) // abc
  .then((res) => {
    return res + 'с';
  })
  .finally((res) => {
    return res + '!!!!!!!'; // ничего не возвращает
  })
  .catch((res) => {
    return res + 'd'; // нет ошибки
  })
  .then((res) => {
    console.log(res); //abc
  }); // abc
// #4

function doSmth() {
  return Promise.resolve('123');
}
doSmth()
  .then(function (a) {
    console.log('1', a); // 1, 123
    return a;
  })
  .then(function (b) {
    console.log('2', b); // 2, 123 
    return Promise.reject('321'); 
  })
  .catch(function (err) {
    console.log('3', err); // 3, 321
  })
  .then(function (c) {
    console.log('4', c); // 4, undefined
    return c;
  });

// #5

console.log('1');
setTimeout(function () {
  console.log('2');
}, 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');

const promis = new Promise((resolve, reject) => {
  resolve();
});

// 1 4 3 2



// Продвинутые 

// № 1

function printIndicesWithDelay(arr) {
	arr.forEach((_, index) => {
	  setTimeout(() => {
		console.log(`Индекс: ${index}`);
	  }, index * 3000);
	});
  }
  
  const numbers = [10, 20, 30, 40, 50];
  printIndicesWithDelay(numbers);
  
