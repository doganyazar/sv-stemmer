'use strict'

const test = require('tape')
const stemmer = require('../')

test('Get R1 region', t => {
  t.equal(stemmer.regions('jakt'), 't')
  t.equal(stemmer.regions('klorna'), 'na')
  t.equal(stemmer.regions('klokhet'), 'het')
  t.equal(stemmer.regions('jcrn'), '')
  t.equal(stemmer.regions('jcsus'), '')
  t.end()
})
