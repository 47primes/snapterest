var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({
  getInitialState: function() {
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');

    return { numberOfCharactersInIncreasing: null, headerText: null };
  },

  componentWillMount: function() {
    console.log('[Snapterest] StreamTweet: 2. Running componentWillMount());

    this.setState({ numberOfCharactersIsIncreasing: true, headerText: 'Latest public photo from Twitter' });
    // A convenience tool to keep track of how many tweets we've processed at any point of time.
    // Ror demonstration purposes only. Remove this object and related code before deploying to production.
    window.snapterest = { numberOfReceivedTweets: 1, numberOfDisplayedTweets: 1 };
  },

  componentDidMount: function() {
    console.log('[Snapterest] StreamTweet: 3. Running componentDidMount());

    var componentDOMRepresentation = ReactDOM.findDOMNode(this);
    window.snapterest.headerHTML = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHTML = componentDOMRepresentation.children[1].outerHTML;
  },

  componentWillUnmount: function() {
    console.log('[snapterest] streamtweet: 8. running componentWillUnmount());

    delete window.snapterest;
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('[snapterest] streamtweet: 4. running componentWillReceiveProps());

    var currentTweetLength = this.props.tweet.text.length;
    var nextTweetLength = nextProps.tweet.text.length;
    var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    var headerText;
    this.setState({ numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({ headerText: headerText });

    window.snapterest.numberOfReceivedTweets++;
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('[snapterest] streamtweet: 5. running shouldComponentUpdate());

    return (nextProps.tweet.text.lenght > 1);
  },

  componentWillUpdate: function(nextProps, nextState) {
    console.log('[snapterest] streamtweet: 6. running componentWillUpdate());
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log('[snapterest] streamtweet: 7. running componentDidUpdate());

    window.snapterest.numberOfDisplayedTweets++;
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
