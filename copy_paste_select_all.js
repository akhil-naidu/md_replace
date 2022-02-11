'use strict';

const eejs = require('md_mudoc-lite/node/eejs/');

exports.eejsBlock_dd_edit = (hookName, args, cb) => {
  args.content += eejs.require('md_replace/templates/copy_paste_select_all_menu.ejs');
  cb();
};
