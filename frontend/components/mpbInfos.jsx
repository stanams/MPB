var React = require('react');
var Screen = require('./screen');
var Volumes = require('./volume');

var MpbInfos = React.createClass({
  render: function(){
    return(
      <div className="infos-box">
        <Screen/>
        <Volumes/>
      </div>
    );
  }
})

module.exports = MpbInfos;
