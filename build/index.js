"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = idioRoutes;

var _util = require("util");

const LOG = (0, _util.debuglog)('@idio/routes');
/**
 * Routes functionality for the idio server including hot-route-reload.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function idioRoutes(config = {}) {
  const {
    type
  } = config;
  LOG('@idio/routes called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map