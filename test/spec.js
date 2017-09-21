'use strict'

const test = require('tape')
const stemmer = require('../')

test('Get regions', t => {
  t.deepEqual(stemmer.getRegions('jakt'), {r1: 't', rest: 'jak'})
  t.deepEqual(stemmer.getRegions('klorna'), {r1: 'na', rest: 'klor'})
  t.deepEqual(stemmer.getRegions('klokhet'), {r1: 'het', rest: 'klok'})
  t.deepEqual(stemmer.getRegions('jcrn'), {r1: '', rest: 'jcrn'})
  t.end()
})

test('Stem sample', t => {
  const sample = require('./data/sample.js')
  const res = sample.words.map(w => stemmer.stem(w))
  t.deepEqual(res, sample.stemmedWords)
  t.end()
})

test('Should convert to lowercase', t => {
  t.equal(stemmer.stem("bJöRks"), "björk")
  t.equal(stemmer.stem("BJörkS"), "björk")
  t.end()
})

test('Stem vocabulary', t => {
  const words = require('./data/words.json')
  const stemmedWords = require('./data/stemmedWords.json')
  words.forEach((w, i) => {
    const res = stemmer.stem(w)
    const expected = stemmedWords[i]
    if (expected !== res) {
      t.fail(`${res} vs ${expected}`)
    }
  })
  t.end()
})
