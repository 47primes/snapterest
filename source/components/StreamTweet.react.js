var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({
  getInitialState: function() {
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
    return { numberOfCharactersInIncreasing: null, headerText: null };
  },

  render: function() {
    console.log('[Snapterest] StreamTweet: Running render()');
    return(
      <section>
        <Header text={this.state.headerText} />
        <Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection} />
      </section>
    );
  }
});

module.exports = StreamTweet;
