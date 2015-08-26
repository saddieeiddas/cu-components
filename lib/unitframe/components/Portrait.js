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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VuaXRmcmFtZS9jb21wb25lbnRzL3VuaXRmcmFtZS9jb21wb25lbnRzL1BvcnRyYWl0LnRzeCJdLCJuYW1lcyI6WyJwb3J0cmFpdCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBS3VCLE9BQU87O0lBQWxCLEtBQUs7O3NCQUNJLFNBQVM7O0FBRTlCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQVc7Ozs7O0FBRzVDLFlBQVEsRUFBQSxvQkFBQTtBQUNQQSxnQkFBT0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUE7O0FBRXJCQSxpQkFBS0EsYUFBS0EsU0FBU0E7QUFBSUEsdUJBQU9BLFdBQVdBLENBQUNBO0FBQUFBLEFBQzFDQSxpQkFBS0EsYUFBS0EsU0FBU0E7QUFBSUEsdUJBQU9BLFdBQVdBLENBQUNBO0FBQUFBLEFBQzFDQSxpQkFBS0EsYUFBS0EsTUFBTUE7QUFBS0EsdUJBQU9BLFFBQVFBLENBQUNBO0FBQUFBLEFBQ3JDQSxpQkFBS0EsYUFBS0EsUUFBUUE7QUFBS0EsdUJBQU9BLFVBQVVBLENBQUNBO0FBQUFBLEFBQ3pDQSxpQkFBS0EsYUFBS0EsUUFBUUE7QUFBS0EsdUJBQU9BLFVBQVVBLENBQUNBO0FBQUFBLEFBQ3pDQSxpQkFBS0EsYUFBS0EsVUFBVUE7QUFBR0EsdUJBQU9BLFlBQVlBLENBQUNBO0FBQUFBO0FBRTNDQSxpQkFBS0EsYUFBS0EsSUFBSUE7QUFBU0EsdUJBQU9BLE1BQU1BLENBQUNBO0FBQUFBLEFBQ3JDQSxpQkFBS0EsYUFBS0EsUUFBUUE7QUFBS0EsdUJBQU9BLFVBQVVBLENBQUNBO0FBQUFBLEFBQ3pDQSxpQkFBS0EsYUFBS0EsS0FBS0E7QUFBUUEsdUJBQU9BLE9BQU9BLENBQUNBO0FBQUFBO0FBRXRDQSxpQkFBS0EsYUFBS0EsV0FBV0E7QUFBRUEsdUJBQU9BLGFBQWFBLENBQUNBO0FBQUFBLEFBQzVDQSxpQkFBS0EsYUFBS0EsV0FBV0E7QUFBRUEsdUJBQU9BLGFBQWFBLENBQUNBO0FBQUFBLEFBQzVDQSxpQkFBS0EsYUFBS0EsV0FBV0E7QUFBRUEsdUJBQU9BLGFBQWFBLENBQUNBO0FBQUFBLEFBQzVDQSxpQkFBS0EsYUFBS0EsVUFBVUE7QUFBR0EsdUJBQU9BLFlBQVlBLENBQUNBO0FBQUFBLEFBQzNDQSxpQkFBS0EsYUFBS0EsVUFBVUE7QUFBR0EsdUJBQU9BLFlBQVlBLENBQUNBO0FBQUFBLEFBQzNDQSxpQkFBS0EsYUFBS0EsVUFBVUE7QUFBR0EsdUJBQU9BLFlBQVlBLENBQUNBO0FBQUFBLFNBQzNDQTtBQUNEQSxlQUFPQSxFQUFFQSxDQUFDQTtLQUNWQTtBQUNELFVBQU0sRUFBQSxrQkFBQTtBQUNMQyxZQUFNQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtBQUNqQ0EsZUFBUUEsS0FBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsS0FBSUEsRUFBQUEsRUFBQUEsSUFBR0EsRUFBQ0EsVUFBVUEsRUFBQUEsV0FBVUEsRUFBRUEsUUFBU0EsRUFBQUEsQ0FBT0EsQ0FBRUE7S0FDeERBO0NBQ0QsQ0FBQyxDQUFDO3FCQUNZLFFBQVEiLCJmaWxlIjoidW5pdGZyYW1lL2NvbXBvbmVudHMvUG9ydHJhaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJhY2UgfSBmcm9tICdjdS1jb3JlJztcblxuY29uc3QgUG9ydHJhaXQgPSBSZWFjdC5jcmVhdGVDbGFzczxhbnksIGFueT4oe1xuXHQvLyBQb3J0cmFpdCBtYXBzIHJhY2UgSUQgdG8gbmFtZSBiZWNhdXNlIHRoZSBuYW1lIGlzIHVzZWQgdG8gcGljayB1cFxuXHQvLyB0aGUgY29ycmVjdCBwb3J0cmFpdCBpbWFnZSAoYSByZXNvdXJjZSB3ZSBvd24pLlxuXHRwb3J0cmFpdCgpIDogc3RyaW5nIHtcblx0XHRzd2l0Y2godGhpcy5wcm9wcy5yYWNlKSB7XG5cdFx0XHQvLyBjYXNlIHJhY2UuVFVBVEhBOlx0ICAgcmV0dXJuIFwiVHVhdGhhXCI7XG5cdFx0XHRjYXNlIHJhY2UuSEFNQURSWUFEOiAgIHJldHVybiBcImhhbWFkcnlhZFwiO1xuXHRcdFx0Y2FzZSByYWNlLkxVQ0hPUlBBTjogICByZXR1cm4gXCJsdWNob3JwYW5cIjtcblx0XHRcdGNhc2UgcmFjZS5GSVJCT0c6XHQgICByZXR1cm4gXCJmaXJib2dcIjtcblx0XHRcdGNhc2UgcmFjZS5WQUxLWVJJRTogICAgcmV0dXJuIFwidmFsa3lyaWVcIjtcblx0XHRcdGNhc2UgcmFjZS5IRUxCT1VORDogICAgcmV0dXJuIFwiaGVsYm91bmRcIjtcblx0XHRcdGNhc2UgcmFjZS5GUk9TVEdJQU5UOiAgcmV0dXJuIFwiZnJvc3RnaWFudFwiO1xuXHRcdFx0Ly8gY2FzZSByYWNlLkRWRVJHUjogICAgICByZXR1cm4gXCJEdmVyZ2VyXCI7XG5cdFx0XHRjYXNlIHJhY2UuU1RSTTogICAgICAgIHJldHVybiBcInN0cm1cIjtcblx0XHRcdGNhc2UgcmFjZS5DQUlUU0lUSDogICAgcmV0dXJuIFwiY2FpdHNpdGhcIjtcblx0XHRcdGNhc2UgcmFjZS5HT0xFTTogICAgICAgcmV0dXJuIFwiZ29sZW1cIjtcblx0XHRcdC8vIGNhc2UgcmFjZS5HQVJHT1lMRTogICAgcmV0dXJuIFwiR2FyZ295bGVcIjtcblx0XHRcdGNhc2UgcmFjZS5TVE9STVJJREVSVDogcmV0dXJuIFwic3Rvcm1yaWRlcnRcIjtcblx0XHRcdGNhc2UgcmFjZS5TVE9STVJJREVSQTogcmV0dXJuIFwic3Rvcm1yaWRlcmFcIjtcblx0XHRcdGNhc2UgcmFjZS5TVE9STVJJREVSVjogcmV0dXJuIFwic3Rvcm1yaWRlcnZcIjtcblx0XHRcdGNhc2UgcmFjZS5IVU1BTk1BTEVWOiAgcmV0dXJuIFwiaHVtYW5tYWxldlwiO1xuXHRcdFx0Y2FzZSByYWNlLkhVTUFOTUFMRUE6ICByZXR1cm4gXCJodW1hbm1hbGVhXCI7XG5cdFx0XHRjYXNlIHJhY2UuSFVNQU5NQUxFVDogIHJldHVybiBcImh1bWFubWFsZXRcIjtcblx0XHR9XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH0sXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBwb3J0cmFpdCA9IHRoaXMucG9ydHJhaXQoKTtcblx0XHRyZXR1cm4gKDxkaXYgaWQ9XCJwb3J0cmFpdFwiIGNsYXNzTmFtZT17cG9ydHJhaXR9PjwvZGl2Pik7XG5cdH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgUG9ydHJhaXQ7XG4iXSwic291cmNlUm9vdCI6Ii4uLyJ9