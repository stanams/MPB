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

  function KeyListener() {
    register();
  }

  function register() {
    $(document).on("keydown", handleKeyDown);
    $(document).on("keyup", handleKeyUp);
  }

  function handleKeyDown(event) {
    var noteName = MAPPING[event.keyCode];
    if (noteName) {
      KeyActions.keyPressed(noteName);
    }
  }

  function handleKeyUp(event) {
    var noteName = MAPPING[event.keyCode];
    if (noteName){
      KeyActions.keyReleased(noteName);
    }
  }
