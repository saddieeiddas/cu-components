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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL1N0YW1pbmFUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3FCQU11QixPQUFPOztJQUFsQixLQUFLOztBQUVqQixJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFXOzs7QUFDOUMsVUFBTSxFQUFFLGtCQUFBO0FBQ04sWUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtBQUN6QixnQkFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUN6RDtBQUNELGVBQVEsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxLQUFJLEVBQUMsTUFBTSxFQUFBLElBQUcsRUFBQyxjQUFjLEVBQUEsRUFBRSxJQUFLLENBQU0sQ0FBRTtLQUN6RDtDQUNGLENBQUMsQ0FBQztxQkFFWSxXQUFXIiwiZmlsZSI6InVuaXRmcmFtZS9jb21wb25lbnRzL1N0YW1pbmFUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcclxuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xyXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFN0YW1pbmFUZXh0ID0gUmVhY3QuY3JlYXRlQ2xhc3M8YW55LCBhbnk+KHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRleHQgPSAnJztcclxuICAgIGlmICh0aGlzLnByb3BzLm1heFN0YW1pbmEpIHtcclxuICAgICAgdGV4dCA9IHRoaXMucHJvcHMuc3RhbWluYSArICcvJyArIHRoaXMucHJvcHMubWF4U3RhbWluYTtcclxuICAgIH1cclxuICAgIHJldHVybiAoPGRpdiByZWY9XCJ0ZXh0XCIgaWQ9XCJzdGFtaW5hLXRleHRcIj57dGV4dH08L2Rpdj4pO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFtaW5hVGV4dDtcclxuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==