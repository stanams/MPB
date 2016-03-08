var React = require('react');

var Volume = React.createClass({
  render: function(){
    return(
      <section className="volumes-container-fuck-red">
        <section id="chuck-norris">

          <div id="volume-slider">

          </div>
          <i className="fa fa-spinner fa-5x">
            <div className="volume-cursor1">

            </div>
          </i>
          <div className="volume-cursor2">

          </div>
        </section>
        <div className="help-wrapper">
          <div className="onoffswitch">
            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked/>
            <label className="onoffswitch-label" htmlFor="myonoffswitch"></label>
          </div>
          <div className="help">
            <p className="help-section">Help</p>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Volume;
