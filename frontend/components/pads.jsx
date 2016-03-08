var React = require('react'),
    SinglePad = require('../components/SinglePad'),
    TONES = require("../constants/tones"),
    KeyStore = require('../stores/keyStore');


var Pads = React.createClass({

  componentDidMount: function () {
    KeyStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    KeyStore.remove();
  },

  getInitialState: function () {
    return { notes: KeyStore.all() };
  },

  _onChange: function () {
    this.setState({notes: KeyStore.all()});
  },

  render: function(){
    var pads = Object.keys(TONES).map(function (noteName) {
      return (<SinglePad noteName={noteName} key={noteName}/>);
    });
    return(
      <div className="pads-container">
        <div className="under-pads-container">
          {pads}
       </div>
      </div>
    );
  }
})

module.exports = Pads;
