'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('success', function (t) {
  t.plan(2)
  var geolocation = {
    getCurrentPosition: function getCurrentPosition (success, error, options) {
      t.deepEqual(options, {
        enableHighAccuracy: true
      })
      success({
        coords: {
          latitude: 1.01,
          longitude: 2.02
        }
      })
    }
  }
  var location = proxyquire('./', {
    'has-geolocation': true,
    'global/window': {
      navigator: {geolocation: geolocation}
    }
  })
  location.get({enableHighAccuracy: true}, function (err, position) {
    if (err) return t.end(err)
    t.deepEqual(position, {
      coords: {latitude: 1.01, longitude: 2.02}
    })
  })
})

test('error', function (t) {
  t.plan(2)
  var geolocation = {
    getCurrentPosition: function getCurrentPosition (success, error, options) {
      error(new Error('No location'))
    }
  }
  var location = proxyquire('./', {
    'has-geolocation': true,
    'global/window': {
      navigator: {geolocation: geolocation}
    }
  })
  location.get(function (err) {
    t.ok(err)
    t.equal(err.message, 'No location')
  })
})

test('unsupported', function (t) {
  t.plan(2)
  var location = proxyquire('./', {
    'has-geolocation': false
  })
  location.get(function (err) {
    t.ok(err)
    t.equal(err.name, 'GeolocationNotSupportedError')
  })
})
