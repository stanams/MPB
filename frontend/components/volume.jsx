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

      </section>
    );
  }
});

module.exports = Volume;
