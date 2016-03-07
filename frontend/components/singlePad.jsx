var React = require('react');
var KeyStore = require('../stores/keyStore');
var Note = require('../util/samples');
var TONES = require('../constants/tones');

var SinglePad = React.createClass({
  componentDidMount: function () {
   this.note = new Note(TONES[this.props.noteName]);
   KeyStore.addListener(this._onChange);
 },

  getInitialState: function () {
   return { pressed: this.thisKeyPressed() };
 },

 thisKeyPressed: function () {
   var keys = KeyStore.all();
   return keys.indexOf(this.props.noteName) !== -1;
 },

 _onChange: function () {
   var pressed = this.thisKeyPressed();
   if (pressed) {
     this.note.start();
   } else {
     this.note.stop();
   }
   this.setState({ pressed: pressed });
 },

  render: function(){
    var className = "note-key";
    if(this.state.pressed){
     className += " pressed";
    }

   return <div className={className}>{this.props.noteName}</div>;
  }
});

module.exports = SinglePad;
