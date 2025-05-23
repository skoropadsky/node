'use strict';

// написать класс для вывода, который будет наследовать класс таймер и попробовать создать экземпляры и посмотреть их области видимости

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
	function Timer(t) {
		_classCallCheck(this, Timer);

		this.timer = t;
	}

	_createClass(Timer, [{
		key: 'tick',
		value: function tick() {
			this.timer === 1 && clearInterval(this.stop);
			this.timer--;
		}
	}, {
		key: 'run',
		value: function run() {
			var _this = this;

			this.stop = setInterval(function () {
				_this.tick();
			}, 1000);
		}
	}]);

	return Timer;
}();

var showTimer = function (_Timer) {
	_inherits(showTimer, _Timer);

	function showTimer() {
		_classCallCheck(this, showTimer);

		return _possibleConstructorReturn(this, (showTimer.__proto__ || Object.getPrototypeOf(showTimer)).apply(this, arguments));
	}

	_createClass(showTimer, [{
		key: 'tick',
		value: function tick() {
			_get(showTimer.prototype.__proto__ || Object.getPrototypeOf(showTimer.prototype), 'tick', this).call(this);
			console.log(this.timer);
		}
	}]);

	return showTimer;
}(Timer);

var t1 = new showTimer(4);

t1.run();