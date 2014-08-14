var React = require('react');

var testComponent = React.createClass({
  getInitialState: function () {
    return {
      clicks: 0
    };
  },
  handleClick: function () {
    this.setState({
      clicks: this.state.clicks + 1
    });
  },
  render: function () {
    return React.DOM.div(null,
      React.DOM.button(
        {
          onClick: this.handleClick,
        },
        'I have been clicked ', this.state.clicks, ' times'
      )
    );
  }
});

// add a comm do the bad thing
React.renderComponent(testComponent(), document.getElementById('test'));
