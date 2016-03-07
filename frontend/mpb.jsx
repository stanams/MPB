var React = require('react');
var ReactDOM = require('react-dom');
var MpbBox = require('./components/mpbBox');

var App = React.createClass({
  render: function () {
    return(
      <div>
        Header
        <MpbBox/>
        Music Sheets
        Footer
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});
