/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var React = require('react');
var cu_core_1 = require('cu-core');
var Portrait = React.createClass({
    // Portrait maps race ID to name because the name is used to pick up
    // the correct portrait image (a resource we own).
    portrait: function () {
        switch (this.props.race) {
            // case race.TUATHA:	   return "Tuatha";
            case cu_core_1.race.HAMADRYAD: return "hamadryad";
            case cu_core_1.race.LUCHORPAN: return "luchorpan";
            case cu_core_1.race.FIRBOG: return "firbog";
            case cu_core_1.race.VALKYRIE: return "valkyrie";
            case cu_core_1.race.HELBOUND: return "helbound";
            case cu_core_1.race.FROSTGIANT: return "frostgiant";
            // case race.DVERGR:      return "Dverger";
            case cu_core_1.race.STRM: return "strm";
            case cu_core_1.race.CAITSITH: return "caitsith";
            case cu_core_1.race.GOLEM: return "golem";
            // case race.GARGOYLE:    return "Gargoyle";
            case cu_core_1.race.STORMRIDERT: return "stormridert";
            case cu_core_1.race.STORMRIDERA: return "stormridera";
            case cu_core_1.race.STORMRIDERV: return "stormriderv";
            case cu_core_1.race.HUMANMALEV: return "humanmalev";
            case cu_core_1.race.HUMANMALEA: return "humanmalea";
            case cu_core_1.race.HUMANMALET: return "humanmalet";
        }
        return "";
    },
    render: function () {
        var portrait = this.portrait();
        return (React.createElement("div", {"id": "portrait", "className": portrait}));
    }
});
exports.__esModule = true;
exports["default"] = Portrait;
