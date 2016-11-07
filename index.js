'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterInput = function (_React$Component) {
	_inherits(CounterInput, _React$Component);

	function CounterInput(props) {
		_classCallCheck(this, CounterInput);

		var _this = _possibleConstructorReturn(this, (CounterInput.__proto__ || Object.getPrototypeOf(CounterInput)).call(this, props));

		_initialiseProps.call(_this);

		var min = Math.max(_this.props.min, 0);
		var max = _this.props.max || -1;
		var value = Math.max(min, _this.props.value);
		_this.state = {
			value: value,
			min: min,
			max: max
		};
		return _this;
	}

	_createClass(CounterInput, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var value = this.state.value;


			return _react2.default.createElement(
				'div',
				{ className: 'input-group counter-input' },
				_react2.default.createElement(
					'span',
					{ className: 'input-group-addon', onClick: function onClick() {
							_this2._increase(value);
						} },
					this.props.increaseIcon
				),
				_react2.default.createElement('input', { className: 'form-control', type: 'text', onChange: this._onChange, value: value }),
				_react2.default.createElement(
					'span',
					{ className: 'input-group-addon', onClick: function onClick() {
							_this2._decrease(value);
						} },
					this.props.decreaseIcon
				)
			);
		}
	}]);

	return CounterInput;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
	var _this3 = this;

	this.set = function (value) {
		_this3.setState({
			value: value
		});
		_this3.props.onChange(value);
	};

	this._onChange = function (e) {
		var new_value = e.target.value;

		// check for empty string or invalid values
		if (new_value === '') {
			_this3.set(_this3.state.min); // fallback to min value
		} else if (new_value > _this3.state.max && _this3.state.max !== -1 || new_value < _this3.state.min) {
			return; // don't update the value
		} else if (typeof new_value != 'number') {
			var parsed = parseInt(new_value, 10); // try to parse the number

			// if parsed is not a number
			if (isNaN(parsed)) {
				_this3.set(_this3.state.min); // fallback to min value
			} else {
				// if parsed succesfully update the value
				_this3.set(parsed);
			}
		}
	};

	this._increase = function (value) {
		if (value === '') {
			_this3.set(_this3.state.min); // fallback to min value
		} else {
			var parsed = parseInt(value, 10);

			// if parsed is not a number
			if (isNaN(parsed)) {
				_this3.set(_this3.state.min); // fallback to min value
			} else {
				if (value < _this3.state.max || _this3.state.max == -1) {
					_this3.set(parsed + 1); // increment value
				}
			}
		}
	};

	this._decrease = function (value) {
		if (value === '') {
			_this3.set(_this3.state.min); // fallback to min value
		} else {
			var parsed = parseInt(value, 10);

			// if parsed is not a number
			if (isNaN(parsed)) {
				_this3.set(_this3.state.min); // fallback to min value
			} else {
				if (value > _this3.state.min) {
					_this3.set(parsed - 1); // increment value
				}
			}
		}
	};
};

exports.default = CounterInput;
