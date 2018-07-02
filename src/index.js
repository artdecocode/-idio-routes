import { debuglog } from 'util'

const LOG = debuglog('@idio/routes')

/**
 * Routes functionality for the idio server including hot-route-reload.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function idioRoutes(config = {}) {
  const {
    type,
  } = config
  LOG('@idio/routes called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
