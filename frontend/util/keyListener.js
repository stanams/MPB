var $ = require('jquery'),
    KeyActions = require('../actions/keyActions'),
    TONES = require("../constants/tones");

var MAPPING = {
  // US keyboard
    81: "Q",
    87: 'W',
    69: 'E',
    65: 'A',
    83: 'S',
    68: 'D',
    90: 'Z',
    88: 'X',
    67: 'C'
  }

$(function() {
  $(document).on("keydown", function(e) {
    var key = MAPPING[e.keyCode.toString()];
    KeyActions.keyPressed(key);
  });

  $(document).on("keyup", function(e) {
    var key = MAPPING[e.keyCode.toString()];
    KeyActions.keyReleased(key);
  });
});
