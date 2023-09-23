class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(number) {
		if (number < 0) {
			this._state = 0;
			return;
		} else if (number > 100) {
			this._state = 100;
			return;
		}

		this._state = number;
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount,) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount);
		this.type = "detective";
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
			return;
		}
	}

	findBookBy(type, value) {
		let result = this.books.find(function (item) {
			return item[type] === value;
		}, this);

		return result != undefined ? result : null;
	}

	giveBookByName(bookName) {
		let result = this.books.find(function (item, index) {
			if (item.name === bookName) {
				this.books.splice(index, 1);
				return true
			}
		}, this);

		return result != undefined ? result : null;
	}


}



class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.marks = {};
	}

	addMark(mark, subject) {
		if ((mark >= 2) && (mark <= 5)) {
			if (this.marks[subject] === undefined) {
				this.marks[subject] = [mark];
			} else {
				this.marks[subject].push(mark);
			}
		} else {
			return;
		}
	}

	getAverageBySubject(subject) {
		if (this.marks[subject] === undefined) {
			return 0;
		} else {
			return this.marks[subject].reduce((acc, item) => { return acc + item; }) / this.marks[subject].length;
		}
	}

	getAverage() {
		let summ = 0;
		if (Object.keys(this.marks).length === 0) {
			return 0;
		} else {
			for (let key in this.marks) {
				summ += this.marks[key].reduce((acc, item) => { return acc + item; }) / this.marks[key].length;
			}

			return (summ / Object.keys(this.marks).length);
		}
	}

}