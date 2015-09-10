/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var HealthText = React.createClass({
    displayName: 'HealthText',

    render: function render() {
        var text = '';
        if (this.props.maxHealth) {
            text = this.props.health + '/' + this.props.maxHealth;
        }
        return React.createElement("div", { "ref": "text", "id": "health-text" }, text);
    }
});
exports['default'] = HealthText;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL0hlYWx0aFRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O0FBRWpCLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQVc7OztBQUM3QyxVQUFNLEVBQUUsa0JBQUE7QUFDTixZQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxZQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ3hCLGdCQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ3ZEO0FBQ0QsZUFBUSxLQUFBLENBQUEsYUFBQSxDQUFBLEtBQUksRUFBQSxFQUFBLEtBQUksRUFBQyxNQUFNLEVBQUEsSUFBRyxFQUFDLGFBQWEsRUFBQSxFQUFFLElBQUssQ0FBTSxDQUFFO0tBQ3hEO0NBQ0YsQ0FBQyxDQUFDO3FCQUVZLFVBQVUiLCJmaWxlIjoidW5pdGZyYW1lL2NvbXBvbmVudHMvSGVhbHRoVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhlYWx0aFRleHQgPSBSZWFjdC5jcmVhdGVDbGFzczxhbnksIGFueT4oe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubWF4SGVhbHRoKSB7XG4gICAgICB0ZXh0ID0gdGhpcy5wcm9wcy5oZWFsdGggKyAnLycgKyB0aGlzLnByb3BzLm1heEhlYWx0aDtcbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2IHJlZj1cInRleHRcIiBpZD1cImhlYWx0aC10ZXh0XCI+e3RleHR9PC9kaXY+KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWx0aFRleHQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9