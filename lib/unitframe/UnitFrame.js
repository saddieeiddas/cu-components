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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS91bml0ZnJhbWUvVW5pdEZyYW1lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7cUJBTXVCLE9BQU87O0lBQWxCLEtBQUs7O2tDQUdJLHVCQUF1Qjs7Ozs4QkFDM0IsbUJBQW1COzs7O21DQUNkLHdCQUF3Qjs7OztvQ0FDdkIseUJBQXlCOzs7O29DQUN6Qix5QkFBeUI7Ozs7cUNBQ3hCLDBCQUEwQjs7OztpQ0FDOUIsc0JBQXNCOzs7O0FBRTFDLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQVc7OztBQUM1QyxtQkFBZSxFQUFFLDJCQUFBO0FBQ2YsZUFBTztBQUNMLHVCQUFXLEVBQUUsQ0FBQztBQUNkLHdCQUFZLEVBQUUsQ0FBQztTQUNoQixDQUFDO0tBQ0g7QUFDRCxxQkFBaUIsRUFBRSw2QkFBQTs7QUFFakIsWUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLHVCQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsV0FBVztBQUMxRCx3QkFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVc7U0FDN0QsQ0FBQyxDQUFDO0tBQ0o7QUFDRCxVQUFNLEVBQUUsa0JBQUE7QUFDTixZQUFJLFFBQWEsWUFBQTtZQUFFLE9BQVksWUFBQSxDQUFDOztBQUdoQyxZQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxBQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNuSCxZQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxBQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFHeEgsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7QUFDakMsb0JBQVEsR0FBRyxLQUFBLENBQUEsYUFBQSxrQ0FBUyxFQUFBLE1BQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUssRUFBQSxDQUFFLENBQUM7U0FDL0M7OztBQUlELFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDbkIsbUJBQU8sR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQztTQUNyQzs7QUFHRCxlQUNFLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsSUFBRyxFQUFDLFdBQVcsRUFBQSxXQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFVLEVBQUEsT0FBTSxFQUFFLE9BQVEsRUFBQSxFQUNqRSxRQUFTLEVBQ1YsS0FBQSxDQUFBLGFBQUEsOEJBQUssRUFBQSxNQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFLLEVBQUEsQ0FBRSxFQUM5QixLQUFBLENBQUEsYUFBQSxtQ0FBVSxFQUFBLE9BQU0sRUFBRSxXQUFZLEVBQUEsQ0FBRyxFQUNqQyxLQUFBLENBQUEsYUFBQSxvQ0FBVyxFQUFBLEtBQUksRUFBQyxZQUFZLEVBQUEsUUFBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTyxFQUFBLFdBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVUsRUFBQSxDQUFHLEVBQzNGLEtBQUEsQ0FBQSxhQUFBLG9DQUFXLEVBQUEsT0FBTSxFQUFFLFlBQWEsRUFBQSxDQUFHLEVBQ25DLEtBQUEsQ0FBQSxhQUFBLHFDQUFZLEVBQUEsS0FBSSxFQUFDLGFBQWEsRUFBQSxTQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFRLEVBQUEsWUFBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVyxFQUFBLENBQUcsRUFDakcsS0FBQSxDQUFBLGFBQUEsaUNBQVEsSUFBQSxDQUFFLENBQ04sQ0FDTjtLQUNIO0NBQ0YsQ0FBQyxDQUFDO3FCQUVZLFNBQVMiLCJmaWxlIjoidW5pdGZyYW1lL1VuaXRGcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXHJcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcclxuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBQb3J0cmFpdCBmcm9tICcuL2NvbXBvbmVudHMvUG9ydHJhaXQnO1xyXG5pbXBvcnQgTmFtZSBmcm9tICcuL2NvbXBvbmVudHMvTmFtZSc7XHJcbmltcG9ydCBIZWFsdGhCYXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWx0aEJhcic7XHJcbmltcG9ydCBIZWFsdGhUZXh0IGZyb20gJy4vY29tcG9uZW50cy9IZWFsdGhUZXh0JztcclxuaW1wb3J0IFN0YW1pbmFCYXIgZnJvbSAnLi9jb21wb25lbnRzL1N0YW1pbmFCYXInO1xyXG5pbXBvcnQgU3RhbWluYVRleHQgZnJvbSAnLi9jb21wb25lbnRzL1N0YW1pbmFUZXh0JztcclxuaW1wb3J0IEVmZmVjdHMgZnJvbSAnLi9jb21wb25lbnRzL0VmZmVjdHMnO1xyXG5cclxuY29uc3QgVW5pdEZyYW1lID0gUmVhY3QuY3JlYXRlQ2xhc3M8YW55LCBhbnk+KHtcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGVhbHRoV2lkdGg6IDAsXHJcbiAgICAgIHN0YW1pbmFXaWR0aDogMCxcclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBnZXQgcnVudGltZSB3aWR0aHMgb2YgdGhlIGhlYWx0aCBhbmQgc3RhbWluYSBiYXJzLlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGhlYWx0aFdpZHRoOiB0aGlzLnJlZnMuaGVhbHRoVGV4dC5nZXRET01Ob2RlKCkub2Zmc2V0V2lkdGgsXHJcbiAgICAgIHN0YW1pbmFXaWR0aDogdGhpcy5yZWZzLnN0YW1pbmFUZXh0LmdldERPTU5vZGUoKS5vZmZzZXRXaWR0aFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHBvcnRyYWl0OiBhbnksIHZpc2libGU6IGFueTtcclxuXHJcbiAgICAvLyB3b3JrIG91dCB0aGUgYW1vdW50IG9mIGhlYWx0aCBhbmQgc3RhbWluYSB0byBzaG93XHJcbiAgICBjb25zdCBoZWFsdGhXaWR0aCA9IHRoaXMucHJvcHMubWF4SGVhbHRoID8gKHRoaXMucHJvcHMuaGVhbHRoIC8gdGhpcy5wcm9wcy5tYXhIZWFsdGgpICogdGhpcy5zdGF0ZS5oZWFsdGhXaWR0aCA6IDA7XHJcbiAgICBjb25zdCBzdGFtaW5hV2lkdGggPSB0aGlzLnByb3BzLm1heFN0YW1pbmEgPyAodGhpcy5wcm9wcy5zdGFtaW5hIC8gdGhpcy5wcm9wcy5tYXhTdGFtaW5hKSAqIHRoaXMuc3RhdGUuc3RhbWluYVdpZHRoIDogMDtcclxuXHJcbiAgICAvLyBJZiB0aGlzIHVuaXQgZnJhbWUgaW5jbHVkZXMgYSByYWNlIChuYW1lKSBkaXNwbGF5IGEgcG9ydHJhaXQuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5yYWNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcG9ydHJhaXQgPSA8UG9ydHJhaXQgcmFjZT17dGhpcy5wcm9wcy5yYWNlfS8+O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSB1bml0IGZyYW1lIGhhcyBhbiBhY3RpdmUgdGFyZ2V0LCBtYWtlIHN1cmUgaXQgaXMgdmlzaWJsZS5cclxuICAgIC8vIEJ5IGRlZmF1bHQgVGFyZ2V0IFVuaXQgRnJhbWVzIGFyZSBub3QgdmlzaWJsZSAoc2VlIHN0eWxlcylcclxuICAgIGlmICh0aGlzLnByb3BzLm5hbWUpIHtcclxuICAgICAgdmlzaWJsZSA9IHsgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVuZGVyIHRoZSB1bml0IGZyYW1lXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwidW5pdGZyYW1lXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3Zpc2libGV9PlxyXG4gICAgICAgIHtwb3J0cmFpdH1cclxuICAgICAgICA8TmFtZSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9Lz5cclxuICAgICAgICA8SGVhbHRoQmFyIHdpZHRoPXtoZWFsdGhXaWR0aH0gLz5cclxuICAgICAgICA8SGVhbHRoVGV4dCByZWY9XCJoZWFsdGhUZXh0XCIgaGVhbHRoPXt0aGlzLnByb3BzLmhlYWx0aH0gbWF4SGVhbHRoPXt0aGlzLnByb3BzLm1heEhlYWx0aH0gLz5cclxuICAgICAgICA8U3RhbWluYUJhciB3aWR0aD17c3RhbWluYVdpZHRofSAvPlxyXG4gICAgICAgIDxTdGFtaW5hVGV4dCByZWY9XCJzdGFtaW5hVGV4dFwiIHN0YW1pbmE9e3RoaXMucHJvcHMuc3RhbWluYX0gbWF4U3RhbWluYT17dGhpcy5wcm9wcy5tYXhTdGFtaW5hfSAvPlxyXG4gICAgICAgIDxFZmZlY3RzLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbml0RnJhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=