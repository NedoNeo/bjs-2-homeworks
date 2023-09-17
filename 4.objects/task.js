function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...mark) {
	if (this.marks != undefined) {
		this.marks.push(...mark);
	}
}

Student.prototype.getAverage = function () {
	if ((this.marks === undefined) || (this.marks.length === 0)) {
		return 0;
	} else {
		return this.marks.reduce((acc, item) => {
			return acc + item;
		}) / this.marks.length;
	}
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;

	this.excluded = reason;
}
