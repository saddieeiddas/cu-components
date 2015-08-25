/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var React = require('react');
var Portrait_1 = require('./unitframe/Portrait');
var Name_1 = require('./unitframe/Name');
var HealthBar_1 = require('./unitframe/HealthBar');
var HealthText_1 = require('./unitframe/HealthText');
var StaminaBar_1 = require('./unitframe/StaminaBar');
var StaminaText_1 = require('./unitframe/StaminaText');
var Effects_1 = require('./unitframe/Effects');
var UnitFrame = React.createClass({
    getInitialState: function () {
        return {
            healthWidth: 0,
            staminaWidth: 0
        };
    },
    componentDidMount: function () {
        // get runtime widths of the health and stamina bars.
        this.setState({
            healthWidth: this.refs.healthText.getDOMNode().offsetWidth,
            staminaWidth: this.refs.staminaText.getDOMNode().offsetWidth
        });
    },
    render: function () {
        var portrait, visible;
        // work out the amount of health and stamina to show
        var healthWidth = this.props.maxHealth ? (this.props.health / this.props.maxHealth) * this.state.healthWidth : 0;
        var staminaWidth = this.props.maxStamina ? (this.props.stamina / this.props.maxStamina) * this.state.staminaWidth : 0;
        // If this unit frame includes a race (name) display a portrait.
        if (this.props.race) {
            portrait = React.createElement(Portrait_1["default"], {"race": this.props.race});
        }
        // If the unit frame has an active target, make sure it is visible.
        // By default Target Unit Frames are not visible (see styles)
        if (this.props.name) {
            visible = { visibility: 'visible' };
        }
        // Render the unit frame
        return (React.createElement("div", {"id": "unitframe", "className": this.props.className, "style": visible}, portrait, React.createElement(Name_1["default"], {"name": this.props.name}), React.createElement(HealthBar_1["default"], {"width": healthWidth}), React.createElement(HealthText_1["default"], {"ref": "healthText", "health": this.props.health, "maxHealth": this.props.maxHealth}), React.createElement(StaminaBar_1["default"], {"width": staminaWidth}), React.createElement(StaminaText_1["default"], {"ref": "staminaText", "stamina": this.props.stamina, "maxStamina": this.props.maxStamina}), React.createElement(Effects_1["default"], null)));
    }
});
exports.__esModule = true;
exports["default"] = UnitFrame;
