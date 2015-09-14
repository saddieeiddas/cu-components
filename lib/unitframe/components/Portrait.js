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

var _cuCore = require('cu-core');

var Portrait = React.createClass({
    displayName: 'Portrait',

    // Portrait maps race ID to name because the name is used to pick up
    // the correct portrait image (a resource we own).
    portrait: function portrait() {
        switch (this.props.race) {
            // case race.TUATHA:	   return "Tuatha";
            case _cuCore.race.HAMADRYAD:
                return "hamadryad";
            case _cuCore.race.LUCHORPAN:
                return "luchorpan";
            case _cuCore.race.FIRBOG:
                return "firbog";
            case _cuCore.race.VALKYRIE:
                return "valkyrie";
            case _cuCore.race.HELBOUND:
                return "helbound";
            case _cuCore.race.FROSTGIANT:
                return "frostgiant";
            // case race.DVERGR:      return "Dverger";
            case _cuCore.race.STRM:
                return "strm";
            case _cuCore.race.CAITSITH:
                return "caitsith";
            case _cuCore.race.GOLEM:
                return "golem";
            // case race.GARGOYLE:    return "Gargoyle";
            case _cuCore.race.STORMRIDERT:
                return "stormridert";
            case _cuCore.race.STORMRIDERA:
                return "stormridera";
            case _cuCore.race.STORMRIDERV:
                return "stormriderv";
            case _cuCore.race.HUMANMALEV:
                return "humanmalev";
            case _cuCore.race.HUMANMALEA:
                return "humanmalea";
            case _cuCore.race.HUMANMALET:
                return "humanmalet";
        }
        return "";
    },
    render: function render() {
        var portrait = this.portrait();
        return React.createElement("div", { "id": "portrait", "className": portrait });
    }
});
exports['default'] = Portrait;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL1BvcnRyYWl0LnRzeCJdLCJuYW1lcyI6WyJwb3J0cmFpdCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztxQkFNdUIsT0FBTzs7SUFBbEIsS0FBSzs7c0JBQ0ksU0FBUzs7QUFFOUIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBVzs7Ozs7QUFHM0MsWUFBUSxFQUFBLG9CQUFBO0FBQ05BLGdCQUFRQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQTs7QUFFckJBLGlCQUFLQSxhQUFLQSxTQUFTQTtBQUFFQSx1QkFBT0EsV0FBV0EsQ0FBQ0E7QUFBQUEsQUFDeENBLGlCQUFLQSxhQUFLQSxTQUFTQTtBQUFFQSx1QkFBT0EsV0FBV0EsQ0FBQ0E7QUFBQUEsQUFDeENBLGlCQUFLQSxhQUFLQSxNQUFNQTtBQUFFQSx1QkFBT0EsUUFBUUEsQ0FBQ0E7QUFBQUEsQUFDbENBLGlCQUFLQSxhQUFLQSxRQUFRQTtBQUFFQSx1QkFBT0EsVUFBVUEsQ0FBQ0E7QUFBQUEsQUFDdENBLGlCQUFLQSxhQUFLQSxRQUFRQTtBQUFFQSx1QkFBT0EsVUFBVUEsQ0FBQ0E7QUFBQUEsQUFDdENBLGlCQUFLQSxhQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUE7QUFFMUNBLGlCQUFLQSxhQUFLQSxJQUFJQTtBQUFFQSx1QkFBT0EsTUFBTUEsQ0FBQ0E7QUFBQUEsQUFDOUJBLGlCQUFLQSxhQUFLQSxRQUFRQTtBQUFFQSx1QkFBT0EsVUFBVUEsQ0FBQ0E7QUFBQUEsQUFDdENBLGlCQUFLQSxhQUFLQSxLQUFLQTtBQUFFQSx1QkFBT0EsT0FBT0EsQ0FBQ0E7QUFBQUE7QUFFaENBLGlCQUFLQSxhQUFLQSxXQUFXQTtBQUFFQSx1QkFBT0EsYUFBYUEsQ0FBQ0E7QUFBQUEsQUFDNUNBLGlCQUFLQSxhQUFLQSxXQUFXQTtBQUFFQSx1QkFBT0EsYUFBYUEsQ0FBQ0E7QUFBQUEsQUFDNUNBLGlCQUFLQSxhQUFLQSxXQUFXQTtBQUFFQSx1QkFBT0EsYUFBYUEsQ0FBQ0E7QUFBQUEsQUFDNUNBLGlCQUFLQSxhQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUEsQUFDMUNBLGlCQUFLQSxhQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUEsQUFDMUNBLGlCQUFLQSxhQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUEsU0FDM0NBO0FBQ0RBLGVBQU9BLEVBQUVBLENBQUNBO0tBQ1hBO0FBQ0QsVUFBTSxFQUFBLGtCQUFBO0FBQ0pDLFlBQU1BLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO0FBQ2pDQSxlQUFRQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxLQUFJQSxFQUFBQSxFQUFBQSxJQUFHQSxFQUFDQSxVQUFVQSxFQUFBQSxXQUFVQSxFQUFFQSxRQUFTQSxFQUFBQSxDQUFPQSxDQUFFQTtLQUN6REE7Q0FDRixDQUFDLENBQUM7cUJBRVksUUFBUSIsImZpbGUiOiJ1bml0ZnJhbWUvY29tcG9uZW50cy9Qb3J0cmFpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByYWNlIH0gZnJvbSAnY3UtY29yZSc7XG5cbmNvbnN0IFBvcnRyYWl0ID0gUmVhY3QuY3JlYXRlQ2xhc3M8YW55LCBhbnk+KHtcbiAgLy8gUG9ydHJhaXQgbWFwcyByYWNlIElEIHRvIG5hbWUgYmVjYXVzZSB0aGUgbmFtZSBpcyB1c2VkIHRvIHBpY2sgdXBcbiAgLy8gdGhlIGNvcnJlY3QgcG9ydHJhaXQgaW1hZ2UgKGEgcmVzb3VyY2Ugd2Ugb3duKS5cbiAgcG9ydHJhaXQoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucmFjZSkge1xuICAgICAgLy8gY2FzZSByYWNlLlRVQVRIQTpcdCAgIHJldHVybiBcIlR1YXRoYVwiO1xuICAgICAgY2FzZSByYWNlLkhBTUFEUllBRDogcmV0dXJuIFwiaGFtYWRyeWFkXCI7XG4gICAgICBjYXNlIHJhY2UuTFVDSE9SUEFOOiByZXR1cm4gXCJsdWNob3JwYW5cIjtcbiAgICAgIGNhc2UgcmFjZS5GSVJCT0c6IHJldHVybiBcImZpcmJvZ1wiO1xuICAgICAgY2FzZSByYWNlLlZBTEtZUklFOiByZXR1cm4gXCJ2YWxreXJpZVwiO1xuICAgICAgY2FzZSByYWNlLkhFTEJPVU5EOiByZXR1cm4gXCJoZWxib3VuZFwiO1xuICAgICAgY2FzZSByYWNlLkZST1NUR0lBTlQ6IHJldHVybiBcImZyb3N0Z2lhbnRcIjtcbiAgICAgIC8vIGNhc2UgcmFjZS5EVkVSR1I6ICAgICAgcmV0dXJuIFwiRHZlcmdlclwiO1xuICAgICAgY2FzZSByYWNlLlNUUk06IHJldHVybiBcInN0cm1cIjtcbiAgICAgIGNhc2UgcmFjZS5DQUlUU0lUSDogcmV0dXJuIFwiY2FpdHNpdGhcIjtcbiAgICAgIGNhc2UgcmFjZS5HT0xFTTogcmV0dXJuIFwiZ29sZW1cIjtcbiAgICAgIC8vIGNhc2UgcmFjZS5HQVJHT1lMRTogICAgcmV0dXJuIFwiR2FyZ295bGVcIjtcbiAgICAgIGNhc2UgcmFjZS5TVE9STVJJREVSVDogcmV0dXJuIFwic3Rvcm1yaWRlcnRcIjtcbiAgICAgIGNhc2UgcmFjZS5TVE9STVJJREVSQTogcmV0dXJuIFwic3Rvcm1yaWRlcmFcIjtcbiAgICAgIGNhc2UgcmFjZS5TVE9STVJJREVSVjogcmV0dXJuIFwic3Rvcm1yaWRlcnZcIjtcbiAgICAgIGNhc2UgcmFjZS5IVU1BTk1BTEVWOiByZXR1cm4gXCJodW1hbm1hbGV2XCI7XG4gICAgICBjYXNlIHJhY2UuSFVNQU5NQUxFQTogcmV0dXJuIFwiaHVtYW5tYWxlYVwiO1xuICAgICAgY2FzZSByYWNlLkhVTUFOTUFMRVQ6IHJldHVybiBcImh1bWFubWFsZXRcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH0sXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwb3J0cmFpdCA9IHRoaXMucG9ydHJhaXQoKTtcbiAgICByZXR1cm4gKDxkaXYgaWQ9XCJwb3J0cmFpdFwiIGNsYXNzTmFtZT17cG9ydHJhaXR9PjwvZGl2Pik7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQb3J0cmFpdDtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
