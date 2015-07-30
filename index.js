'use strict'

var supported = require('has-geolocation')
var navigator = require('global/window').navigator
var dezalgo = require('dezalgo')
var GeolocationNotSupportedError = require('./unsupported')

exports.get = get
exports.watch = watch
exports.GeolocationNotSupportedError = GeolocationNotSupportedError

function get (options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  callback = dezalgo(callback)

  if (!supported) return callback(new GeolocationNotSupportedError())

  navigator.geolocation.getCurrentPosition(onLocation, onError, options)

  function onLocation (position) {
    callback(null, position)
  }

  function onError (err) {
    callback(err)
  }
}

function watch () {
  throw new Error('Not implemented')
}
