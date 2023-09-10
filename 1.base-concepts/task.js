"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	parseFloat(percent);
	parseFloat(contribution);
	parseFloat(amount);
	parseFloat(countMonths);

	if ((typeof(percent) != "number") || (Object.is(percent, NaN)) || (typeof(contribution) != "number") || (Object.is(contribution, NaN)) || (typeof(amount) != "number") || (Object.is(amount, NaN)) || (typeof(countMonths) != "number") || (Object.is(countMonths, NaN))) {
		return false;
	} else {
		let percentPerMonth = (percent / 100) / 12;
		let bodyOfCredit = amount - contribution;
		let monthlyPayment = bodyOfCredit * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));

		return Number((monthlyPayment * countMonths).toFixed(2));

	}
}