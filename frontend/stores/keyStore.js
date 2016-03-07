var _keys = [],
    Store = require ("flux/utils").Store,
    mpbConstants = require("../constants/mpbConstants"),
    AppDispatcher = require('../dispatcher/dispatcher'),
    KeyStore = new Store(AppDispatcher);

KeyStore.all = function () {
  return _keys.slice(0);
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case mbpConstants.KEY_PRESSED:
    KeyStore._addKey(payload.note);
    break;
  case mbpConstants.KEY_RELEASED:
    KeyStore._removeKey(payload.note);
    break;
  }
};

KeyStore._addKey = function (key) {
  var idx = _keys.indexOf(key);
  if (idx == -1) {
    _keys.push(key);
    this.__emitChange();
  }
};

KeyStore._groupUpdate = function (keys) {
  _keys = keys.slice();
  this.__emitChange();
};

KeyStore._removeKey = function (key) {
  var idx = _keys.indexOf(key);
  if (idx != -1) {
    _keys.splice(idx, 1);
    this.__emitChange();
  }
};

module.exports = KeyStore;
