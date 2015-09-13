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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL1BvcnRyYWl0LnRzeCJdLCJuYW1lcyI6WyJwb3J0cmFpdCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztxQkFNdUIsT0FBTzs7SUFBbEIsS0FBSzs7c0JBQ0ksU0FBUzs7QUFFOUIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBVzs7Ozs7QUFHM0MsWUFBUSxFQUFBLG9CQUFBO0FBQ05BLGdCQUFRQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQTs7QUFFckJBLGlCQUFLQSxhQUFLQSxTQUFTQTtBQUFFQSx1QkFBT0EsV0FBV0EsQ0FBQ0E7QUFBQUEsQUFDeENBLGlCQUFLQSxhQUFLQSxTQUFTQTtBQUFFQSx1QkFBT0EsV0FBV0EsQ0FBQ0E7QUFBQUEsQUFDeENBLGlCQUFLQSxhQUFLQSxNQUFNQTtBQUFFQSx1QkFBT0EsUUFBUUEsQ0FBQ0E7QUFBQUEsQUFDbENBLGlCQUFLQSxhQUFLQSxRQUFRQTtBQUFFQSx1QkFBT0EsVUFBVUEsQ0FBQ0E7QUFBQUEsQUFDdENBLGlCQUFLQSxhQUFLQSxRQUFRQTtBQUFFQSx1QkFBT0EsVUFBVUEsQ0FBQ0E7QUFBQUEsQUFDdENBLGlCQUFLQSxhQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUE7QUFFMUNBLGlCQUFLQSxhQUFLQSxJQUFJQTtBQUFFQSx1QkFBT0EsTUFBTUEsQ0FBQ0E7QUFBQUEsQUFDOUJBLGlCQUFLQSxhQUFLQSxRQUFRQTtBQUFFQSx1QkFBT0EsVUFBVUEsQ0FBQ0E7QUFBQUEsQUFDdENBLGlCQUFLQSxhQUFLQSxLQUFLQTtBQUFFQSx1QkFBT0EsT0FBT0EsQ0FBQ0E7QUFBQUE7QUFFaENBLGlCQUFLQSxhQUFLQSxXQUFXQTtBQUFFQSx1QkFBT0EsYUFBYUEsQ0FBQ0E7QUFBQUEsQUFDNUNBLGlCQUFLQSxhQUFLQSxXQUFXQTtBQUFFQSx1QkFBT0EsYUFBYUEsQ0FBQ0E7QUFBQUEsQUFDNUNBLGlCQUFLQSxhQUFLQSxXQUFXQTtBQUFFQSx1QkFBT0EsYUFBYUEsQ0FBQ0E7QUFBQUEsQUFDNUNBLGlCQUFLQSxhQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUEsQUFDMUNBLGlCQUFLQSxhQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUEsQUFDMUNBLGlCQUFLQSxhQUFLQSxVQUFVQTtBQUFFQSx1QkFBT0EsWUFBWUEsQ0FBQ0E7QUFBQUEsU0FDM0NBO0FBQ0RBLGVBQU9BLEVBQUVBLENBQUNBO0tBQ1hBO0FBQ0QsVUFBTSxFQUFBLGtCQUFBO0FBQ0pDLFlBQU1BLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO0FBQ2pDQSxlQUFRQSxLQUFBQSxDQUFBQSxhQUFBQSxDQUFBQSxLQUFJQSxFQUFBQSxFQUFBQSxJQUFHQSxFQUFDQSxVQUFVQSxFQUFBQSxXQUFVQSxFQUFFQSxRQUFTQSxFQUFBQSxDQUFPQSxDQUFFQTtLQUN6REE7Q0FDRixDQUFDLENBQUM7cUJBRVksUUFBUSIsImZpbGUiOiJ1bml0ZnJhbWUvY29tcG9uZW50cy9Qb3J0cmFpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXHJcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcclxuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJhY2UgfSBmcm9tICdjdS1jb3JlJztcclxuXHJcbmNvbnN0IFBvcnRyYWl0ID0gUmVhY3QuY3JlYXRlQ2xhc3M8YW55LCBhbnk+KHtcclxuICAvLyBQb3J0cmFpdCBtYXBzIHJhY2UgSUQgdG8gbmFtZSBiZWNhdXNlIHRoZSBuYW1lIGlzIHVzZWQgdG8gcGljayB1cFxyXG4gIC8vIHRoZSBjb3JyZWN0IHBvcnRyYWl0IGltYWdlIChhIHJlc291cmNlIHdlIG93bikuXHJcbiAgcG9ydHJhaXQoKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5yYWNlKSB7XHJcbiAgICAgIC8vIGNhc2UgcmFjZS5UVUFUSEE6XHQgICByZXR1cm4gXCJUdWF0aGFcIjtcclxuICAgICAgY2FzZSByYWNlLkhBTUFEUllBRDogcmV0dXJuIFwiaGFtYWRyeWFkXCI7XHJcbiAgICAgIGNhc2UgcmFjZS5MVUNIT1JQQU46IHJldHVybiBcImx1Y2hvcnBhblwiO1xyXG4gICAgICBjYXNlIHJhY2UuRklSQk9HOiByZXR1cm4gXCJmaXJib2dcIjtcclxuICAgICAgY2FzZSByYWNlLlZBTEtZUklFOiByZXR1cm4gXCJ2YWxreXJpZVwiO1xyXG4gICAgICBjYXNlIHJhY2UuSEVMQk9VTkQ6IHJldHVybiBcImhlbGJvdW5kXCI7XHJcbiAgICAgIGNhc2UgcmFjZS5GUk9TVEdJQU5UOiByZXR1cm4gXCJmcm9zdGdpYW50XCI7XHJcbiAgICAgIC8vIGNhc2UgcmFjZS5EVkVSR1I6ICAgICAgcmV0dXJuIFwiRHZlcmdlclwiO1xyXG4gICAgICBjYXNlIHJhY2UuU1RSTTogcmV0dXJuIFwic3RybVwiO1xyXG4gICAgICBjYXNlIHJhY2UuQ0FJVFNJVEg6IHJldHVybiBcImNhaXRzaXRoXCI7XHJcbiAgICAgIGNhc2UgcmFjZS5HT0xFTTogcmV0dXJuIFwiZ29sZW1cIjtcclxuICAgICAgLy8gY2FzZSByYWNlLkdBUkdPWUxFOiAgICByZXR1cm4gXCJHYXJnb3lsZVwiO1xyXG4gICAgICBjYXNlIHJhY2UuU1RPUk1SSURFUlQ6IHJldHVybiBcInN0b3JtcmlkZXJ0XCI7XHJcbiAgICAgIGNhc2UgcmFjZS5TVE9STVJJREVSQTogcmV0dXJuIFwic3Rvcm1yaWRlcmFcIjtcclxuICAgICAgY2FzZSByYWNlLlNUT1JNUklERVJWOiByZXR1cm4gXCJzdG9ybXJpZGVydlwiO1xyXG4gICAgICBjYXNlIHJhY2UuSFVNQU5NQUxFVjogcmV0dXJuIFwiaHVtYW5tYWxldlwiO1xyXG4gICAgICBjYXNlIHJhY2UuSFVNQU5NQUxFQTogcmV0dXJuIFwiaHVtYW5tYWxlYVwiO1xyXG4gICAgICBjYXNlIHJhY2UuSFVNQU5NQUxFVDogcmV0dXJuIFwiaHVtYW5tYWxldFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfSxcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwb3J0cmFpdCA9IHRoaXMucG9ydHJhaXQoKTtcclxuICAgIHJldHVybiAoPGRpdiBpZD1cInBvcnRyYWl0XCIgY2xhc3NOYW1lPXtwb3J0cmFpdH0+PC9kaXY+KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydHJhaXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=