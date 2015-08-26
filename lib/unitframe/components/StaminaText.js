'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var StaminaText = React.createClass({
    displayName: 'StaminaText',

    render: function render() {
        var text = '';
        if (this.props.maxStamina) {
            text = this.props.stamina + '/' + this.props.maxStamina;
        }
        return React.createElement("div", { "ref": "text", "id": "stamina-text" }, text);
    }
});
exports['default'] = StaminaText;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL1N0YW1pbmFUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztxQkFLdUIsT0FBTzs7SUFBbEIsS0FBSzs7QUFDakIsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBVzs7O0FBQy9DLFVBQU0sRUFBRSxrQkFBQTtBQUNQLFlBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7QUFDMUIsZ0JBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDeEQ7QUFDRCxlQUFRLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsS0FBSSxFQUFDLE1BQU0sRUFBQSxJQUFHLEVBQUMsY0FBYyxFQUFBLEVBQUUsSUFBSyxDQUFNLENBQUU7S0FDeEQ7Q0FDRCxDQUFDLENBQUM7cUJBQ1ksV0FBVyIsImZpbGUiOiJ1bml0ZnJhbWUvY29tcG9uZW50cy9TdGFtaW5hVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgU3RhbWluYVRleHQgPSBSZWFjdC5jcmVhdGVDbGFzczxhbnksIGFueT4oe1xuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0ZXh0ID0gJyc7XG5cdFx0aWYgKHRoaXMucHJvcHMubWF4U3RhbWluYSkge1xuXHRcdFx0dGV4dCA9IHRoaXMucHJvcHMuc3RhbWluYSArICcvJyArIHRoaXMucHJvcHMubWF4U3RhbWluYTtcblx0XHR9XG5cdFx0cmV0dXJuICg8ZGl2IHJlZj1cInRleHRcIiBpZD1cInN0YW1pbmEtdGV4dFwiPnt0ZXh0fTwvZGl2Pik7XG5cdH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgU3RhbWluYVRleHQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9