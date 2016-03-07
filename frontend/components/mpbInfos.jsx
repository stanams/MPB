var React = require('react');
var Screen = require('./screen');
var Volumes = require('./volume');

var MpbInfos = React.createClass({
  render: function(){
    return(
      <div className="infos-box-wrapper">
        <div className="infos-box">
          <Screen/>
          <Volumes/>
        </div>
      </div>
    );
  }
})

module.exports = MpbInfos;
