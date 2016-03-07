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
          <div className="help">
            Help
          </div>
          <div className="onoffswitch">
            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked/>
            <label className="onoffswitch-label" for="myonoffswitch"></label>
          </div>
      </section>
    );
  }
});

module.exports = Volume;
