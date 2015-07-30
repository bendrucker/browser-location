# browser-location [![Build Status](https://travis-ci.org/bendrucker/browser-location.svg?branch=master)](https://travis-ci.org/bendrucker/browser-location)

> Geolocation for the browser with a Node-friendly API


## Install

```
$ npm install --save browser-location
```


## Usage

```js
var location = require('browser-location')

location.get(function (err, position) {
  //=> null, {coords: {...}, timestamp: ...}  
})
```

## API

#### `location.get([options], callback)` -> `undefined`

##### options

Type: `object`  
Default: `{}`

A [`PositionsOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) object that will be passed to the geolocation API.

##### callback

*Required*  
Type: `function`
Arguments: `err, position`

A callback that will be called with an error or a [`Position`](https://developer.mozilla.org/en-US/docs/Web/API/Position) object. The error will be a `GeolocationNotSupported` error if geolocation is not supported. Otherwise it will be a [`PositionError`](https://developer.mozilla.org/en-US/docs/Web/API/PositionError).

#### `location.GeolocationNotSupportedError(message)` -> `error`

The constructor for the error that is returned in browsers that do not support geolocation. Exposed as a convenience so your code can distinguish between error states.

##### message

Type: `string`  
Default: `'Geolocation is not supported'`

## License

MIT © [Ben Drucker](http://bendrucker.me)
