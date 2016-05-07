jest.dontMock('../Header.react');

describe('Header component', function() {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react-addons-test-utils');
  var Header = require('../Header.react');

  it('renders provided header text', function() {
    var header = TestUtils.renderIntoDocument(<Header text="Testing..." />);
    var actualHeaderText = ReactDOM.findDOMNode(header).textContent;

    expect(actualHeaderText).toBe('Testing...');
  });

});
