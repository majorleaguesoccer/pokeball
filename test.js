/* eslint-env node, mocha */
/* eslint-disable no-console */

const assert = require('assert')

describe('Pokeball', function() {
  const pokeball = require('./')

  it('works', async function() {
    const toJSON = pokeball(JSON.parse)
    const [err, obj] = await toJSON('{"a": 1}')

    assert.strictEqual(err, null)
    assert.deepEqual(obj, {a: 1})
  })

  it('throws', async function() {
    const toJSON = pokeball(str => {
      return JSON.parse(str)
    })
    const [err2, obj2] = await toJSON('{"foo 1}')
    assert(err2 instanceof Error)
    assert.strictEqual(obj2, undefined)
  })
})
