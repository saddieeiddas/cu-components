/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var React = require('react');
var HealthBar = React.createClass({
    render: function () {
        return (React.createElement("div", {"id": "health-bar", "style": { width: this.props.width }}));
    }
});
exports.__esModule = true;
exports["default"] = HealthBar;
