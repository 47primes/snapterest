var React = require('react');
var Stream = require('./Stream.react');
var Collection = require('./Collection.react');

var Application = React.createClass({
  getInitialState: function() {
    return { collectionTweets: {} };
  },

  addTweetToCollection: function(tweet) {
    var collectionTweets = this.state.collectionTweets;
    collectionTweets[tweet.id] = tweet;
    this.setstate({ collectiontweets: collectiontweets });
  },

  removeTweetFromCollection: function(tweet) {
    var collectionTweets = this.state.collectionTweets;
    delete(collectionTweets[tweet.id]);
    this.setstate({ collectiontweets: collectiontweets });
  },

  removeAllTweetsFromCollection: function() {
    this.setState({ collectionTweets: {} });
  },

  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream onAddTweetToCollection={this.addTweetToCollection} />
          </div>
          <div className="col-md-8">
            <Collection tweets={this.state.collectionTweets} onRemoveTweetsFromCollection={this.removeTweetsFromCollection} onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Application;
