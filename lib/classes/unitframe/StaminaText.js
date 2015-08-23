/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var React = require('react');
var StaminaText = React.createClass({
    render: function () {
        var text = '';
        if (this.props.maxStamina) {
            text = this.props.stamina + '/' + this.props.maxStamina;
        }
        return (React.createElement("div", {"ref": "text", "id": "stamina-text"}, text));
    }
});
exports.__esModule = true;
exports["default"] = StaminaText;
