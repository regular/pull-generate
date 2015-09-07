# pull-generate
pull-stream source that produces data on state transitions

## Simple Example

``` js
var generate = require('pull-generate')
var pull = require('pull-stream')

pull(
    generate(0, function(state, cb) {
        cb(state>3 ? true : null, 1<<state, state + 1)
    }),
    pull.log()
)

```
output
```
1
2
4
8
```

## Usage

`generate(initialState, expand [, onAbort])`

`expand` is called with `initialstate` and a callback.

The callback has the following signature:

`callback(err, data, newState)`

An `err` value of `ture` indicates the end of the stream. Tne value of `newState` is used as `state` in the next call to `expand`. The value of `data` is send downstream.

## License
MIT
