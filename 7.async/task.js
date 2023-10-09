class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		try {

			if ((time === undefined) || (callback === undefined)) {
				throw new Error("Отсутствуют обязательные аргументы");
			}

			this.alarmCollection.forEach(element => {
				if (element.time === time) {
					console.warn('Уже присутствует звонок на это же время');
				}
			});

			this.alarmCollection.push({ 'callback': callback, 'time': time, "canCall": true })
			return;

		} catch (error) {
			throw error;
		}

	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((allarm) => {
			return allarm.time != time;
		});
	}

	getCurrentFormattedTime() {
		console.log(new Date().getTime)
		return new Date().toLocaleTimeString().slice(0, -3);;
	}

	start() {
		if (this.intervalId != null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(element => {
				if ((element.time === this.getCurrentFormattedTime()) || (element.canCall === true)) {
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