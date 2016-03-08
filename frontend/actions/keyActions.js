var AppDispatcher = require("../dispatcher/dispatcher"),
    MpbConstants = require("../constants/mpbConstants");

var KeyActions = {
  groupUpdate: function (notes) {
    AppDispatcher.dispatch({
      actionType: MpbConstants.GROUP_UPDATE,
      notes: notes
    });
  },

  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      actionType: MpbConstants.KEY_PRESSED,
      note: noteName
    });
  },

  keyReleased: function (noteName) {
    AppDispatcher.dispatch({
      actionType: MpbConstants.KEY_RELEASED,
      note: noteName
    });
  }
};

module.exports = KeyActions;
