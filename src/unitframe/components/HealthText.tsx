/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';

const HealthText = React.createClass<any, any>({
  render: function() {
    let text = '';
    if (this.props.maxHealth) {
      text = this.props.health + '/' + this.props.maxHealth;
    }
    return (<div ref="text" id="health-text">{text}</div>);
  }
});

export default HealthText;
