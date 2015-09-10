/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var HealthBar = React.createClass({
    displayName: "HealthBar",

    render: function render() {
        return React.createElement("div", { "id": "health-bar", "style": { width: this.props.width } });
    }
});
exports["default"] = HealthBar;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL0hlYWx0aEJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztxQkFNdUIsT0FBTzs7SUFBbEIsS0FBSzs7QUFFakIsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBVzs7O0FBQzVDLFVBQU0sRUFBRSxrQkFBQTtBQUNOLGVBQVEsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxJQUFHLEVBQUMsWUFBWSxFQUFBLE9BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRyxFQUFBLENBQU8sQ0FBRTtLQUMxRTtDQUNGLENBQUMsQ0FBQztxQkFFWSxTQUFTIiwiZmlsZSI6InVuaXRmcmFtZS9jb21wb25lbnRzL0hlYWx0aEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhlYWx0aEJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzPGFueSwgYW55Pih7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICg8ZGl2IGlkPVwiaGVhbHRoLWJhclwiIHN0eWxlPXt7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH19PjwvZGl2Pik7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhCYXI7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9