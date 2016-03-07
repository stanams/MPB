var React = require('react'),
    SinglePad = require('../components/SinglePad'),
    TONES = require("../constants/tones"),
    KeyStore = require('../stores/KeyStore');


var Pads = React.createClass({

  componentDidMount: function () {
    KeyStore.addListener(this._onChange);
  },

  getInitialState: function () {
    return { notes: KeyStore.all() };
  },

  render: function(){

    return(
      <div>
        {
           Object.keys(TONES).map(function (noteName) {
             return (<SinglePad noteName={noteName} key={noteName}/>);
           })
         }
      </div>
    );
  }
})

module.exports = Pads;
