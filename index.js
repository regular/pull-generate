// jshint -W033, -W030

function abortCb(cb, abort, onAbort) {
  cb(abort)
  onAbort && onAbort(abort === true ? null: abort)
  return
}

var generate =
module.exports = function (initialState, expand, onAbort) {
  var state = initialState
  return function (abort, cb) {
    if(abort)
      return abortCb(cb, abort, onAbort)

    expand(state, function(err, newState, data) {
      state = newState
      cb(err, err ? null : data)
    })
  }
}
