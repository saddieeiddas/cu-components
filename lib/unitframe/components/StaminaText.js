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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL1N0YW1pbmFUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3FCQU11QixPQUFPOztJQUFsQixLQUFLOztBQUVqQixJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFXOzs7QUFDOUMsVUFBTSxFQUFFLGtCQUFBO0FBQ04sWUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtBQUN6QixnQkFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUN6RDtBQUNELGVBQVEsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxLQUFJLEVBQUMsTUFBTSxFQUFBLElBQUcsRUFBQyxjQUFjLEVBQUEsRUFBRSxJQUFLLENBQU0sQ0FBRTtLQUN6RDtDQUNGLENBQUMsQ0FBQztxQkFFWSxXQUFXIiwiZmlsZSI6InVuaXRmcmFtZS9jb21wb25lbnRzL1N0YW1pbmFUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhbWluYVRleHQgPSBSZWFjdC5jcmVhdGVDbGFzczxhbnksIGFueT4oe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubWF4U3RhbWluYSkge1xuICAgICAgdGV4dCA9IHRoaXMucHJvcHMuc3RhbWluYSArICcvJyArIHRoaXMucHJvcHMubWF4U3RhbWluYTtcbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2IHJlZj1cInRleHRcIiBpZD1cInN0YW1pbmEtdGV4dFwiPnt0ZXh0fTwvZGl2Pik7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGFtaW5hVGV4dDtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
