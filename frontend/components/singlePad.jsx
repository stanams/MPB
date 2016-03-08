var React = require('react');
var KeyStore = require('../stores/keyStore');
var Note = require('../util/samples');
var TONES = require('../constants/tones');

var SinglePad = React.createClass({
  getInitialState: function () {
    return { pressed: this.handleKeyPressed() };
  },

  componentDidMount: function () {
   this.note = new Note(TONES[this.props.noteName]);
   KeyStore.addListener(this._onChange);
 },

  componentWillUnmount: function () {
    KeyStore.remove();
  },

  handleKeyPressed: function () {
    var keys = KeyStore.all();
    return keys.indexOf(this.props.noteName) !== -1;
  },

  // handleClick: function () {
  //   var keys = KeyStore.all();
  //   return keys.indexOf(this.props.noteName) !== -1;
  // },

  _onChange: function () {
    // var clicked = this.handleClick();

    var pressed = this.handleKeyPressed();
     if (pressed) {
       this.note.start();
     } else {
       this.note.stop();
     }
     this.setState({ pressed: pressed });
    },

  render: function(){
    var classNameNote = this.state.pressed ? "note-key-pressed" : "note-key";
    var classNameDot = this.state.pressed ? "lightening-dot-pressed" : "lightening-dot";
    var classNameContainer = this.state.pressed ? "container-single-pad-pressed" : "container-single-pad";
   return (
     <div className={classNameContainer}>
       <div className={classNameNote}>
         <div className={classNameDot}></div>
         {this.props.noteName}
       </div>
     </div>
   );
  }
});

module.exports = SinglePad;
window.Note = Note;
// window.snd = snd;
