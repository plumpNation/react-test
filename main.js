var React = require('react');

var testComponent = React.createClass({
  render: function () {
    return React.DOM.div(null, 'Hello world');
  }
});

React.renderComponent(testComponent, document.getElementById('comment-box'));
