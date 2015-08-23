/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var React = require('react');
var Portrait = React.createClass({
    render: function () {
        var bg = this.props.race ?
            'transparent url(images/portraits/' + this.props.race + '.jpg) no-repeat top left'
            : '';
        return (React.createElement("div", {"id": "portrait", "style": { background: bg }}));
    }
});
exports.__esModule = true;
exports["default"] = Portrait;
