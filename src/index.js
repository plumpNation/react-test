var React = require('react');

var testComponent = React.createClass({
  render: function () {
    return React.DOM.div(null, 'Hello world');
  }
});

// add a comm do the bad thing
React.renderComponent(testComponent(), document.getElementById('test'));
