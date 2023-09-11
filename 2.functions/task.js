function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum;
	let avg;

	max = Math.max.apply(this, arr);
	min = Math.min.apply(this, arr);
	sum = arr.reduce(function(previosValue, currentValue) {
		return previosValue + currentValue;
	});
	avg = parseFloat((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}


function checkingForZero(array) {
	if (array.length === 0) {
		return [0];
	} else {
		return array;
	}
}


function summElementsWorker(...arr) {
	return checkingForZero(arr).reduce(function(prevArg, curArg) {
		return prevArg + curArg;
	});

}

function differenceMaxMinWorker(...arr) {
	return Math.max.apply(this, checkingForZero(arr)) - Math.min.apply(this, checkingForZero(arr));
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = checkingForZero(arr).reduce(function(prevArg, curArg, ) {
		if (curArg % 2 === 0) {
			return prevArg + curArg;
		} else {
			return prevArg;
		}
	}, 0);

	let sumOddElement = checkingForZero(arr).reduce(function(prevArg, curArg, ) {
		if (curArg % 2 != 0) {
			return prevArg + curArg;
		} else {
			return prevArg;
		}
	}, 0);

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let countEvenElement = 0;
	let sumEvenElement = checkingForZero(arr).reduce(function(prevArg, curArg, index) {
		if (curArg % 2 === 0) {
			countEvenElement++;
			return prevArg + curArg;
		} else {
			return prevArg;
		}
	}, 0);

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const funcResult = func(...arrOfArr[i]);
		if (funcResult > maxWorkerResult) {
			maxWorkerResult = funcResult;
		};
	}

	return maxWorkerResult;
}