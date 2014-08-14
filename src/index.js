var React = require('react');

var testComponent = React.createClass({
  getInitialState: function () {
    return {
      clicks: 0,
      seconds: 0
    };
  },
  componentDidMount: function () {
    this.interval = setInterval(function () {
      this.setState({
        seconds: this.state.seconds + 1
      });
    }.bind(this), 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.interval);
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
      ),
      React.DOM.div(null, this.state.seconds, ' seconds have passed')
    );
  }
});

// add a comm do the bad thing
React.renderComponent(testComponent(), document.getElementById('test'));
