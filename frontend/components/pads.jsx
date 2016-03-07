var React = require('react'),
    SinglePad = require('../components/SinglePad'),
    TONES = require("../constants/tones"),
    KeyStore = require('../stores/keyStore');


var Pads = React.createClass({

  componentDidMount: function () {
    KeyStore.addListener(this._onChange);
  },

  getInitialState: function () {
    return { notes: KeyStore.all() };
  },

  render: function(){

    return(
      <div className="pads-container">
        <div className="under-pads-container">
          {
             Object.keys(TONES).map(function (noteName) {
               return (<SinglePad noteName={noteName} key={noteName}/>);
             })
           }
       </div>
      </div>
    );
  }
})

module.exports = Pads;
