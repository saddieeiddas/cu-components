/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var name = 'cu-components';

module.exports = {
  type: 'library',
  path: __dirname,
  name: name,
  lib: {
    sass: true,
    sass_base: '',
    sass_dest: '',
    copy: true,
  },
  bundle: {
    sass_base: '',
    sass_dest: '',
  },
};
