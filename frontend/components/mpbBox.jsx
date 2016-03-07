var React = require('react');
var Pads = require('./pads');
var MpbInfos = require('./mpbInfos');

var MpbBox = React.createClass({
  render: function(){
    return(
      <div className="mpc-container">
        <MpbInfos/>
        <Pads/>
      </div>
    );
  }
})

module.exports = MpbBox;
