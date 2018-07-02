import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import idioRoutes from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof idioRoutes, 'function')
  },
  async 'calls package without error'() {
    await idioRoutes()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await idioRoutes({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
