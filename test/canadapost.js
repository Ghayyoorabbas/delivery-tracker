/* globals before it describe */

'use strict'

var assert = require('assert')

var prepare = require('./fixtures/prepare')
var tracker = require('../')

var courier = tracker.courier(tracker.COURIER.CANADAPOST.CODE)

describe(tracker.COURIER.CANADAPOST.NAME, function () {
  var deliveredNumber = 'DELIVERED'

  before(function () {
    // @TODO add nock
    prepare(courier, deliveredNumber)
  })

  it('delivered number', function (done) {
    courier.trace(deliveredNumber, function (err, result) {
      assert.equal(err, null)

      assert.equal(deliveredNumber, result.number)
      assert.equal(tracker.COURIER.CANADAPOST.CODE, result.courier.code)
      assert.equal(tracker.STATUS.DELIVERED, result.status)

      done()
    })
  })
})
