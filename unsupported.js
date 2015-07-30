'use strict'

var createError = require('create-error-class')

module.exports = createError('GeolocationNotSupportedError', function (message) {
  this.message = message || 'Geolocation is not supported'
})
