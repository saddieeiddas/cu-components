/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
const Portrait = React.createClass<any, any>({
	render: function() {
		var  bg = this.props.race ?
				'transparent url(images/portraits/' + this.props.race + '.jpg) no-repeat top left'
				: '';
		return (<div id="portrait" style={{ background: bg }}></div>);
	}
});
export default Portrait;
