function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce(function(a, b) {
    return a + b;
  }, 0);
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}
// console.log(getArrayParams(-99, 99, 10));
// console.log(getArrayParams(1, 2, 3, -100, 10));
// console.log(getArrayParams(5));


// сумма элементов массива
function summElementsWorker(...arr) {
    let sum = arr.reduce(function(a, b) {
    return a + b;
  }, 0);
    return sum;
}
//console.log(summElementsWorker());
//console.log(summElementsWorker(10, 10, 11, 20, 10));

// разница max и min элементов
function differenceMaxMinWorker(...arr) {
  let dif = Math.max(...arr) - Math.min(...arr);
  if (arr.length === 0) {
    return 0;
  } else {
    return dif;
  }
}
//console.log(differenceMaxMinWorker());
//console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

// разница сумм четных и нечетных элементов
function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}
//console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
//console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

//среднее значение четных элементов
function averageEvenElementsWorker(...arr) {
 let sumEven = 0;
 let countEven = 0;
 if (arr.length === 0) {
  return 0;
 }
 for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 ===0) {
    sumEven += arr[i];
    countEven +=1;
  }
 }
 return sumEven / countEven;
}
//console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
//console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];
function makeWork (arrOfArr, func) {
  let maxWorkerResult;
	let array = [];
	let maxOfTheMax = [];

	for (let i = 0; i < arrOfArr.length; i ++) {

		maxWorkerResult = arrOfArr[i];
		array.push(maxWorkerResult)
		maxOfTheMax.push(func(...maxWorkerResult));

	};

	const max = maxOfTheMax.reduce((a, b) => Math.max(a, b), -Infinity);
	return (max);

};

console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72