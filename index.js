
/**
 * Pokeball
 *
 * @param {Function} method to wrap
 * @return {Promise|Array} [err, result]
 */

module.exports = function pokeball(method) {
  return async function (...args) {
    try {
      return [null, await method(...args)]
    } catch (err) {
      return [err]
    }
  }
}

/**
 * Pokeball synchronous
 *
 * @param {Function} method to wrap
 * @return {Array} [err, result]
 */

module.exports.sync = function pokeballSync(method) {
  return async function (...args) {
    try {
      return [null, await method(...args)]
    } catch (err) {
      return [err]
    }
  }
}
