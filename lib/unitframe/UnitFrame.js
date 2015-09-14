/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _componentsPortrait = require('./components/Portrait');

var _componentsPortrait2 = _interopRequireDefault(_componentsPortrait);

var _componentsName = require('./components/Name');

var _componentsName2 = _interopRequireDefault(_componentsName);

var _componentsHealthBar = require('./components/HealthBar');

var _componentsHealthBar2 = _interopRequireDefault(_componentsHealthBar);

var _componentsHealthText = require('./components/HealthText');

var _componentsHealthText2 = _interopRequireDefault(_componentsHealthText);

var _componentsStaminaBar = require('./components/StaminaBar');

var _componentsStaminaBar2 = _interopRequireDefault(_componentsStaminaBar);

var _componentsStaminaText = require('./components/StaminaText');

var _componentsStaminaText2 = _interopRequireDefault(_componentsStaminaText);

var _componentsEffects = require('./components/Effects');

var _componentsEffects2 = _interopRequireDefault(_componentsEffects);

var UnitFrame = React.createClass({
    displayName: 'UnitFrame',

    getInitialState: function getInitialState() {
        return {
            healthWidth: 0,
            staminaWidth: 0
        };
    },
    componentDidMount: function componentDidMount() {
        // get runtime widths of the health and stamina bars.
        this.setState({
            healthWidth: this.refs.healthText.getDOMNode().offsetWidth,
            staminaWidth: this.refs.staminaText.getDOMNode().offsetWidth
        });
    },
    render: function render() {
        var portrait = undefined,
            visible = undefined;
        // work out the amount of health and stamina to show
        var healthWidth = this.props.maxHealth ? this.props.health / this.props.maxHealth * this.state.healthWidth : 0;
        var staminaWidth = this.props.maxStamina ? this.props.stamina / this.props.maxStamina * this.state.staminaWidth : 0;
        // If this unit frame includes a race (name) display a portrait.
        if (this.props.race !== undefined) {
            portrait = React.createElement(_componentsPortrait2['default'], { "race": this.props.race });
        }
        // If the unit frame has an active target, make sure it is visible.
        // By default Target Unit Frames are not visible (see styles)
        if (this.props.name) {
            visible = { visibility: 'visible' };
        }
        // Render the unit frame
        return React.createElement("div", { "id": "unitframe", "className": this.props.className, "style": visible }, portrait, React.createElement(_componentsName2['default'], { "name": this.props.name }), React.createElement(_componentsHealthBar2['default'], { "width": healthWidth }), React.createElement(_componentsHealthText2['default'], { "ref": "healthText", "health": this.props.health, "maxHealth": this.props.maxHealth }), React.createElement(_componentsStaminaBar2['default'], { "width": staminaWidth }), React.createElement(_componentsStaminaText2['default'], { "ref": "staminaText", "stamina": this.props.stamina, "maxStamina": this.props.maxStamina }), React.createElement(_componentsEffects2['default'], null));
    }
});
exports['default'] = UnitFrame;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS91bml0ZnJhbWUvVW5pdEZyYW1lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O2tDQUdJLHVCQUF1Qjs7Ozs4QkFDM0IsbUJBQW1COzs7O21DQUNkLHdCQUF3Qjs7OztvQ0FDdkIseUJBQXlCOzs7O29DQUN6Qix5QkFBeUI7Ozs7cUNBQ3hCLDBCQUEwQjs7OztpQ0FDOUIsc0JBQXNCOzs7O0FBRTFDLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQVc7OztBQUM1QyxtQkFBZSxFQUFFLDJCQUFBO0FBQ2YsZUFBTztBQUNMLHVCQUFXLEVBQUUsQ0FBQztBQUNkLHdCQUFZLEVBQUUsQ0FBQztTQUNoQixDQUFDO0tBQ0g7QUFDRCxxQkFBaUIsRUFBRSw2QkFBQTs7QUFFakIsWUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLHVCQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsV0FBVztBQUMxRCx3QkFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVc7U0FDN0QsQ0FBQyxDQUFDO0tBQ0o7QUFDRCxVQUFNLEVBQUUsa0JBQUE7QUFDTixZQUFJLFFBQWEsWUFBQTtZQUFFLE9BQVksWUFBQSxDQUFDOztBQUdoQyxZQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxBQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNuSCxZQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxBQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFHeEgsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7QUFDakMsb0JBQVEsR0FBRyxLQUFBLENBQUEsYUFBQSxrQ0FBUyxFQUFBLE1BQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUssRUFBQSxDQUFFLENBQUM7U0FDL0M7OztBQUlELFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDbkIsbUJBQU8sR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQztTQUNyQzs7QUFHRCxlQUNFLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsSUFBRyxFQUFDLFdBQVcsRUFBQSxXQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFVLEVBQUEsT0FBTSxFQUFFLE9BQVEsRUFBQSxFQUNqRSxRQUFTLEVBQ1YsS0FBQSxDQUFBLGFBQUEsOEJBQUssRUFBQSxNQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFLLEVBQUEsQ0FBRSxFQUM5QixLQUFBLENBQUEsYUFBQSxtQ0FBVSxFQUFBLE9BQU0sRUFBRSxXQUFZLEVBQUEsQ0FBRyxFQUNqQyxLQUFBLENBQUEsYUFBQSxvQ0FBVyxFQUFBLEtBQUksRUFBQyxZQUFZLEVBQUEsUUFBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTyxFQUFBLFdBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVUsRUFBQSxDQUFHLEVBQzNGLEtBQUEsQ0FBQSxhQUFBLG9DQUFXLEVBQUEsT0FBTSxFQUFFLFlBQWEsRUFBQSxDQUFHLEVBQ25DLEtBQUEsQ0FBQSxhQUFBLHFDQUFZLEVBQUEsS0FBSSxFQUFDLGFBQWEsRUFBQSxTQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFRLEVBQUEsWUFBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVyxFQUFBLENBQUcsRUFDakcsS0FBQSxDQUFBLGFBQUEsaUNBQVEsSUFBQSxDQUFFLENBQ04sQ0FDTjtLQUNIO0NBQ0YsQ0FBQyxDQUFDO3FCQUVZLFNBQVMiLCJmaWxlIjoidW5pdGZyYW1lL1VuaXRGcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQb3J0cmFpdCBmcm9tICcuL2NvbXBvbmVudHMvUG9ydHJhaXQnO1xuaW1wb3J0IE5hbWUgZnJvbSAnLi9jb21wb25lbnRzL05hbWUnO1xuaW1wb3J0IEhlYWx0aEJhciBmcm9tICcuL2NvbXBvbmVudHMvSGVhbHRoQmFyJztcbmltcG9ydCBIZWFsdGhUZXh0IGZyb20gJy4vY29tcG9uZW50cy9IZWFsdGhUZXh0JztcbmltcG9ydCBTdGFtaW5hQmFyIGZyb20gJy4vY29tcG9uZW50cy9TdGFtaW5hQmFyJztcbmltcG9ydCBTdGFtaW5hVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvU3RhbWluYVRleHQnO1xuaW1wb3J0IEVmZmVjdHMgZnJvbSAnLi9jb21wb25lbnRzL0VmZmVjdHMnO1xuXG5jb25zdCBVbml0RnJhbWUgPSBSZWFjdC5jcmVhdGVDbGFzczxhbnksIGFueT4oe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFsdGhXaWR0aDogMCxcbiAgICAgIHN0YW1pbmFXaWR0aDogMCxcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8gZ2V0IHJ1bnRpbWUgd2lkdGhzIG9mIHRoZSBoZWFsdGggYW5kIHN0YW1pbmEgYmFycy5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhlYWx0aFdpZHRoOiB0aGlzLnJlZnMuaGVhbHRoVGV4dC5nZXRET01Ob2RlKCkub2Zmc2V0V2lkdGgsXG4gICAgICBzdGFtaW5hV2lkdGg6IHRoaXMucmVmcy5zdGFtaW5hVGV4dC5nZXRET01Ob2RlKCkub2Zmc2V0V2lkdGhcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgcG9ydHJhaXQ6IGFueSwgdmlzaWJsZTogYW55O1xuXG4gICAgLy8gd29yayBvdXQgdGhlIGFtb3VudCBvZiBoZWFsdGggYW5kIHN0YW1pbmEgdG8gc2hvd1xuICAgIGNvbnN0IGhlYWx0aFdpZHRoID0gdGhpcy5wcm9wcy5tYXhIZWFsdGggPyAodGhpcy5wcm9wcy5oZWFsdGggLyB0aGlzLnByb3BzLm1heEhlYWx0aCkgKiB0aGlzLnN0YXRlLmhlYWx0aFdpZHRoIDogMDtcbiAgICBjb25zdCBzdGFtaW5hV2lkdGggPSB0aGlzLnByb3BzLm1heFN0YW1pbmEgPyAodGhpcy5wcm9wcy5zdGFtaW5hIC8gdGhpcy5wcm9wcy5tYXhTdGFtaW5hKSAqIHRoaXMuc3RhdGUuc3RhbWluYVdpZHRoIDogMDtcblxuICAgIC8vIElmIHRoaXMgdW5pdCBmcmFtZSBpbmNsdWRlcyBhIHJhY2UgKG5hbWUpIGRpc3BsYXkgYSBwb3J0cmFpdC5cbiAgICBpZiAodGhpcy5wcm9wcy5yYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBvcnRyYWl0ID0gPFBvcnRyYWl0IHJhY2U9e3RoaXMucHJvcHMucmFjZX0vPjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdW5pdCBmcmFtZSBoYXMgYW4gYWN0aXZlIHRhcmdldCwgbWFrZSBzdXJlIGl0IGlzIHZpc2libGUuXG4gICAgLy8gQnkgZGVmYXVsdCBUYXJnZXQgVW5pdCBGcmFtZXMgYXJlIG5vdCB2aXNpYmxlIChzZWUgc3R5bGVzKVxuICAgIGlmICh0aGlzLnByb3BzLm5hbWUpIHtcbiAgICAgIHZpc2libGUgPSB7IHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9O1xuICAgIH1cblxuICAgIC8vIFJlbmRlciB0aGUgdW5pdCBmcmFtZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwidW5pdGZyYW1lXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3Zpc2libGV9PlxuICAgICAgICB7cG9ydHJhaXR9XG4gICAgICAgIDxOYW1lIG5hbWU9e3RoaXMucHJvcHMubmFtZX0vPlxuICAgICAgICA8SGVhbHRoQmFyIHdpZHRoPXtoZWFsdGhXaWR0aH0gLz5cbiAgICAgICAgPEhlYWx0aFRleHQgcmVmPVwiaGVhbHRoVGV4dFwiIGhlYWx0aD17dGhpcy5wcm9wcy5oZWFsdGh9IG1heEhlYWx0aD17dGhpcy5wcm9wcy5tYXhIZWFsdGh9IC8+XG4gICAgICAgIDxTdGFtaW5hQmFyIHdpZHRoPXtzdGFtaW5hV2lkdGh9IC8+XG4gICAgICAgIDxTdGFtaW5hVGV4dCByZWY9XCJzdGFtaW5hVGV4dFwiIHN0YW1pbmE9e3RoaXMucHJvcHMuc3RhbWluYX0gbWF4U3RhbWluYT17dGhpcy5wcm9wcy5tYXhTdGFtaW5hfSAvPlxuICAgICAgICA8RWZmZWN0cy8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVW5pdEZyYW1lO1xuIl0sInNvdXJjZVJvb3QiOiIuLi8ifQ==
