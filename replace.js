'use strict';

const eejs = require('md_mudoc/node/eejs/');


exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + "<link href='../static/plugins/md_replace/static/css/fontello.css' rel='stylesheet'>";
  return cb();
}