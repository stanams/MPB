var React = require('react');
var ReactDOM = require('react-dom');
var MpbBox = require('./components/mpbBox');
var KeyListener = require('./util/keyListener');


var App = React.createClass({
  render: function () {
    return(
      <div className="page-container">
        Header
        <MpbBox/>
        Music Sheets
        <br></br>
        Footer
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});
