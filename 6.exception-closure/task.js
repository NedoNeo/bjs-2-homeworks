function parseCount(number) {

	let parseNumber = Number.parseFloat(number);
	if (isNaN(parseNumber)) {
		throw new Error("Невалидное значение");
	}
	return parseNumber;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}


class Triangle {
	constructor(sideOne, sideTwo, sideTree) {
		this.sideOne = sideOne;
		this.sideTwo = sideTwo;
		this.sideTree = sideTree;

		if (((sideOne + sideTwo) < sideTree) || ((sideOne + sideTree) < sideTwo) || ((sideTwo + sideTree) < sideOne)) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return this.sideOne + this.sideTwo + this.sideTree;
	}

	get area() {
		let p = this.perimeter / 2;
		let s = Math.sqrt(p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideTree));
		return Number.parseFloat(s.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},

			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}