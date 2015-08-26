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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL0hlYWx0aFRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FCQUt1QixPQUFPOztJQUFsQixLQUFLOztBQUNqQixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFVOzs7QUFDN0MsVUFBTSxFQUFFLGtCQUFBO0FBQ1AsWUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUN6QixnQkFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUN0RDtBQUNELGVBQVEsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxLQUFJLEVBQUMsTUFBTSxFQUFBLElBQUcsRUFBQyxhQUFhLEVBQUEsRUFBRSxJQUFLLENBQU0sQ0FBRTtLQUN2RDtDQUNELENBQUMsQ0FBQztxQkFDWSxVQUFVIiwiZmlsZSI6InVuaXRmcmFtZS9jb21wb25lbnRzL0hlYWx0aFRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IEhlYWx0aFRleHQgPSBSZWFjdC5jcmVhdGVDbGFzczxhbnksYW55Pih7XG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0bGV0IHRleHQgPSAnJztcblx0XHRpZiAodGhpcy5wcm9wcy5tYXhIZWFsdGgpIHtcblx0XHRcdHRleHQgPSB0aGlzLnByb3BzLmhlYWx0aCArICcvJyArIHRoaXMucHJvcHMubWF4SGVhbHRoO1xuXHRcdH1cblx0XHRyZXR1cm4gKDxkaXYgcmVmPVwidGV4dFwiIGlkPVwiaGVhbHRoLXRleHRcIj57dGV4dH08L2Rpdj4pO1xuXHR9XG59KTtcbmV4cG9ydCBkZWZhdWx0IEhlYWx0aFRleHQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9