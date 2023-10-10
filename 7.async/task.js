class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {

		if ((!time) || (!callback)) {
			throw new Error("Отсутствуют обязательные аргументы");
		}

		this.alarmCollection.some(element => {
			if (element.time === time) {
				console.warn('Уже присутствует звонок на это же время');
			}
		});

		this.alarmCollection.push({ callback, time, canCall: true })
		return;

	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((allarm) =>
			allarm.time != time
		);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, -3);;
	}

	start() {
		if (this.intervalId != null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(element => {
				if ((element.time === this.getCurrentFormattedTime()) && (element.canCall === true)) {
					element.canCall = false;
					element.callback();
				}
			})
		}, 1000)
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(element => {
			element.canCall = true;
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}