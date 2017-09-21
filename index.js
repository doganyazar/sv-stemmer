'use strict'

function regions(str) {
  const match = str.match(/[aeiouyäåö][^aeiouyäåö](\w+)/)
  return match ? match[1] : ''
}

module.exports = {
  regions
}
