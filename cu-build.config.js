/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var projectName = 'cu-components';

module.exports = {
  type: 'library',
  path: __dirname,
  name: projectName,
  globs: {
  	ts: [ './src/ts/**/*.ts', './src/ts/**/*.tsx' ],
  	styl: [ './src/**/**.styl' ]
  },
  publish: {
    jsOutput: './lib',
    tsdOutput: './definitions/'
  },
};
