'use strict';

// написать класс для вывода, который будет наследовать класс таймер и попробовать создать экземпляры и посмотреть их области видимости

class Timer {
	constructor(t) {
		this.timer = t;
	}

	tick() {
		this.timer === 1 && clearInterval(this.stop);
		this.timer--;
	}

	run() {
		this.stop = setInterval(() => {
			this.tick();
		}, 1000);
	}
}


class showTimer extends Timer {
	tick() {
		super.tick();
		console.log(this.timer);
	}
}



let t1 = new showTimer(4);

t1.run();