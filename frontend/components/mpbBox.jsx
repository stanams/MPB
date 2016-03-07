var React = require('react');
var Pads = require('./pads');

var MpbBox = React.createClass({
  render: function(){
    return(
      <div>
        Mpb Header
        <Pads/>
      </div>
    );
  }
})

module.exports = MpbBox;
