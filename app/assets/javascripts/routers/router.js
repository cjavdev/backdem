BackboneDemo.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.tweets = options.tweets;
  },

  routes: {
    '': 'index',
    'tweets/:id': 'show'
  },

  index: function () {
    // get either a model or collection
    // initialize a view with that model or collection
    // render the view
    this.tweets.fetch();
    var view = new BackboneDemo.Views.TweetsIndex({
      collection: this.tweets
    });
    this.$rootEl.html(view.render().$el);
  },

  show: function (id) {
    var tweet = new BackboneDemo.Models.Tweet({ id: id });
    tweet.fetch();

    var view = new BackboneDemo.Views.TweetShow({
      model: tweet
    });
    this.$rootEl.html(view.render().$el);
  },
});
